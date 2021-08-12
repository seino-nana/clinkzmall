<template>
  <scroll class="content" ref="scroll">
    <div class="subcategory">
      <div class="item" v-for="item in subcategories" :key="item.index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
        <div>{{item.title}}</div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'

export default {
  name: 'CategoryContent',
  components: {
    Scroll
  },
  props: {
    subcategories: {
      type: Array,
      default: []
    }
  },
  methods: {
    imageLoad() {
      // 图片加载完刷新高度
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
.content {
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 49px;
  left: 110px;
  right: 0;
}

.subcategory {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 15px;
}

.subcategory .item {
  width: 33.33%;
  text-align: center;
}

.subcategory .item img {
  width: 80%;
}

.subcategory .item div {
  font-size: 14px;
  margin: 15px 0;
}
</style>