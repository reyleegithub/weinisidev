/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/icon/iconfont.css";
import "./assets/base/reset.css";

//录播图
// iconfont
import "./assets/icon/iconfont";
//vue-socket 模块
import VueSocketIO from "vue-socket.io";
//轻提示插件
Vue.use(
  new VueSocketIO({
    debug: true,
    // 服务器端地址
    connection: "http://192.168.10.223:8090/",
    vuex: {}
  })
);
//移动端延迟300毫秒解决
import fast from "fastclick";
fast.attach(document.body);

//全局弹出层组件
import { Notify } from "vant";
Vue.use(Notify);

//全局button组件
import { Button } from "vant";
Vue.use(Button);
//全局倒计时模块
import { CountDown } from "vant";
Vue.use(CountDown);
//全局头部组件
import { NavBar } from "vant";
Vue.use(NavBar);

//axios组件
import axios from "axios";
import vaxios from "vue-axios";
Vue.use(vaxios, axios);

//vue生产环境标识
Vue.config.productionTip = false;

//全局弹出消息组件
import { Dialog } from "vant";
Vue.use(Dialog);

//初始用户操作坐标值
window.time = 60 * 15;
window.start = 0;

//axios 拦截请求头
axios.interceptors.request.use(
  config => {
    if (sessionStorage.getItem("islogoin") == "true") {
      if (sessionStorage.getItem("token")) {
        config.headers.token = sessionStorage.getItem("token");
      }
    } else {
      sessionStorage.clear();
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//axios 拦截响应头
axios.interceptors.response.use(
  response => {
    if (response.data.resultCode == "401") {
      console.log("response.data.resultCode是404");
      sessionStorage.clear();
      window.location.href = "/logoin";
      return;
    } else {
      return response;
    }
  },
  error => {
    return Promise.reject(error.response); // 返回接口返回的错误信息
  }
);

//全局路由守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/logoin" || to.path === "/" || to.path === "/registry") {
    next();
  } else {
    if (sessionStorage.getItem("islogoin") == "true") {
      next();
    } else {
      next("/logoin");
    }
  }
});

//VUE实例
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
