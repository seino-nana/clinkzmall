<template>
  <div class="cart-bottom-bar">
    <div class="check-content" @click="checkClick()">
      <img v-if="isChecked = isSelectAll" src="@/assets/img/cart/tick_active.png" alt="">
      <img v-else src="@/assets/img/cart/tick.png" alt="">
      <div class="checkall">全选</div>
    </div>
    <div class="totalPrice">
      合计:{{totalPrice}}
    </div>
    <div class="calculate">
      去计算({{checkedLength}})
    </div>
  </div>  
</template>

<script>

export default {
  name: 'CartBottomBar',
  data() {
    return {
      isChecked: false,
      cartList: this.$store.state.cartList    
    }
  },
  computed: {
    // 1.计算总价格
    totalPrice() {
      return '￥' + this.cartList.filter(item => {
          return item.checked
      }).reduce((preValue,item) => {
          return preValue + item.price * item.count
      },0)
    },

    // 2.计算选中个数 
    checkedLength() {
      return this.cartList.filter(item => item.checked).length  
    },

    // 3.全选显示为true,否则为false
    isSelectAll() {
      if(this.cartList.length == 0) {
        return false
      }
      else {
        // 3.1使用filter
        // return !(this.cartList.filter(item => !item.checked).length)
        // 3.2使用find
        return !this.cartList.find(item => !item.checked)
      }
    }
  },
  methods: {
    // 4.点击全选按钮
    checkClick() {
      if(this.isSelectAll) { // 全部选中
        this.cartList.forEach(item => item.checked = false)
      } else {  //部分或全部不选中
        this.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style>
.cart-bottom-bar {
  display: flex;
  padding-left: 10px;
}

.check-content {
  display: flex;
}

.check-content img{
  position: relative;
  top:3px;
  left: 10px;
  width: 24px;
  height: 24px;
}

.checkall {
  padding-left: 12px;
}

.totalPrice {
  flex: 1;
  padding-left: 20px;
}

.calculate {
  padding: 0 12px;
  color: #fff;
  background-color: var(--color-high-text);
}
</style>