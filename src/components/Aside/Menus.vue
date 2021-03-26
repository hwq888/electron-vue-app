<template>
  <div class="menu-view">
    <el-menu
      unique-opened
      router
      :default-active="currentPath"
      :default-openeds="openeds"
      background-color="#292929"
      text-color="#999999"
      active-text-color="#ff8d6b">
      <el-submenu v-for="(item,index) in Menus" :key="index" :index="item.activeIndex">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{item.meta.title}}</span>
        </template>
        <template v-for="(citem, cindex) in item.children">
          <el-menu-item :key="cindex" :index="citem.path" v-if="citem.meta.show">{{citem.meta.title}}</el-menu-item>
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Menus: '', // 路由数据
      currentPath: '/', // 当前访问的路由
      openeds: ['0'] // 配置默认打开第一子菜单
    }
  },
  watch: {
    '$route' (to, from) { // 监听路由改变
      this.currentPath = to.path
    }
  },
  mounted () {
    console.log('路由')
    console.log(this.$router.options.routes)
    this.Menus = this.$router.options.routes
  }
}
</script>

<style lang="scss" scoped>
.menu-view {
  flex: 1;
  overflow: hidden;
  ::v-deep .el-menu{
    border-right: none;
  }
}
</style>
