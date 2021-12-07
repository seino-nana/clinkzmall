<template>
  <div id="floordata">
    <div v-for="item in floordata" :key="item.index">
      <!-- 标题 -->
      <div class="floor_title">
        <img :src="item.floor_title.image_src" alt="">
      </div>
      <!-- 内容 -->
      <div class="floor_list">
        <div v-for="items in item.product_list" :key="items.index">
          <img :src="items.image_src" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeFloordata',
  props: {
      floordata: {
        type: Array,
        default(){
          return []
        }   
      }
  }
}
</script>

<style>
  #floordata {
    margin: 20px 10px;
  }
  .floor_list div{
    float: left;
    width: 33.33%;
    padding: 2px;
  }
  .floor_list div:nth-child(n+2){
      height: 97px;
  }
  .floor_list img {
    width: 100%;
    height: 100%;
  }
</style>