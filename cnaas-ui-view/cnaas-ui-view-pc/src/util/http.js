import axios from 'axios';
import Vue from 'vue';

// 根据不同环境设置 baseURL。
const baseURL = 'http://10.10.100.57:5567/';
axios.defaults.baseURL = baseURL;

// 请求超时设置。
axios.defaults.timeout = 600000;

// post请求头
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${Vue.ls.get('Authorization')}`;
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

export function get(url, params) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url,
      params,
      baseURL,
    };
    axios.request(options)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url,
      data: params,
      baseURL,
    };
    axios.request(options)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
