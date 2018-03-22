import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './routers'
import App from './App'
import ElementUI from 'element-ui';  //引入element-ui
import 'element-ui/lib/theme-chalk/index.css'; //引入element-ui的css样式表

Vue.use(VueRouter);  //使用引入的VueRouter（前端路由）
Vue.use(ElementUI); //使用你引入的element-ui  所有的组件

const router = new VueRouter({
  mode: 'history',  //取消url中的 # 问题
  routes: routers
});

// 路由跳转
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
};

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
