<template>
  <div class="about">
    <h1>This is an about page</h1>
    <a @contextmenu="rightClick">右键菜单1</a>
  </div>
</template>
<script>
export default {
  name: 'about',
  props: {
  },
  mounted () {
  },
  methods: {
    // 右键方法触发
    rightClick: function (id) {
      // 需要用到 electron
      const { remote } = this.$electron
      console.log(remote)
      const { Menu, MenuItem } = remote
      // 右键菜单
      const menu = new Menu()
      menu.append(new MenuItem({
        label: '复制',
        accelerator: 'ctrl+c',
        click () {
          console.log('复制！')
        }
      }))
      menu.append(new MenuItem({
        type: 'separator'
      }))
      menu.append(new MenuItem({
        label: '粘贴',
        accelerator: 'ctrl+v',
        click () {
          console.log('粘贴！')
        }
      }))
      // 第二个菜单
      // menu.append( ... )
      // 展示出来
      menu.popup(remote.getCurrentWindow())
    }
  }
}
</script>
