<!--纯css的加载蒙版组件，不需要引入任何其他组件，推荐使用-->
<template>
  <div class="loading-mask" :style="{
    backgroundColor,
    height,
    width,
    zIndex,
  }">
    <div class="preloader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingMask5',
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

.preloader{
  position:relative;
}
.preloader span{
  display:block;
  bottom:0;
  width: 9px;
  height: 5px;
  background:#9b59b6;
  position:absolute;
  animation: preloader 1.5s  infinite ease-in-out;
}
.preloader span:nth-child(2){
  left:11px;
  animation-delay: .2s;
}
.preloader span:nth-child(3){
  left:22px;
  animation-delay: .4s;
}
.preloader span:nth-child(4){
  left:33px;
  animation-delay: .6s;
}
.preloader span:nth-child(5){
  left:44px;
  animation-delay: .8s;
}
@keyframes preloader {
  0% {height:5px;transform:translateY(0px);background:#9b59b6;}
  25% {height:30px;transform:translateY(15px);background:#3498db;}
  50% {height:5px;transform:translateY(0px);background:#9b59b6;}
  100% {height:5px;transform:translateY(0px);background:#9b59b6;}
}
</style>
