<template>
  <div>
    <el-submenu index="charts">
      <template slot="title">
        <i class="el-icon-data-line" style="color: black"/>
        <span>应用分析</span>
      </template>
      <!-- Top应用分析 -->
      <el-menu-item
        index="/home/charts/top"
        @click="selectMenu('/home/charts/top', 'Top应用分析')"
      >
        <template slot="title">
          <i class="el-icon-data-analysis" style="color: black"/>
          <span>Top应用分析</span>
        </template>
      </el-menu-item>
      <!-- 访问群体分析 -->
      <el-menu-item
        index="/home/charts/colony-analysis"
        @click="selectMenu('/home/charts/colony-analysis', '访问群体分析')"
      >
        <template slot="title">
          <i class="el-icon-s-custom" style="color: black"/>
          <span>访问群体分析</span>
        </template>
      </el-menu-item>
      <!-- 异常行为挖掘 -->
      <el-submenu index="/home/charts/abnormal-behavior">
        <template slot="title">
          <i class="el-icon-search" style="color: black"/>
          <span>异常行为挖掘</span>
        </template>
        <el-menu-item
          index="/home/charts/abnormal-behavior/game"
          @click="selectMenu('/home/charts/abnormal-behavior/game', '网络游戏类')"
        >
          <template slot="title">
            <i class="el-icon-trophy" style="color: black"/>
            <span>网络游戏类</span>
          </template>
        </el-menu-item>
        <el-menu-item
          index="/home/charts/abnormal-behavior/credit"
          @click="selectMenu('/home/charts/abnormal-behavior/credit', '校园网贷类')"
        >
          <template slot="title">
            <i class="el-icon-bank-card" style="color: black"/>
            <span>校园网贷类</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <!-- 访问时段分析 -->
      <el-menu-item
        index="/home/charts/time-span-analysis"
        @click="selectMenu('/home/charts/time-span-analysis', '访问时段分析')"
      >
        <template slot="title">
          <i class="el-icon-time" style="color: black"/>
          <span>访问时段分析</span>
        </template>
      </el-menu-item>
      <!-- 访问区域分析 -->
      <el-menu-item
        index="/home/charts/area-analysis"
        @click="selectMenu('/home/charts/area-analysis', '访问区域分析')"
      >
        <template slot="title">
          <i class="el-icon-location-information" style="color: black"/>
          <span>访问区域分析</span>
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
