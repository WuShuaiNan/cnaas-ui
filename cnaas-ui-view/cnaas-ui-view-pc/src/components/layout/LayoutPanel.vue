<template>
  <div class="layout-panel-container" :style="layoutPanelContainerStyle">
    <div
      v-if="mainAreaVisible"
      class="main-area" >
      <!-- Header -->
      <el-card
        v-if="headerVisible"
        shadow="never"
        class="box-card-header" :body-style="headerCardBodyStyle">
        <slot name="header"/>
      </el-card>
      <!-- Center Area -->
      <div
        class="center-area" :style="centerStyle">
        <!-- West -->
        <el-card
          v-if="westVisible"
          shadow="never"
          class="box-card-west"
          :body-style="westCardBodyStyle"
        >
          <slot name="west"/>
        </el-card>
        <!-- Main -->
        <el-card
          v-if="mainVisible"
          shadow="never"
          class="box-card-main"
          :body-style="mainCardBodyStyle"
          style="height: auto;"
        >
          <slot/>
        </el-card>
        <!-- East -->
        <el-card
          v-if="eastVisible"
          shadow="never"
          class="box-card-east"
          :body-style="eastCardBodyStyle">
          <slot name="east"/>
        </el-card>
      </div>
      <!-- Footer -->
      <el-card
        v-if="footerVisible"
        shadow="never"
        class="box-card-footer"
        :body-style="footerCardBodyStyle">
        <slot name="footer"/>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutPanel',
  props: {
    layoutPanelContainerStyle: {},
    breadcrumb: {
      type: Array,
      default: () => [],
    },
    headerVisible: {
      type: Boolean,
      default: () => false,
    },
    footerVisible: {
      type: Boolean,
      default: () => false,
    },
    westVisible: {
      type: Boolean,
      default: () => false,
    },
    eastVisible: {
      type: Boolean,
      default: () => false,
    },
    indexVisible: {
      type: Boolean,
      default: () => true,
    },
    mainVisible: {
      type: Boolean,
      default: () => true,
    },
    mainAreaVisible: {
      type: Boolean,
      default: () => true,
    },
    mainStyle: {},
    centerStyle: {},
    mainCardBodyStyle: {
      type: String,
      default: () => 'padding: 15px',
    },
    westCardBodyStyle: {
      type: String,
      default: () => 'height: calc(100% - 30px); padding: 15px',
    },
    eastCardBodyStyle: {
      type: String,
      default: () => 'height: calc(100% - 30px); padding: 15px',
    },
    headerCardBodyStyle: {
      type: String,
      default: () => 'height: calc(100% - 30px); padding: 15px;',
    },
    footerCardBodyStyle: {
      type: String,
      default: () => 'height: calc(100% - 30px); padding: 15px',
    },
  },
};
</script>

<style scoped>
.layout-panel-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom:15px;
}

.breadcrumb{
  margin: 0;
}

.main-area {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.center-area {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}

.box-card-header {
  margin-bottom: 5px;
}

.box-card-footer {
  margin-top: 5px;
}

.box-card-west {
  margin-right: 5px;
}

.box-card-east {
  margin-left: 5px;
}

.box-card-main {
  height: auto;
  flex-grow: 1;
}
</style>
