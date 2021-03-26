<template>
  <div class="logoBox flex_column flex_center">
    <div class="logoBody" @click="goHome">
      <img class="logo" src="../../assets/images/logo.png" >
    </div>
    <div class="name" @click="goHome">全民游戏王</div>
  </div>
</template>
<script>
export default {
  methods: {
    goHome () {
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="scss" scoped>
.logoBox {
  /*-webkit-app-region: drag;*/
  height: 150px;
  color: #999999;
  font-size: 14px;
  .logoBody{
    background: #121212;
    border: 1px solid #323232;
    width: 60px;
    height: 60px;
    padding: 18px;
    border-radius: 50px;
    box-shadow: 0 0 2px #333;
    .logo{
      width: 60px;
      height: 60px;
    }
  }
  .name{
    font-size: 14px;
    padding: 5px 0;
    font-weight: bold;
    text-shadow: 2px 2px 2px #000;
  }
}
</style>
