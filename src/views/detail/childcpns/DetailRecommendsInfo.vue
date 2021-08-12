<template>
  <div class="recommend">
    <div class="recommend-header">商品推荐</div>
    <goods-list :goods="recommends"/>
  </div>
</template>

<script>
import GoodsList from '@/components/content/goods/GoodsList'

export default {
  name: 'DetailRecommendsInfo',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsList
  }
}
</script>

<style>
.recommend {
  margin: 5px 0;
}

.recommend-header {
  font-size: 20px;
  padding: 8px 5px 15px;
}
</style>