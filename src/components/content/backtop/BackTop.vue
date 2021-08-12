<template>
  <div class="back-top" @click= "backClick">
    <img src="@/assets/img/common/back-top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  methods: {
    backClick() {
      this.$emit('backClick')
    }
  }
}
</script>

<style>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 50px
  }
  .back-top img {
    width: 43px;
    height: 43px;
  }
</style>