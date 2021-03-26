<!--看图猜成语-->
<template>
  <div class="idiomBox flex_column flex_center">
    <div v-if="!showGame" class="game-box flex_column flex_center">
      <img src="./img/logo.png" alt="看图猜成语">
      <div class="btn-box">
        <el-button type="success" round @click="start">立即开始[Enter]</el-button>
      </div>
    </div>
    <game v-if="showGame"></game>
  </div>
</template>

<script>
import game from './components/game'
export default {
  components: {
    game
  },
  data () {
    return {
      showGame: false
    }
  },
  methods: {
    // 立即开始
    start () {
      this.showGame = true
    }
  }
}
</script>
<style lang="scss" scoped>
  .idiomBox {
    width: 100%;
    /*height: 100vh;*/
    /*background: #409eff;*/
    .game-box{
      width: 300px;
      height: 400px;
      background: #ffde00;
      border-radius: 20px;
      .title {
        text-align: center;
        color: #f0c78a;
        font-size: 50px;
      }
    }
    .btn-box{
      margin-top: 20px;
      width: 150px;
      height: 50px;
      border-radius: 200px;
      ::v-deep .el-button{
        font-size: 16px;
        width: 100%;
        height: 100%;
        background: #de0002;
        border: 1px solid #de0002;
        box-shadow: 1px 1px 2px #828282;
      }
    }
  }
</style>
