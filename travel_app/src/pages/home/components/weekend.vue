<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list">
        <div class="item-img-wrapper">
          <img class="item-img" :src= "item.imgUrl"/>
        </div>
        <!--        </div>-->
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>


</template>
<script>
  export default {
    name: "HomeWeekend",
    props:{
      list:Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'

  .title
    line-height .8rem
    background #eee
    text-indent .2rem
    ellipsis()
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
    .item-img
      width 100%
   .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()

</style>
