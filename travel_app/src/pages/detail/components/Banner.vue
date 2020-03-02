<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           src="//img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_600x330_9eb9410c.jpg"/>
      <div class="banner-info">
        <div class="banner-title">武隆天坑地缝国家地质公园</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"

    ></common-gallary>
  </div>
</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'
  export default {
    name: "DetailBanner",
    data(){
      return{
        showGallary:false,
        imgs:['http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_r_800x800_0ca067d7.jpg',
          'http://img1.qunarzz.com/sight/p0/201401/17/72e8ef351fc2129b8e1911fc9d8a6fc3.jpg_r_800x800_0cf2eda1.jpg']
      }
    },
    methods:{
      handleBannerClick(){
        this.showGallary=true
      },
      handleGallaryClose(){
        this.showGallary=false
      }
    },
    components:{
      CommonGallary
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      right 0
      bottom 0
      line-height .6rem
      left 0
      color #ffffff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        margin-top .14rem
        padding 0 .4rem
        line-height .4rem
        height .32rem
        border-radius .2rem
        background rgba(0,0,0,.8)
        font-size .24rem
        .banner-icon
          font-size .24rem


</style>
