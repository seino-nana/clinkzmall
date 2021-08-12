<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">   
        <div>{{item.title}}</div> 
      </a>    
    </div>    
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      isLoad: false
    }
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('recommendImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style>
  .recommend {
    display: flex;
    width: 100%;
    font-size: 14px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img {
    width: 70px;
    height: 70px;
  }
</style>