<!--纯css的加载蒙版组件，不需要引入任何其他组件，推荐使用-->
<template>
  <div class="loading-mask" :style="{
    backgroundColor,
    height,
    width,
    zIndex,
  }">
    <div class="dot-revolution"/>
  </div>
</template>

<script>
export default {
  name: 'LoadingMask3',
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

.dot-revolution {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
}
.dot-revolution::before, .dot-revolution::after {
  content: "";
  display: inline-block;
  position: absolute;
}
.dot-revolution::before {
  left: 0;
  top: -15px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  transform-origin: 5px 20px;
  -webkit-animation: dot-revolution 1.4s linear infinite;
  animation: dot-revolution 1.4s linear infinite;
}
.dot-revolution::after {
  left: 0;
  top: -30px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  transform-origin: 5px 35px;
  -webkit-animation: dot-revolution 1s linear infinite;
  animation: dot-revolution 1s linear infinite;
}

@-webkit-keyframes dot-revolution {
  0% {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotateZ(360deg) translate3d(0, 0, 0);
  }
}

@keyframes dot-revolution {
  0% {
    transform: rotateZ(0deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotateZ(360deg) translate3d(0, 0, 0);
  }
}
</style>
