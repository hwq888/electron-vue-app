<!--看图猜成语-->
<template>
  <div class="idiomBox flex_column flex_center">
    <div class="btn-box">
      <el-button type="success" round @click="refresh">重新开始[←]</el-button>
      <el-button type="success" round @click="next">下一张[→]</el-button>
      <el-button type="success" round @click="getAnswer">获取答案[空格]</el-button>
    </div>
    <div class="game-box flex_column flex_center">
      <div class="img-box">
        <img :src="currentObj.img" alt="看图猜成语" @click="getAnswer">
      </div>
      <div class="answer-box">
        <p>{{answer}}</p>
      </div>

    </div>
  </div>
</template>

<script>
import json from '../data/index.json'
export default {
  components: {
  },
  data () {
    return {
      currentObj: {
        img: '',
        name: ''
      },
      answer: '--',
      sourceList: json.data,
      list: json.data
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.next()
    },
    // 重新开始
    refresh () {
      this.list = this.$Utils.dataClone(this.sourceList)
      this.init()
    },
    // 获取答案
    getAnswer () {
      this.answer = this.currentObj.name
    },
    // 下一张
    next () {
      const len = this.list.length
      if (len > 0) {
        this.answer = '--'
        const index = Math.floor(Math.random() * this.list.length)
        this.currentObj = this.list[index]
        console.log(this.currentObj.name)
        const center = this.list[index]
        this.list[index] = this.list[len - 1]
        this.list[len - 1] = center
        this.list = this.list.slice(0, len - 1)
      } else {
        this.$message({
          message: '当前游戏的已经完了，请玩其他的游戏试试~~~',
          type: 'warning'
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .idiomBox {
    width: 100%;
    .game-box{
      width: 90%;
      height: 80vh;
      background: #ffde00;
      border-radius: 20px;
      overflow: hidden;
      .img-box{
        width: 360px;
        background: #fff;
        padding: 20px;
        border-radius: 15px;
        img{
          width: 100%;
          height: auto;
        }
      }
      .answer-box{
        height: 80px;
        padding-top: 20px;
        p{
          height: 60px;
          line-height: 60px;
          padding: 10px;
          font-size: 48px;
          font-weight: bold;
          color: #fff;
          text-shadow: 0px 0px 3px #000;
        }
      }
    }
    .btn-box{
      padding-bottom: 10px;
      ::v-deep .el-button{
        border-radius: 200px;
        width: 150px;
        height: 50px;
        margin: 0 15px;
        font-size: 16px;
        background: #de0002;
        border: 1px solid #de0002;
        box-shadow: 1px 1px 2px #000;
      }
    }
  }
</style>
