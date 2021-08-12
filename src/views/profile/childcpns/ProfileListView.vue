<template>
  <div class="list-view">
    <div class="list">
      <div class="list-item">
        <img src="@/assets/img/profile/message.png" alt="">
        <span>我的消息</span>
      </div>
      <div class="list-item">
        <img src="@/assets/img/profile/pointer.png" alt="">
        <span>积分商城</span>
      </div>
      <div class="list-item">
        <img src="@/assets/img/profile/vip.png" alt="">
        <span>会员卡</span>
      </div>
    </div>
    <div class="list">
      <div class="list-item">
        <img src="@/assets/img/profile/cart.png" alt="">
        <span>我的购物车</span>
      </div>
      <div class="list-item">
        <img src="@/assets/img/profile/app.png" alt="">
        <span>下载购物APP</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileListView',
}
</script>

<style>
.list {
  border-top: 18px solid #f8f8f8;
}

.list-item {
  height: 50px;
  line-height: 50px;
  background: #fff;
  font-size: 16px;
  margin-left: 15px;
  border-bottom: 1px solid #f8f8f8;
}

.list-item:last-child {
  border-bottom: none;
}

.list-item img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.list-item span {
  vertical-align: middle;
  margin-left: 8px;
}
</style>