<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont ">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to ='/city'>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont">&#xe6aa;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name:'Home_Header',
    computed:{
      ...mapState(['city'])//把vuex里的数据映射到vuex这个组件computed的计算属性里
    }
  }
</script>

<style lang = "stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header
    display flex
    line-height $headerHeight
    background $bgColor
    color #fff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-left .2rem
      margin-top .12rem
      padding-left .2rem
      background #ffffff
      border-radius .1rem
      color: #ccc
    .header-right
      min-width 1.04rem
      padding 0 .1rem
      float right
      text-align center
      color #ffffff
</style>

<!--scoped:这个样式只对当前的组件作用-->
