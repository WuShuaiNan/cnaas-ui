import axios from 'axios';
import Vue from 'vue';

// 根据不同环境设置 baseURL。
let urlPrefix;
if (process.env.NODE_ENV === 'development') {
  urlPrefix = 'http://localhost:8080/';
} else if (process.env.NODE_ENV === 'debug') {
  urlPrefix = 'https://www.debug.com';
} else if (process.env.NODE_ENV === 'production') {
  urlPrefix = '/cnaas-webapi';
}
axios.defaults.baseURL = urlPrefix;

// 请求超时设置。
axios.defaults.timeout = 600000;

// post请求头
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // noinspection JSUnresolvedVariable
    const loginInfo = Vue.ls.get('loginInfo');
    if (!(!loginInfo && loginInfo !== 0 && loginInfo !== '')) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authentication = loginInfo.key.long_id;
    }
    return config;
  },
  (error) => Promise.error(error),
);

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    }
    return Promise.reject(response);
  },
  // 服务器状态码不是200的情况
  () => {
  },
);

export function get(url, params, responseType) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params,
      responseType,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function post(url, params, responseType) {
  return new Promise((resolve, reject) => {
    let promise;
    if (params instanceof FormData) {
      promise = axios.post(url, params, { headers: { 'Content-Type': 'multipart/form-data' }, responseType });
    } else {
      promise = axios.post(url, params, { responseType });
    }
    promise
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function del(url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      params,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function patch(url, params) {
  return new Promise((resolve, reject) => {
    axios.patch(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
