// 导入防抖函数
import {debounce} from "@/common/utils.js"

import BackTop from '@/components/content/backtop/BackTop'

export const itemListenerMixin = {
    data() {
      return {
        itemImageListener: null
      }
    },
    mounted() {
      // 1.图片加载完成的事件监听
      const newRefresh = debounce(this.$refs.scroll.refresh,500)
    
      // 2.对监听的事件进行保存
      this.itemImageListener= () => {
        newRefresh()
      }
      this.$bus.$on('itemImageLoad',this.itemImageListener)
    },
}

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0,0,300)
    },
  }
}