<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList">
<!--        <div class=""item-img-wrapper>-->
          <img class="item-img" :src= "item.imgUrl"/>
<!--        </div>-->
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>


</template>

<script>
    export default {
        name: "HomeRecommend",
      data(){
        return{
          recommendList: [{
            id:'0001',
            imgUrl:'https://imgs.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_200x200_0e98aabe.jpg',
            title:'武隆天坑地缝国家地质公园',
            desc:'4319条评论'
          },{
            id:'0002',
            imgUrl:'https://imgs.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_200x200_0e98aabe.jpg',
            title:'武隆天坑地缝国家地质公园',
            desc:'4319条评论'
          },{
            id:'0003',
            imgUrl:'https://imgs.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_200x200_0e98aabe.jpg',
            title:'武隆天坑地缝国家地质公园',
            desc:'4319条评论'
          },{
            id:'0004',
            imgUrl:'https://imgs.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_200x200_0e98aabe.jpg',
            title:'武隆天坑地缝国家地质公园',
            desc:'4319条评论'
          }]
        }
      }
    }
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl'

  .title
    line-height .8rem
    background #eee
    text-indent .2rem
    margin-top .2rem
    ellipsis()
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
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
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color: #fff

</style>
