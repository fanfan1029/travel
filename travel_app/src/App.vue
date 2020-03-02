<template>
  <div id="app">
    <!--显示的是当前路由地址所对应的内容-->
    <keep-alive exclude="Detail">
    <!--路由的内容加载过一次之后，就把路由中的内容放在内存之中-->
    <!--再进路由的时候，就不需要重新加载这个组件-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

</style>
<!--是整个应用的根组件-->
<!--单文件组件 放的vue的组件-->
<!--vue.component('abd',...)-->
