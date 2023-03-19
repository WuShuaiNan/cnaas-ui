import Vue from 'vue';
import VueRouter from 'vue-router';

import { currentTimestamp } from '@/util/timestamp';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/Home'),
    children: [
      // 默认home页
      {
        path: '',
        redirect: '/home/welcome',
      },
      {
        name: 'welcome',
        path: 'welcome',
        component: () => import('@/views/welcome/Welcome'),
      }, // 首页
      {
        path: 'charts/top',
        component: () => import('@/views/charts/Top'),
      }, // Top应用分析
      {
        path: 'charts/colony-analysis',
        component: () => import('@/views/charts/ColonyAnalysis.vue'),
      }, // 访问群体分析
      {
        path: 'charts/abnormal-behavior/game',
        component: () => import('@/views/charts/abnormalBehavior/Game.vue'),
      }, // 异常行为挖掘(网络游戏类)
      {
        path: 'charts/abnormal-behavior/credit',
        component: () => import('@/views/charts/abnormalBehavior/Credit.vue'),
      }, // 异常行为挖掘(校园网贷类)
      {
        path: 'charts/time-span-analysis',
        component: () => import('@/views/charts/TimeSpanAnalysis.vue'),
      }, // 访问时段分析
      {
        path: 'charts/area-analysis',
        component: () => import('@/views/charts/AreaAnalysis.vue'),
      }, // 访问地区分析
      {
        path: 'charts/flow-analysis',
        component: () => import('@/views/charts/FlowAnalysis.vue'),
      }, // 访问流量分析
      {
        path: 'system/user-manager',
        component: () => import('@/views/system/userManager/UserManager'),
      }, // 用户管理
      {
        path: 'system/password-update',
        component: () => import('@/views/system/passwordUpdate/PasswordUpdate'),
      }, // 密码修改
    ],
  },
  {
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

// 添加用于登录的路由守卫。
router.beforeEach((to, from, next) => {
  // 如果目标路径为登录，则不用进行 token 检测。
  if (to.path === '/login') {
    next();
    return;
  }
  // 从 local storage 中读取登录信息。
  // noinspection JSUnresolvedVariable
  const loginInfo = Vue.ls.get('loginInfo');
  // 如果登录信息不存在，直接跳转到登录界面。
  if (loginInfo == null) {
    next({ path: '/login' });
    return;
  }
  // 如果登录信息已经过期，直接跳转到登录界面。
  // noinspection JSUnresolvedVariable
  if (currentTimestamp() > loginInfo.expire_date) {
    next({ path: '/login' });
    return;
  }
  next();
});

export default router;
