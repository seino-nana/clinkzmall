import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    //mutations唯一的目的就是修改state中状态
    //mutations中的每个方法尽可能完成的事件比较单一一点
    addCounter(state,payload) {
      payload.count++
    },
    addToCart(state,payload) {
      payload.checked = true
      state.cartList.push(payload)
    },
    delete(state,iid) {
      state.cartList.forEach((item,index) => {
        if(item.iid == iid) {
          state.cartList.splice(index,1)
        }
      })
    }
  },
  actions: {
    addCart(context,payload) {
      return new Promise((resolve,reject) => {
        // 1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)     
      // 2.判断oldProduct
      if(oldProduct) {
        context.commit('addCounter',oldProduct)
        resolve('已添加到购物车')
      }else {
        payload.count = 1
        context.commit('addToCart',payload)
        resolve('添加到购物车')
      }   
      })  
    }
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    }
  }
})

// 3.挂载Vue实例上
export default store