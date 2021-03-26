<template>
  <div class="header-view" :style="{height: height}">
      <div class="left" style="-webkit-app-region: drag">
<!--          <el-button class="no-drag" size="mini" type="text" @click="back" >-->
<!--              <i class="btn el-icon-arrow-left"></i>-->
<!--          </el-button>-->
<!--          <el-button class="no-drag" size="mini" type="text" @click="advance">-->
<!--              <i class="btn el-icon-arrow-right"></i>-->
<!--          </el-button>-->
<!--          <el-button class="no-drag hover-color" size="mini" type="text" @click="refresh">-->
<!--              <i class="btn el-icon-refresh"></i>-->
<!--          </el-button>-->
      </div>
      <div class="right">
          <el-button class="hover-color" @click="maximize" size="mini" type="text">
              <i class="btn el-icon-circle-plus-outline"></i>
          </el-button>
          <el-button @click="minimize" class="no-drag" size="mini" type="text">
              <i class="btn el-icon-remove-outline"></i>
          </el-button>
          <el-button @click="close" class="no-drag hover-color" size="mini" type="text">
              <i class="btn el-icon-circle-close"></i>
          </el-button>
      </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  props: {
    height: {
      type: String,
      default: '40px'
    }
  },
  methods: {
    // 关闭
    close () {
      this.$confirm('此操作将退出游戏, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 发送关闭主窗口命令
        ipcRenderer.send('window-close')
      }).catch(() => {

      })
    },
    // 缩小
    minimize () {
      // 发送最小化命令
      ipcRenderer.send('window-min')
    },
    // 放大
    maximize () {
      // 发送最大化命令
      ipcRenderer.send('window-max')
    }
    // back () {
    //   if (this.$route.name !== 'music') {
    //     this.$router.go(-1)
    //   }
    // },
    // advance () {
    //   this.$router.go(1)
    // },
    // refresh () {
    //   this.$bus.$emit('page-refresh', this.$route.name)
    // }
  }
}
</script>

<style lang="scss" scoped>
.header-view {
  display: flex;
  align-items: center;
  justify-content: space-between;
  ::v-deep .left {
    height: 50px;
    flex-grow: 1;
  }
  .right {
      .btn {
          font-size: 20px;
          color: #6a6a6a;
      }
      .btn:hover {
          color: #ff722c;
      }
    }
}
</style>
