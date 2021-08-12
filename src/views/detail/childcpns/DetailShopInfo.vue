<template>
  <div class="shopinfo">
    <div class="shopinfo-hd">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shopinfo-bd">
      <div class="count-info shopinfo-bd-item">
        <div class="total-sell count-info-item">
          <div class="count">{{shopInfo.sells}}</div>
          <div class="text">总销量</div>
        </div>
        <div class="goods-count count-info-item">
          <div class="count">{{shopInfo.goods}}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="grade-info shopinfo-bd-item">
        <div class="grade-row" v-for="item in shopInfo.score" :key="item.index">
          <span class="name item">{{item.name}}</span>
          <span class="score item" :class="item.isBetter? 'good':'less'">{{item.score}}</span>
          <span class="better item" :class="item.isBetter? 'good':'less'">{{item.isBetter? '高' : '低'}}</span>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.shopinfo {
  padding: 15px 8px 15px;
  border-bottom: 6px solid #f2f2f2;
}

.shopinfo-hd img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  border: 1px solid #ccc;
  border-radius: 50%;
}

.shopinfo-hd span {
  padding-left: 15px;
}

.shopinfo-bd {
  display: flex;
  padding-top: 20px;
}

.shopinfo-bd-item {
  flex: 1;
  text-align: center;
}

.count-info {
  display: flex;
  margin: 10px 0;
  border-right: 1px solid #ccc;
}

.count-info-item {
  flex: 1;
}

.count {
  font-size: 20px;
}

.text {
  font-size: 15px;
  margin-top: 8px;
}

.grade-info {
  font-size: 15px;
  margin: 0 10px;
}

.name {
  width: 100px;
}

.grade-row {
  display: flex;
}

.score {
  flex: 1;
}

.better {
  flex: 1;
}

.grade-row .item {
  margin-top: 4px;
}

.good {
  color: #5ea732;
}

.less {
  color: #ff5777;
}
</style>