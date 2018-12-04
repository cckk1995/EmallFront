import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import ElementUI from 'element-ui';
import App from './App.vue'
import router from './routes/router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(BootstrapVue);
Vue.use(ElementUI);

// router.beforeEach((to, from, next) => {
//
//   // 如果进入登录页面，则清空 user 信息
//   if (to.path == '/login') {
//     sessionStorage.removeItem('user');
//   }
//
//   // 从 session 中获取 user 的信息
//   let user=sessionStorage.getItem('user');
//
//   // 如果没有登录，则回到登录页面
//   if (!user && to.path !=='/login'&&to.path !=='/register') {
//     next({ path: '/login' });
//   } else {
//     next();
//   }
// });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
