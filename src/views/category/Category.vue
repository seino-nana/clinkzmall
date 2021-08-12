<template>
  <div id="category">
    <category-menu class="c-menu" :categories="categories" @onItemClick="onItemClick"/>
    <category-content class="c-content" :subcategories="subcategories" />
  </div>
</template>

<script>

import NavBar from '@/components/common/navbar/NavBar'
import CategoryMenu from '@/views/category/childcpns/CategoryMenu'
import CategoryContent from '@/views/category/childcpns/CategoryContent'

import { getCategory,getSubcategory } from '@/network/category'

export default {
  name: 'Category',
  components: {
    NavBar,
    CategoryMenu,
    CategoryContent
  },
  data() {
    return {
      categories : [],
      subcategories: [],
    }
  },
  created() {
    this._getCategory()
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        // 1.获取categories
        this.categories = res.data.category.list

        this._getSubcategory(0)
      })
    },
    _getSubcategory(e) {
      // 1.获取对应的maitKey
      const maitKey = this.categories[e].maitKey

      // 2.请求数据
      getSubcategory(maitKey).then(res => {
        this.subcategories = res.data.list
      })
    },
    onItemClick(index) {
      this._getSubcategory(index)
    }
  }
}
</script>

<style scoped>
#category {
  position: relative;
  height: 100vh;
  display: flex;
}

.category-nav {
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: var(--color-tint);   
}

.c-menu {
  width: 110px;
}

.c-content {
  flex: 1;
}

</style>