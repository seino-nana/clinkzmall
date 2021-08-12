<template>
  <div v-if="baseInfo.services" class="baseInfo">
    <div class="title">{{baseInfo.title}}</div>
    <div class="priceinfo">
      <span class="new-price">{{baseInfo.newPrice}}</span>
      <span class="old-price">{{baseInfo.oldPrice}}</span>
      <span class="discount" v-if="baseInfo.discount">{{baseInfo.discount}}</span>
    </div>
    <div class="sellinfo">
      <span>{{baseInfo.columns[0]}}</span>
      <span>{{baseInfo.columns[1]}}</span>
      <span>{{baseInfo.services[baseInfo.services.length-1].name}}</span>
    </div>
    <div class="service">
      <span class="service-item" v-for="index in baseInfo.services.length-1" :key="index">
        <img :src="baseInfo.services[index-1].icon">
        <span>{{baseInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>
.baseInfo {
  padding: 8px;
  margin-top: 5px;
  border-bottom: 6px solid #f2f2f2;
}

.title {
  font-size: 16px;
}

.priceinfo {
  padding-top: 4px;
}

.new-price {
  color: #ff5777;
  font-size: 18px;
  font-weight: 700;
  margin-left: 5px;
}

.old-price {
  font-size: 13px;
  text-decoration: line-through;
  margin-left: 10px;
}

.discount {
  position: relative;
  left: 2.5px;
  bottom: 6px;
  font-size: 12px;
  color: #fff;
  background-color: #ff5777;
  border-radius: 8px;
  padding: 1px 5px;
}

.sellinfo {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
}

.sellinfo span {
  font-size: 14px;
}

.service {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  padding: 13px 0 6px;
}

.service-item img {
  width: 12px;
  height: 12px;
  position: relative;
  top: 1px;
  right: 3px;
}

</style>