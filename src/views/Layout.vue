<template>
  <div class="layout">
    <el-container class="container" id="main">
        <el-container style="position: relative;">
            <el-aside width="200px" class="aside">
              <aside-view />
            </el-aside>
            <el-container>
              <el-header class="header" height="50px">
                  <header-view height="50px" />
              </el-header>
              <el-main class="main">
<!--            <keep-alive>-->
                 <router-view></router-view>
<!--            </keep-alive>-->
              </el-main>
            </el-container>
        </el-container>
<!--        <el-footer class="footer" height="20px">-->
<!--            <footer-view height="20px" />-->
<!--        </el-footer>-->
    </el-container>
    <login-view />
  </div>
</template>
<script>
import AsideView from '../components/Aside/'
import HeaderView from '../components/Header/'
// import FooterView from '../components/Footer/'
import LoginView from '../components/Login/'
export default {
  components: {
    AsideView,
    HeaderView,
    // FooterView,
    LoginView
  }
}
</script>
<style lang="scss" scoped>
  .aside {
      display: flex;
      flex-direction: column;
      background: linear-gradient(to bottom, #292929, #292929);
  }

  .container {
    height: calc(100vh - 2px);
    background: #121212;
    /*height: 100vh;*/
  }

  .header {
    background: #121212;
    border-bottom: 1px solid #292929;
  }

  .main {
      padding: 0;
      margin: 0;
      overflow: hidden;
      display: flex;
      flex: 1;
      flex-shrink: 0;
  }

  .footer {
      background: #121212;
      padding: 0;
  }
</style>
