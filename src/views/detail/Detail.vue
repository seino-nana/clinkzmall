<template>
  <div id="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav"/>
    <scroll class="content"
            ref="scroll" 
            @scroll="contentScroll"
            :probe-type="3">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :baseInfo="baseInfo"/>
      <detail-shop-info :shop-info="shopInfo"/>
      <detail-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-item-params ref="params" :item-params="itemParams"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <detail-recommends-info ref="recommend" :recommends="recommends"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <toast :message="message" :show="show"/>
  </div>
</template>

<script>
import DetailNavBar from '@/views/detail/childcpns/DetailNavBar'
import DetailSwiper from '@/views/detail/childcpns/DetailSwiper'
import DetailBaseInfo from '@/views/detail/childcpns/DetailBaseInfo'
import DetailShopInfo from '@/views/detail/childcpns/DetailShopInfo'
import DetailInfo from '@/views/detail/childcpns/DetailInfo'
import DetailItemParams from '@/views/detail/childcpns/DetailItemParams'
import DetailCommentInfo from '@/views/detail/childcpns/DetailCommentInfo'
import DetailRecommendsInfo from '@/views/detail/childcpns/DetailRecommendsInfo'
import DetailBottomBar from '@/views/detail/childcpns/DetailBottomBar'
import Toast from '@/components/common/toast/Toast'

import Scroll from '@/components/common/scroll/Scroll'

// 网络请求
import {getDetail,GoodsBaseInfo,ShopInfo,getRecommends} from '@/network/detail'

// 防抖
import {debounce} from '@/common/utils'

// 混入
import {itemListenerMixin,backTopMixin} from '@/common/mixin'

import { mapActions } from 'vuex'


export default {
  name: 'Detail',
  mixins: [itemListenerMixin,backTopMixin],
  data() {
    return {
      iid: 'null',
      topImages: [],
      baseInfo: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      message: '加入购物车成功',
      show: false
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailInfo,
    Scroll,
    DetailItemParams,
    DetailCommentInfo,
    DetailRecommendsInfo,
    DetailBottomBar,
    Toast
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.请求商品数据
    getDetail(this.iid).then(res => {
      const data = res.result
      console.log(data);
      // 2.1.获取顶部图片
      this.topImages = data.itemInfo.topImages

      // 2.2.获取基本信息
      this.baseInfo = new GoodsBaseInfo(data.itemInfo,data.columns,data.shopInfo.services)

      // 2.3.获取店铺信息
      this.shopInfo = new ShopInfo(data.shopInfo)

      // 2.4.获取商品详情
      this.detailInfo = data.detailInfo

      // 2.5.获取商品参数
      this.itemParams = data.itemParams

      // 2.6.获取评价信息
      if(data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }    
    })

    // 3.请求推荐数据
    getRecommends().then(res => {
      this.recommends = res.data.list
    })

    // 4.给getThemeTopY赋值（对给this.themeTopYs赋值的操作进行防抖）
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    },100)
  },
  mounted() {
    
  },
  methods: {
    // vuex的映射
    ...mapActions(['addCart']),

    // 商品图片加载完同时刷新高度
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY()
    },
    // 点击标题，滚动到对应的主题
    titleClick(index) {
      this.$refs.scroll.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },

    contentScroll(position) {
      // 1.获取Y值
      const positionY = -position.y

      // 2.positionY和主题中值进行对比
      let length = this.themeTopYs.length
      for(let i=0; i< length - 1; i++) {
        if(this.currentIndex !== i && (positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }

      // 1.判断BackTop是否显示
      this.isShowBackTop = -(position.y) > 1000 ? true : false
    },

    // 加入购物车的点击
    addToCart() {
      // 1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.baseInfo.title
      product.desc = this.detailInfo.desc
      product.price = this.baseInfo.realPrice
      product.iid = this.iid
      // 2.将商品添加到购物车
      // this.$store.cartList.push(product)
      // this.$store.commit('addCart',product)

      // 2.1 返回Promise
      // this.$store.dispatch('addCart',product).then(res => {
      //   console.log(res);
      // })

      // 2.2 vuex的mapActions映射
      this.addCart(product).then(res => {
        this.show = true
        this.message = res
        setTimeout(() => {
          this.show = false;
          this.message = ''
        }, 1500);
      })   

      // 3.显示添加到购物车成功
      
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

</style>