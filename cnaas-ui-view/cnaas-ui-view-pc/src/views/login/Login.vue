<template>
  <div class="login">
    <div ref='vantaRef' class="vanta">
      <el-row style="padding-top: 15%">
        <el-col :span="14">
          <el-row>
            <span class="title">校园网络应用分析系统</span>
          </el-row>
        </el-col>
        <el-col :span="10">
          <div class="login-container" v-cloak>
            <div class="login-panel">
              <el-tabs v-model="activeName" style="margin-bottom: 10px">
                <el-tab-pane name="first" >
                  <template #label>
                    <span style="font-size: 20px">账号密码登录</span>
                  </template>
                </el-tab-pane>
              </el-tabs>
              <el-form class="login-form" ref="loginForm" :model="loginForm">
                <el-form-item>
                  <el-input v-model="loginForm.account_key.string_id" placeholder="请输入用户ID">
                    <i slot="prefix" class="el-input__icon el-icon-user"/>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-input v-model="loginForm.password" placeholder="请输入密码" show-password>
                    <i slot="prefix" class="el-input__icon el-icon-lock"/>
                  </el-input>
                </el-form-item>
              </el-form>
              <el-button
                class="login-button"
                type="primary"
                @click="handleLogin"
              >
                登录
              </el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three';
import net from 'vanta/src/vanta.net';
import resolveResponse from '@/util/response';
import { login } from '@/api/acckeeper/account';

export default {
  name: 'Login',
  data() {
    return {
      activeName: 'first',
      loginForm: {
        account_key: {
          string_id: '',
        },
        password: '',
      },
    };
  },
  mounted() {
    this.vantaEffect = net({
      el: this.$refs.vantaRef,
      THREE,
    });
    this.vantaEffect.setOptions({
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3fe8ff,
      backgroundColor: 0x0,
      points: 15.00,
      maxDistance: 32.00,
    });
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  },
  methods: {
    handleLogin() {
      // 验证用户名密码是否为空
      if (!this.validate()) {
        this.$message({
          showClose: true,
          message: '用户名或密码不能为空！',
          type: 'error',
        });
        return;
      }
      // 发送登录请求
      resolveResponse(this, login(this.loginForm))
        .then((res) => {
          console.log(res);
          // noinspection JSUnresolvedVariable
          this.$ls.set('loginInfo', res);
        })
        .then(() => {
          // noinspection JSUnresolvedVariable
          const tabs = this.$ls.get('tabs');
          if (tabs === undefined || tabs === null || tabs === '') {
            // noinspection JSUnresolvedVariable
            this.$ls.set('tabs', [{ title: '首页', name: '/home/welcome' }]);
          }
        })
        .then(() => {
          // noinspection JSUnresolvedVariable
          const activeMenuIndex = this.$ls.get('activeMenuIndex');
          if (activeMenuIndex === undefined || activeMenuIndex === null) {
            // noinspection JSUnresolvedVariable
            this.$ls.set('activeMenuIndex', '');
          }
        })
        .then(() => {
          // noinspection JSUnresolvedVariable
          const tabName = this.$ls.get('tabName');
          if (tabName === undefined || tabName === null || tabName === '') {
            // noinspection JSUnresolvedVariable
            this.$ls.set('tabName', '/home/welcome');
            this.$router.push('/home/welcome');
          } else {
            this.$router.push(tabName);
          }
        });
    },
    validate() {
      return !(this.loginForm.account_key.string_id === '' || this.loginForm.password === '');
    },
  },
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
}
.login-container {
  height: 30%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}
.login-panel {
  border-radius: 15px;
  box-shadow: 2px 2px 5px #CCC;
  background-color: rgba(255, 255, 255, 0.87);
  height: 300px;
  width: 400px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3%;
  padding: 25px 10px;
  box-sizing: border-box;
}
.login-button {
  width: 70%;
}
.login-form {
  width: 70%;
  margin-top: 10px;
  margin-bottom: 10px;
}
.vanta {
  width: 100%;
  height: 100%;
}
.title {
  height: 100%;
  width: 100%;
  color: rgba(255, 255, 255, 0.90);
  font-size: 70px;
  margin-left: 15%;
  font-weight: bold;
  font-family: '楷体',serif;
}
</style>
