<template>
  <div class="bottom-bar">
  <div class="bar-left bar-item">
    <div class="bar-service bar-left-item">
      <img src="@/assets/img/detail/service.png" class="bar-icon">
      <div class="bar-text">客服</div>
    </div>
    <div class="bar-shop bar-left-item">
      <img src="@/assets/img/detail/shop.png" class="bar-icon">
      <div class="bar-text">店铺</div>
    </div>
    <div class="bar-collect bar-left-item">
      <img src="@/assets/img/detail/collect.png" class="bar-icon">
      <div class="bar-text">收藏</div>
    </div>
  </div>
  <div class="bar-right bar-item">
    <div class="cart bar-right-item" @click="cartClick">加入购物车</div>
    <div class="buy bar-right-item">购买</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    cartClick() {
      this.$emit('addToCart')
    }
  }
}
</script>

<style>
.bottom-bar {
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}

.bottom-bar,
.bar-left,
.bar-right {
  display: flex;
  text-align: center;
  font-size: 14px;
}

.bar-item,
.bar-left-item,
.bar-right-item {
  flex: 1;
}

.bar-icon {
  width: 22px;
  height: 22px;
  margin-top: 5px;
}

.bar-right-item {
  line-height: 49px;
}

.cart {
  background: #ffe817;
}

.buy {
  background: var(--color-high-text);
  color: var(--color-background);
}
</style>