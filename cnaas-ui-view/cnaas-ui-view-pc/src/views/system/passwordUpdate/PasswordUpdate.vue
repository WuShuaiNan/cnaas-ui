<template>
  <content-panel
    :breadcrumb="['系统设置','密码修改']"
  >
    <el-form ref="form" label-width="80px" :model="model" :rules="rules" >
      <el-form-item label="旧密码" prop="oldPassword">
        <el-input
          placeholder="请输入旧密码"
          v-model="model.oldPassword"
          show-password
          autosize
        />
      </el-form-item>
      <el-form-item label="新密码" prop="newPassword">
        <el-input
          placeholder="请输入新密码"
          v-model="model.newPassword"
          show-password
        />
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="handleUpdatePassword">修改密码</el-button>
  </content-panel>
</template>

<script>
import ContentPanel from '@/components/layout/LayoutPanel.vue';
import { updatePassword } from '@/api/acckeeper/account';
import resolveResponse from '@/util/response';

export default {
  name: 'PasswordUpdate',
  components: { ContentPanel },
  data() {
    const newPasswordValidator = (rule, value, callback) => { // 为什么带三个参数
      if (value === '') {
        callback(new Error('新密码不能为空'));
        return;
      }
      if (value === this.model.oldPassword) {
        callback(new Error('新密码不能与旧密码相等'));
        return;
      }
      callback();
    };

    return {
      model: {
        oldPassword: '',
        newPassword: '',
      },
      rules: {
        oldPassword: [
          { required: true, message: '旧密码不能为空', trigger: 'blur' },
        ],
        newPassword: [
          { validator: newPasswordValidator, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    handleUpdatePassword() {
      this.$refs.form.validate()
        .then((bool) => {
          if (bool) {
            return Promise.resolve(this.model);
          }
          return Promise.reject();
        })
        .then((res) => {
          const errorMessageMap = new Map();
          errorMessageMap.set(1020, '密码不正确');
          return resolveResponse(this, updatePassword(res.oldPassword, res.newPassword),
            errorMessageMap);
        })
        .then(() => {
          this.$message({
            showClose: true,
            message: '密码已重置，退出登录',
            type: 'success',
            center: true,
          });
          return Promise.resolve();
        })
        .then(() => {
          // noinspection JSUnresolvedVariable
          this.$ls.remove('loginInfo');
          this.$router.push({ path: '/login' });
        })
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
</style>
