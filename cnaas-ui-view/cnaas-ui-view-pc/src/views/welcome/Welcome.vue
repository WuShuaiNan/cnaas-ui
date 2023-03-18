<template>
  <el-image
    style="width: 100%; height: 80%"
    :src="img.welcome"
    fit="fill"/>
</template>

<script>
import welcome from '@/assets/img/welcome/welcome.png';

export default {
  name: 'Welcome',
  data() {
    return {
      img: {
        welcome,
      },
    };
  },
};
</script>

<style scoped>

</style>
