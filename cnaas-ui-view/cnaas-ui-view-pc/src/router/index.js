import Vue from 'vue';
import VueRouter from 'vue-router';

// import permissions from '@/util/permission';
// import { get } from '@/util/http';

Vue.use(VueRouter);

// 该函数用于判断账户是否过期，返回Promise。true为已过期，false为未过期。
// function isAuthorizationOverdue() {
//   return get('/getLoginUser', {})
//     .then((res) => {
//       if (res.code === 200) {
//         return Promise.resolve(false);
//       }
//       return Promise.resolve(true);
//     });
// }

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/Home'),
    children: [
      // 系统页面
      {
        path: '',
        redirect: '',
      }, // 首页默认路径
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/Login'),
  },
  {
    path: '*',
    component: () => import('@/views/notFind/NotFind'),
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

// 设置路由通用守卫。
router.beforeEach(async (to, from, next) => {
  // 如果目标路径为登录，则不用进行 Authorization 检测。
  if (to.path === '/login') {
    next();
    return;
  }
  // 从 local storage 中读取登录信息。
  // noinspection JSUnresolvedVariable
  // const authorization = Vue.ls.get('Authorization');
  // 如果登录信息不存在，直接跳转到登录界面。
  // if (authorization == null) {
  //   next({ path: '/login' });
  //   return;
  // }
  // 判断登录信息是否过期，如果过期就直接跳转到登录界面。
  // let isAuthorizationOverdueFlag = true; // 默认登录信息已过期
  // await isAuthorizationOverdue()
  //   .then((res) => {
  //     if (!res) {
  //       isAuthorizationOverdueFlag = false; // 设置判断标识为未过期
  //     }
  //   });
  // if (isAuthorizationOverdueFlag) { // 如果过期了，就跳转到登录页
  //   next({ path: '/login' });
  //   return;
  // }
  // 继续访问目标路径
  next();
});

export default router;
