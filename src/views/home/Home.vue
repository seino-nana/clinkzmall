<template>
  <div id="home">
    <!-- 1.顶部navbar -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="titles" 
                     @tabClick="tabClick" 
                     ref="tabControl1"
                     class="tab-control"  
                     v-show="isTabFixed"
                     />
    <scroll class="content" 
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load= "true"
            @pullingUp="loadMore"          
            >
        <!-- 2.轮播图 -->
      <home-swiper :banners="banners"/>
      <!-- 3.推荐数据 -->
      <home-recommend :recommends="recommends" @recommendImageLoad="recommendImageLoad"/>
      <!-- 4.本周流行 -->
      <home-feature></home-feature>
      <!-- 5.tab-Control -->
      <tab-control :titles="titles" 
                   @tabClick="tabClick" 
                   ref="tabControl2"  
                   />
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from '@/views/home/childcpns/HomeSwiper'
import HomeRecommend from '@/views/home/childcpns/HomeRecommend'
import HomeFeature from '@/views/home/childcpns/HomeFeature'
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'


import Scroll from '@/components/common/scroll/Scroll'

// 网络请求
import {getHomeMultidata,getHomeGoods} from "@/network/home";

// 混入
import {itemListenerMixin,backTopMixin} from '@/common/mixin'

export default {
  name: 'Home',
  mixins: [itemListenerMixin,backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行','新款','精选'],
      goods: {
        pop: {page: 0,list: []},
        new: {page: 0,list: []},
        sell: {page: 0,list: []}
      },
      currentType: 'pop',
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  // destroyed() {
  //   console.log('数据销毁');
  // },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  },
  created() {
    // 1.请求多个数据
    this._getHomeMultidata()

    // 2.请求商品数据
    this._getHomeGoods('pop')
    this._getHomeGoods('new')
    this._getHomeGoods('sell')
  },
  mounted() {

  },
  methods: {
    /*
    事件监听相关
    */
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      // 使两个tabControl同步
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = -(position.y) > 1000 ? true : false

      // 2.判断tabControl是否吸顶(positon: fixed)
      this.isTabFixed = -(position.y) > this.tabOffsetTop ? true : false
    },
    loadMore() {
      this._getHomeGoods(this.currentType)

      // 重新计算可滚动区域
      this.$refs.scroll.scroll.refresh()
    },
    recommendImageLoad() {
      // 2.获取tabControl的offsetTop
      // 所有的组件都有一个属性$el:用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },
    /*
    网络请求相关
    */
    _getHomeMultidata() {
      getHomeMultidata().then(res => {        
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    _getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // 上拉加载更多的请求
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped> 
  #home {
    position: relative;
    height: 100vh;
  }
  .home-nav {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: var(--color-tint);
    
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10; */
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

    /* height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px; */
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>