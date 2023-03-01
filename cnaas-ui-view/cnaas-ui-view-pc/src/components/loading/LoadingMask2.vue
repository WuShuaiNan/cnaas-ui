<!--纯css的加载蒙版组件，不需要引入任何其他组件，推荐使用-->
<template>
  <div class="loading-mask" :style="{
    backgroundColor,
    height,
    width,
    zIndex,
  }">
    <div class="dot-spin"/>
  </div>
</template>

<script>
export default {
  name: 'LoadingMask2',
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

.dot-spin {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: transparent;
  color: transparent;
  box-shadow: 0 -18px 0 0 #9880ff,
    12.727926px -12.727926px 0 0 #9880ff,
    18px 0 0 0 #9880ff,
    12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
    0 18px 0 0 rgba(152, 128, 255, 0),
    -12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
    -18px 0 0 0 rgba(152, 128, 255, 0),
    -12.727926px -12.727926px 0 0 rgba(152, 128, 255, 0);
  -webkit-animation: dot-spin 1.5s infinite linear;
  animation: dot-spin 1.5s infinite linear;
}

@-webkit-keyframes dot-spin {
  0%, 100% {
    box-shadow: 0 -18px 0 0 #9880ff,
    12.727926px -12.727926px 0 0 #9880ff,
    18px 0 0 0 #9880ff,
    12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
    0 18px 0 -5px rgba(152, 128, 255, 0),
    -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
    -18px 0 0 -5px rgba(152, 128, 255, 0),
    -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }
  12.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 0 #9880ff,
      18px 0 0 0 #9880ff,
      12.727926px 12.727926px 0 0 #9880ff,
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }
  25% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 0 #9880ff,
      12.727926px 12.727926px 0 0 #9880ff,
      0 18px 0 0 #9880ff,
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }
  37.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 0 #9880ff,
      0 18px 0 0 #9880ff,
      -12.727926px 12.727926px 0 0 #9880ff,
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }
  50% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 0 #9880ff,
      -12.727926px 12.727926px 0 0 #9880ff,
      -18px 0 0 0 #9880ff,
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }
  62.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 0 #9880ff,
      -18px 0 0 0 #9880ff,
      -12.727926px -12.727926px 0 0 #9880ff;
  }
  75% {
    box-shadow: 0 -18px 0 0 #9880ff,
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 0 #9880ff,
      -12.727926px -12.727926px 0 0 #9880ff;
  }
  87.5% {
    box-shadow: 0 -18px 0 0 #9880ff,
      12.727926px -12.727926px 0 0 #9880ff,
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 0 #9880ff;
  }
}

@keyframes dot-spin {
  0%, 100% {
    box-shadow: 0 -18px 0 0 #9880ff,
      12.727926px -12.727926px 0 0 #9880ff,
      18px 0 0 0 #9880ff,
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }
  12.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 0 #9880ff,
      18px 0 0 0 #9880ff,
      12.727926px 12.727926px 0 0 #9880ff,
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }
  25% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 0 #9880ff,
      12.727926px 12.727926px 0 0 #9880ff,
      0 18px 0 0 #9880ff,
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }
  37.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 0 #9880ff,
      0 18px 0 0 #9880ff,
      -12.727926px 12.727926px 0 0 #9880ff,
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }
  50% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 0 #9880ff,
      -12.727926px 12.727926px 0 0 #9880ff,
      -18px 0 0 0 #9880ff,
      -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
  }
  62.5% {
    box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 0 #9880ff,
      -18px 0 0 0 #9880ff,
      -12.727926px -12.727926px 0 0 #9880ff;
  }
  75% {
    box-shadow: 0 -18px 0 0 #9880ff,
      12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 0 #9880ff,
      -12.727926px -12.727926px 0 0 #9880ff;
  }
  87.5% {
    box-shadow: 0 -18px 0 0 #9880ff,
      12.727926px -12.727926px 0 0 #9880ff,
      18px 0 0 -5px rgba(152, 128, 255, 0),
      12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      0 18px 0 -5px rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
      -18px 0 0 -5px rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 0 #9880ff;
  }
}
</style>
