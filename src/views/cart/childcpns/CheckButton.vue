<template>
  <div class="check-button"> 
    <img v-if="isChecked" src="@/assets/img/cart/tick_active.png" alt="">
    <img v-else src="@/assets/img/cart/tick.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.check-button img {
  width: 20px;
  height: 20px;
}
</style>