<template>
  <div>
    <el-submenu index="system">
      <template slot="title">
        <i class="el-icon-setting" style="color: black"/>
        <span>系统设置</span>
      </template>
      <!-- 用户管理 -->
      <el-menu-item
        index="/home/system/user-manager"
        @click="selectMenu('/home/system/user-manager', '用户管理')"
      >
        <template slot="title">
          <i class="el-icon-user-solid" style="color: black"/>
          <span>用户管理</span>
        </template>
      </el-menu-item>
      <!-- 密码修改 -->
      <el-menu-item
        index="/home/system/password-update"
        @click="selectMenu('/home/system/password-update', '密码修改')"
      >
        <template slot="title">
          <i class="el-icon-lock" style="color: black"/>
          <span>密码修改</span>
        </template>
      </el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SystemMenu',
  data() {
    return {
    };
  },
  methods: {
    selectMenu(url, name) {
      this.$emit('selectMenu', url, name);
    },
  },
  mounted() {
  },
};
</script>

<style scoped>
.el-menu--collapse > div > .el-submenu > .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
.el-menu--collapse > div > .el-submenu > .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
</style>
