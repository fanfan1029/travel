<template>
  <div class="icons">
    <swiper>
      <swiper-slide >
        <div class="icon"
             v-for="item of iconList"
            :key="item.id"
        >
          <div class='icon-img'>
            <img class='icon-img-content' :src='item.imgUrl' />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
        </swiper-slide>
        <swiper-slide>
        <div class="icon">
          <div class='icon-img'>
            <img class='icon-img-content' src='https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png' />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    data () {
      return {
        iconList:[{
          id:'0001',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc:'景点门票'
        },{
          id:'0002',
          imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          desc:'泡温泉'
      }, {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        }, {
          id: '0004',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
          desc: '两江夜游'
        }, {
          id: '0005',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/de711920c71e38287d9f95f7910aa1aa.png',
          desc: '精品小团'
        }, {
          id: '0006',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          desc: '神秘武隆'
        }, {
          id: '0007',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
          desc: '重庆欢乐古'
        }, {
          id: '0008',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png',
          desc: '重庆动物园'
        }, {
          id: '0009',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/5d502c0984b223bfeed0aac5ecdc7a99.png',
          desc: '黑山谷'
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>

  @import '~@/assets/styles/varibles.styl'
  @import '~@/assets/styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top .1rem
    .icon
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        box-sizing border-box
        padding .1rem
        .icon-img-content
          display block
          margin 0 auto
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        line-height .44rem
        height .44rem
        color $darkTextColor
        text-align center
        overflow hidden
        white-space nowrap
        text-overflow ellipsis

</style>
