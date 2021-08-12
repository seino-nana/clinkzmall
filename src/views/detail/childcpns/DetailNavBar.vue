<template>
  <div>
    <nav-bar>
      <div slot="left" class="back-left" @click="backClick">
        <img src="@/assets/img/common/back-left.png" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="item.index">
          <div class="title-item" :class="{active: index === currentIndex}" @click="titleClick(index)">{{item}}</div>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  data() {
    return {
      titles: ['商品','参数','评价','推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.back()
    },
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick',index)
    }
  }
}
</script>

<style>
.back-left {
  position: relative;
}
.back-left img {
  position: absolute;
  top: 12px;
  right: 15px;
  width: 20px;
  height: 20px;
}
.title {
  display: flex;
  justify-content: space-evenly; 
}
.title-item {
  flex: 1;
  font-size: 14px;
}
.active {
  color: var(--color-high-text);
}
</style>