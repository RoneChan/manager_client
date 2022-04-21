// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import router from './router'
import axios from "axios";//引入axios
Vue.prototype.$axios = axios;//配置axios
Vue.prototype.Host = 'api';

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


Vue.prototype.importExcelData = function (obj) {
  console.log("2")
  let _this = this;
  // 通过DOM取文件数据
  this.file = obj;
  let rABS = false; //是否将文件读取为二进制字符串
  let f = this.file;
  let reader = new FileReader();
  FileReader.prototype.readAsBinaryString = function (f) {
    let binary = '';
    let rABS = false; //是否将文件读取为二进制字符串
    let wb; //读取完成的数据
    let outdata;
    let reader = new FileReader();
    reader.onload = function (e) {
      let bytes = new Uint8Array(reader.result);
      let length = bytes.byteLength;
      for (let i = 0; i < length; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      let XLSX = require('xlsx');
      if (rABS) {
        wb = XLSX.read(btoa(fixdata(binary)), {
          //手动转化
          type: 'base64'
        });
      } else {
        wb = XLSX.read(binary, {
          type: 'binary'
        });
      }
      outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[1]]); //outdata为excel的数据

      var excelData = [];
      //处理数据，处理key的值
      for (var i = 1; i < outdata.length; i++) {
        var data = {}
        data["name"] = outdata[i].__EMPTY;
        data["tradecode"] = outdata[i].__EMPTY_1;
        data["describe"] = outdata[i].__EMPTY_3;
        data["type"] = outdata[i].__EMPTY_4;
        data["scene"] = outdata[i].__EMPTY_5;
        data["validity"] = outdata[i].__EMPTY_6;
        data["tic"] = outdata[i].__EMPTY_9;
        excelData.push(data);
      }

      console.log(excelData, outdata );

  console.log("2.1")
      return excelData

    };
    reader.readAsArrayBuffer(f);
  };
  if (rABS) {
    reader.readAsArrayBuffer(f);
  } else {
    reader.readAsBinaryString(f);
  }
}
