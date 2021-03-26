<template>
  <div class="wrap">
    <Logo/>
    <Menus/>
  </div>
</template>
<script>
import Logo from './Logo'
import Menus from './Menus'
export default {
  components: {
    Logo,
    Menus
  }
}
</script>
<style lang="scss" scoped>
  .wrap{
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
