<template>
  <scroll class="content">
    <div class="menu">
      <div v-for="(item,index) in categories" :key="item.index">
        <div class="item" 
             :class="index == currenIndex ? 'active' : '' "
             @click="onItemClick(index)">
          {{item.title}}
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'

export default {
  name: 'CategoryMenu',
  components: {
    Scroll
  },
  data() {
    return {
      currenIndex: 0
    }
  },
  props: {
    categories : {
      type: Array,
      default: []
    }
  },
  methods: {
    onItemClick(index) {
      this.currenIndex = index
      this.$emit('onItemClick',index)
    }
  }
}
</script>

<style scoped>
.menu {
  height: 100%;
  font-size: 14px;
  background: #f6f6f6;
}

.item {
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.active {
  color: #f55777;
  font-weight: 700;
  background: #fff;
  border-left: 3px solid #f55777;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>