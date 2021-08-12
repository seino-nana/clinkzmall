<template>
  <div id="cart">
    <!-- 顶部导航栏 -->
    <nav-bar class="cart-nav"><div slot="center">购物车({{length}})</div></nav-bar>
    
    <!--商品的列表-->
    <cart-list :list="list"/>

    <!-- 底部汇总 -->
    <cart-bottom-bar class="cart-bottom-bar"/>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import CartList from '@/views/cart/childcpns/CartList'
import CartBottomBar from '@/views/cart/childcpns/CartBottomBar'

import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  data() {
    return {
      
    }
  },
  computed: {
    // 两种语法
    // 第一种
    // ...mapGetters([
    //   'cartLength',
    //   'cartList'
    // ])

    // 第二种
    ...mapGetters({
      length: 'cartLength',
      list: 'cartList'
    })
  }
}
</script>

<style>
#cart {
  height: 100vh;
}

.cart-nav {
  text-align: center;
  font-size: 18px;
  color: #fff;
  background-color: var(--color-tint);
  
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10; */
}

.cart-bottom-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 30px;
  line-height: 30px;
  background-color: #eee;
}
</style>