import Vue from 'vue';
import router from '@/router';
import '@/store';
import '@/elements';
import '@/util/http';
import echarts from 'echarts';
import '@/assets/font/nio/nio-regular.scss';
import '@/assets/font/nio/nio-light.scss';
import '@/assets/font/nio/nio-bold.scss';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  data: {
    Bus: new Vue(),
  },
  render: (h) => h(App),
}).$mount('#app');
