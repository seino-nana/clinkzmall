<template>
  <div class="goods">
    <goods-list-item class="goods-item" v-for="item in goods" :key="item.index"
    :item="item"/>
  </div>
</template>

<script> 
import GoodsListItem from './GoodsListItem'

export default {
  name: 'GoodsList',
  components: { GoodsListItem },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.goods-item {
  width: 48%;
  position: relative;
  margin-top: 8px;
}
</style>