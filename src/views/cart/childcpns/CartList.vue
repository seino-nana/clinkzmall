<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in list" 
                      :key="index"
                      :product="item"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
import CartListItem from '@/views/cart/childcpns/CartListItem'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem,
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  activated() {
      this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 80px;
    left: 0;
    right: 0;
  }
</style>