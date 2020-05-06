import axios from 'axios';
import { Toast } from 'antd-mobile';
import Cookie from 'js-cookie';
import { history } from 'umi';

const http = axios.create({
  baseURL: process.env.BASEURL,
  timeout: 3000,
});
/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
  config.headers['token'] = Cookie.get('token') || '';
  Toast.loading('Loading...', 30, () => {
    console.log('Load complete !!!');
  });
  return config;
});
http.interceptors.response.use(
  response => {
    let data = response.data;
    if (data.returnCode !== '1000') {
      Toast.fail(data.message, 2);
      if (data.returnCode === '1009') {
        Cookie.remove('token');
        history.push('sign');
      }
      return Promise.reject(data);
    }
    Toast.hide();
    return data;
  },
  error => {
    return Promise.reject(error);
  },
);
export default http;
