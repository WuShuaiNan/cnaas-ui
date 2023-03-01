<!--纯css的加载蒙版组件，不需要引入任何其他组件,颜色过于鲜艳，不推荐在深色调的网页使用-->
<template>
  <div class="loading-mask" :style="{
    backgroundColor,
    height,
    width,
    zIndex,
  }">
    <div class="loader">
      <div style="--x:0"></div>
      <div style="--x:1"></div>
      <div style="--x:2"></div>
      <div style="--x:3"></div>
      <div style="--x:4"></div>
      <div style="--x:5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingMask6',
  props: {
    backgroundColor: {
      type: String,
      default: 'white',
    },
    height: {
      type: String,
      default: '100%',
    },
    width: {
      type: String,
      default: '100%',
    },
    zIndex: {
      type: String,
      default: '0',
    },
  },
};
</script>

<style scoped>
.loading-mask {
  display:flex;
  -webkit-align-items:center;
  align-items:center;
  -webkit-justify-content:center;
  justify-content:center;
}

.loader {
  display: flex;
  flex-direction: row;
}

.loader div {
  position: relative;
  width: 20px;
  height: 100px;
  margin: 10px;
  overflow: hidden;
  border-radius: 25px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), #edf1f4);
  border: 2px solid #edf1f4;
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1),
  -15px -15px 20px #fff,
  inset -5px -5px 5px rgba(255, 255, 255, 0.5),
  inset 5px 5px 5px rgba(0, 0, 0, 0.05);
}

.loader div::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 25px;
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1),
  -15px -15px 20px #fff,
  inset -5px -5px 5px rgba(255, 255, 255, 0.5),
  inset 5px 5px 5px rgba(0, 0, 0, 0.05);
}

.loader div::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  box-shadow: inset -5px -5px 5px rgba(0, 0, 0, 0.1),
  0 210px 0 200px #2196f3;
  animation: animate 2.5s ease-in-out infinite;
  animation-delay: calc(var(--x) * -0.3s);
  transform: translateY(80px);
}

@keyframes animate {
  0% {
    transform: translateY(80px);
    filter: hue-rotate(0deg);
  }

  50% {
    transform: translateY(0px);
    filter: hue-rotate(90deg);
  }

  100% {
    transform: translateY(80px);
    filter: hue-rotate(180deg);
  }
}
</style>
