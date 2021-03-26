<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
  @import url(./assets/styles/public.scss);
  /*@import url(./assets/styles/theme.scss);*/
  body {
    padding: 0;
    margin: 0;
    -webkit-user-select: none;
    overflow: hidden;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    border: 1px solid #434343;
  }
  /*#app{*/
  /*  box-shadow: 0 0 8px #ff0000;*/
  /*  margin: 10px;*/
  /*}*/
</style>
