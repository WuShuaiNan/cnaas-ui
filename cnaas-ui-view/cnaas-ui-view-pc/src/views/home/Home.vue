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
          <el-col :span="15">
            <p class="header-title">校园网络应用分析系统</p>
          </el-col>
          <!--     用户信息     -->
          <el-col :span="5">
            <el-breadcrumb separator="|" style="line-height: 50px">
              <el-breadcrumb-item>
                <el-button type="text" icon="el-icon-user" style="color: white">
                  您好，{{userName}}
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
        <!-- 菜单 -->
        <el-menu
          ref="menu"
          text-color="black"
          active-text-color="#409EFF"
          :default-active="activeMenuIndex"
          :router="true"
          :unique-opened="true"
          style="border-right: 10px solid #DCDFE6; height: 100%;"
        >
        </el-menu>
      </el-aside>
      <!--   主框架   -->
      <el-main class="main">
        <el-tabs
          v-model="tabName"
          type="card"
          :closable="true"
          @tab-click="clickTab"
          @tab-remove="removeTab"
        >
          <el-tab-pane
            v-for="(item) in tabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          />
          <router-view style="height: 100%;width: 100%"/>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import loginFormHeaderImg from '@/assets/img/home/jierLogo.png';
// import resolveResponse from '@/util/response';

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      img: {
        logo: loginFormHeaderImg,
      },
      userName: this.$ls.get('userInfo').name,
      activeMenuIndex: this.$ls.get('activeMenuIndex'),
      tabName: this.$ls.get('tabName'),
      tabs: this.$ls.get('tabs'),
    };
  },
  methods: {
    handleLogout() {
      // resolveResponse(this, logout());
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
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.header {
  background-color: #2eace3 !important;
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

.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
}

/*noinspection CssUnusedSymbol*/
.el-header {
  display: flex;
  justify-content: flex-start;
  background-color: #1c242d;
  flex-direction: row;
}

/*noinspection CssUnusedSymbol*/
.el-aside {
  line-height: 200px;
  padding: 0;
  margin: 0;
  width: auto;
}

/*noinspection CssUnusedSymbol*/
.el-main {
  background-color: #F5F7FA;
}

/*noinspection CssUnusedSymbol*/
.el-menu {
  padding: 0;
  margin: 0;
  border-right: 0;
}

.link-container >>> .a-span:not(:last-child){
  margin-right: 10px;
}

*::-webkit-scrollbar{
  width: 7px;
}

*::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 5px;
}

* {
  scrollbar-width: 10px;
  scrollbar-base-color: green;
  scrollbar-track-color: red;
  scrollbar-arrow-color: blue;
}
</style>

<style lang="less">
.main {
  .el-tabs {
    height: 100%;
    .el-tabs__header {
      height: 5%;
    }
    .el-tabs__content {
      height: 93%;
    }
  }
}
</style>
