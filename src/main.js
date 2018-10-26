// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import echarts from 'echarts'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './js/rem.js'
import { axios, router, VueWechatTitle, BASE_CONFIG, Config} from '@/js/base';

Vue.use(MintUI)
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false;
Vue.use(VueWechatTitle)//实例化参数

//  to do登录拦截
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    //if (store.state.common.token !== null) {
    if(sessionStorage.token){
      next()
    } else {
      // token没有进入登录页面
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    // 不需要登录， 一定要，否者进入不了路由
    next()
  }
})

axios.defaults.baseURL = BASE_CONFIG.ADDR_URL;
// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  //if(sessionStorage.token) {
    config.headers['x-mn-site'] = '1';
    config.headers['x-mn-token'] = Config.TOKEN;
 // }
//  console.log("请求地址: " + config.baseURL + config.url);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
// 路由跳转
Vue.prototype.$goRoute = function (index, query = {}, params = {}) {
  //this.$router.push({ path: 'modelManage', query: query}
  this.$router.push({ path: index, query: query});
}

// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  if(response.headers["x-change-token"]) {
    Config.TOKEN = response.headers["x-change-token"];
  }
  return response = response.data;
}, function (error) {
  let errorCode, errorMsg = '';//Unauthorized
  // if (error.response && error.response.status) {
  //   errorCode = error.response.status;//Unauthorized
  // }
  // if(errorCode == Config.UNAUTHORIZED) { //未登录或鉴权失败token过期等
  //   alert("未登录"); //加自有信息弹框提示
  //   //tGlobalVue.$router.push("/login");
  //   return false;
  // } else if (errorCode == Config.FORBIDDEN) { //无权限
  //
  //   //VT.Common.showMsg(vtGlobalVue,"权限不足", 'warn');
  //   return false;
  //   //vtGlobalVue.$router.push("/login");
  // }
  // Do something with response error
  alert('错误信息: ' + error.response.data.msg + '\n 错误码:' + error.response.data.code);
  return Promise.reject(error);
});
Vue.prototype.axios = axios;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
