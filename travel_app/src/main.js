// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false;
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app', //挂载点 index.html中 id=app的div元素
  router,
  components: { App }, //在项目中用了一个局部组件 叫做app 在外层的vue里，给这个组件的名字也叫做app（在es6中，键和值是一样的 只要写一个就可以了）
  template: '<App/>'  //把app这个局部组件显示在页面上
});
