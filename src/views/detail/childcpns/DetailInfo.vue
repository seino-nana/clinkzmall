<template>
  <div class="detailinfo">
    <div class="header">
      <div class="start line"></div>
      <div>{{detailInfo.desc}}</div>
      <div class="end line"></div>
    </div>
    <div class="content" v-if="detailInfo.detailImage">
      <div class="content-title">{{detailInfo.detailImage[0].key}}</div>
      <div class="content-image" v-for="item in detailInfo.detailImage[0].list" :key="item.index">
        <img :src="item" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$emit('imageLoad')
    }
  }
}
</script>

<style >
.detailinfo {
  border-bottom: 6px solid #f2f2f2;
}

.header {
  font-size: 16px;
  padding: 5px 15px;
}

.header .line {
  width: 90px;
  height: 1px;
  background: #666;
  margin: 15px 0;
  position: relative;
}

.header .end {
  float: right;
}

.header .start::before, .header .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background: #333;
}

.header .start::before {
  bottom: 0;
}

.header .end::after {
  bottom: 0;
  right: 0;
}

.content-title {
  margin: 25px 15px 15px;
  font-size: 16px;
}

.content-image img {
  width: 100%;
}
</style>