<template>
  <el-container class="container">
    <el-header class="header">
      <div class="headerDiv">
        <el-row :gutter="20">
          <!--     logo     -->
          <el-col :span="4">
            <el-image :src="img.logo" class="header-logo"/>
          </el-col>
          <!--     系统名称     -->
          <el-col :span="12">
            <p class="header-title">校园网络应用分析系统</p>
          </el-col>
          <!--     通知     -->
          <el-col :span="4">
            <el-breadcrumb separator="|" style="line-height: 50px">
              <el-breadcrumb-item>
                <el-button
                  type="text"
                  icon="el-icon-lock"
                  style="color: white"
                >
                  通知
                </el-button>
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <el-button
                  type="text"
                  icon="el-icon-question"
                  style="color: white"
                >
                  帮助
                </el-button>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <!--     用户信息     -->
          <el-col :span="4">
            <el-breadcrumb separator="|" style="line-height: 50px">
              <el-breadcrumb-item>
                <el-button type="text" icon="el-icon-user" style="color: white">
                  你好，{{accountId}}
                </el-button>
              </el-breadcrumb-item>
              <el-breadcrumb-item>
                <el-button
                  type="text"
                  icon="el-icon-switch-button"
                  style="color: white"
                  @click="handleLogout"
                >
                  注销
                </el-button>
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="250px">
        <overlay-scrollbars :options=scrollbarOption class="scroll-bar">
          <!-- 菜单 -->
          <el-menu
            ref="menu"
            text-color="black"
            active-text-color="#409EFF"
            :default-active="activeMenuIndex"
            :router="true"
            :unique-opened="true"
            style="border-right: 10px solid #DCDFE6;height: 100%;"
          >
            <!-- 应用分析 -->
            <chart-menu @selectMenu="selectMenu"/>
            <!-- 系统设置 -->
            <system-menu @selectMenu="selectMenu"/>
          </el-menu>
        </overlay-scrollbars>
      </el-aside>
      <!--   主框架   -->
      <el-main style="padding: 0">
        <el-tabs
          class="home-tabs"
          v-model="tabName"
          type="card"
          :closable="true"
          @tab-click="clickTab"
          @tab-remove="removeTab"
          style="height: 96%"
        >
          <el-tab-pane
            style="height: 0"
            v-for="(item) in tabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          />
          <router-view style="height: 100%;width: 100%;"/>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SystemMenu from '@/views/home/SystemMenu.vue';
import ChartMenu from '@/views/home/ChartMenu.vue';

import logo from '@/assets/img/home/logo.png';

import { logout, postpone } from '@/api/acckeeper/account';

import resolveResponse from '@/util/response';

export default {
  name: 'Home',
  components: {
    SystemMenu,
    ChartMenu,
  },
  data() {
    return {
      img: {
        logo,
      },
      scrollbarOption: {
        className: 'os-theme-light',
      },
      accountId: this.$ls.get('loginInfo').account_key.string_id,
      loginKeeper: null,
      timeDifference: 0,
      activeMenuIndex: this.$ls.get('activeMenuIndex'),
      tabName: this.$ls.get('tabName'),
      tabs: this.$ls.get('tabs'),
    };
  },
  methods: {
    initKeepLogin() {
      this.loginKeeper = setInterval(() => {
        // noinspection JSUnresolvedVariable
        if (this.$ls.get('loginInfo') == null) {
          return;
        }
        resolveResponse(this, postpone(this.$ls.get('loginInfo').key))
          .then((res) => {
            this.$ls.set('loginInfo', res);
          });
      }, 1000 * 60 * 5);
    },
    disposeKeepLogin() {
      if (this.loginKeeper == null) {
        return;
      }
      clearInterval(this.loginKeeper);
    },
    handleLogout() {
      resolveResponse(this, logout(this.$ls.get('loginInfo').key))
        .then(() => {
          // noinspection JSUnresolvedVariable
          this.$ls.remove('loginInfo');
          this.$router.push({ path: '/login' });
        });
    },
    selectMenu(url, name) {
      this.activeMenuIndex = url;
      this.tabName = url;
      let isTabIncluded = false;
      this.tabs.forEach((tab) => {
        if (tab.name === url) {
          isTabIncluded = true;
        }
      });
      if (!isTabIncluded) {
        this.tabs.push({ title: name, name: url });
      }
      this.$ls.set('activeMenuIndex', this.activeMenuIndex);
      this.$ls.set('tabName', this.tabName);
      this.$ls.set('tabs', this.tabs);
    },
    clickTab(tab) { // 点击标签页时，触发本函数
      if (this.$route.path !== tab.name) {
        this.$router.push(tab.name);
        this.activeMenuIndex = tab.name;
        this.tabName = tab.name;
        this.$ls.set('activeMenuIndex', this.activeMenuIndex);
        this.$ls.set('tabName', this.tabName);
      }
    },
    removeTab(tab) { // 关闭标签页时，触发本函数
      if (tab !== '/home/welcome') {
        let activeMenuIndex = ''; // 设置当前菜单
        let tabName = ''; // 设置当前标签页
        const tabs = []; // 设置标签页数组
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < this.tabs.length; i++) {
          if (this.tabs[i].name !== tab) {
            tabs.push(this.tabs[i]);
          } else {
            activeMenuIndex = this.tabs[i - 1].name;
            tabName = this.tabs[i - 1].name;
            this.$router.push(this.tabs[i - 1].name);
          }
        }
        this.activeMenuIndex = activeMenuIndex;
        this.tabName = tabName;
        this.tabs = tabs;
        this.$ls.set('activeMenuIndex', this.activeMenuIndex);
        this.$ls.set('tabName', this.tabName);
        this.$ls.set('tabs', this.tabs);
      }
    },
  },
  mounted() {
    this.initKeepLogin();
  },
  destroyed() {
    this.disposeKeepLogin();
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.header {
  background-color: #3079c1 !important;
  border-bottom: solid 10px #DCDFE6;
}

.headerDiv {
  width: 100%;
  height: 100%;
}

.header-logo {
  margin-top: 10px;
}

.header-title {
  font-weight: bold;
  font-size: 20px;
  line-height: 10px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
  "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: white;
}

</style>

<style lang="less">
.home-tabs {
  .el-tabs__content {
    height: 94%;
  }
}
</style>
