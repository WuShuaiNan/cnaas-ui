<!--纯css的加载蒙版组件，不需要引入任何其他组件，推荐使用-->
<template>
  <div class="loading-mask" :style="{
    backgroundColor,
    height,
    width,
    zIndex,
  }">
    <div class="dot-carousel"/>
  </div>
</template>

<script>
export default {
  name: 'LoadingMask4',
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

.dot-carousel {
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  box-shadow: 9984px 0 0 0 #9880ff, 9999px 0 0 0 #9880ff, 10014px 0 0 0 #9880ff;
  -webkit-animation: dot-carousel 1.5s infinite linear;
  animation: dot-carousel 1.5s infinite linear;
}

@-webkit-keyframes dot-carousel {
  0% {
    box-shadow: 9984px 0 0 -1px #9880ff, 9999px 0 0 1px #9880ff, 10014px 0 0 -1px #9880ff;
  }
  50% {
    box-shadow: 10014px 0 0 -1px #9880ff, 9984px 0 0 -1px #9880ff, 9999px 0 0 1px #9880ff;
  }
  100% {
    box-shadow: 9999px 0 0 1px #9880ff, 10014px 0 0 -1px #9880ff, 9984px 0 0 -1px #9880ff;
  }
}

@keyframes dot-carousel {
  0% {
    box-shadow: 9984px 0 0 -1px #9880ff, 9999px 0 0 1px #9880ff, 10014px 0 0 -1px #9880ff;
  }
  50% {
    box-shadow: 10014px 0 0 -1px #9880ff, 9984px 0 0 -1px #9880ff, 9999px 0 0 1px #9880ff;
  }
  100% {
    box-shadow: 9999px 0 0 1px #9880ff, 10014px 0 0 -1px #9880ff, 9984px 0 0 -1px #9880ff;
  }
}
</style>
