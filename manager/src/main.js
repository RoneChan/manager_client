// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import router from './router'
import axios from "axios";//引入axios
Vue.prototype.$axios = axios;//配置axios
Vue.prototype.Host = 'api';
//服务器地址
Vue.prototype.$serverIp = "http://127.0.0.1:8086/";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,   //该路由可以用了
  /*
  components: { App },
  template: '<App/>'  //将app里面的div替换成这个template
  */
  render: h => h(App)
})
