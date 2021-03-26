module.exports = {
  pluginOptions: {
    electronBuilder: {
      // 打包参数配置
      nodeIntegration: true,
      enableRemoteModule: true,
      builderOptions: {
        productName: '全民桌游王', // 项目名 这也是生成的exe文件的前缀名
        appId: 'com.qm.game.kind', // 包名
        copyright: '版权信息 个人所有', // 版权  信息
        compression: 'store', // 'store' | 'normal'| 'maximum' 打包压缩情况(store 相对较快)，store 39749kb, maximum 39186kb
        directories: {
          output: 'build' // 输出文件夹
        },
        // files: [ // 打包的资源无法包含 build 目录, 同时该配置也可防止源码被打包进去
        //   '**/*',
        //   'build/',
        //   '!build/static/js/*.js.map',
        //   '!src/'
        // ],
        asar: false, // 查看打包后的目录结构
        // extraResources: { // 引入外部文件
        //   from: './app-update.yml',
        //   to: './b.txt'
        // },
        win: {
          target: 'nsis',
          icon: './public/favicon.ico' // 图标路径
          // target: [ // Windows 环境下打出 32 位和 64 位二合一包
          //   {
          //     target: 'nsis',
          //     arch: [
          //       'ia32',
          //       'x64'
          //     ]
          //   }
          // ]
          // extraResources: { // 拷贝dll等静态文件到指定位置(用于某个系统配置)
          //   from: './app-update.yml',
          //   to: './b.txt'
          // }
        },
        nsis: {
          oneClick: false, // 一键安装
          guid: 'guid', // 注册表名字，不推荐修改
          perMachine: true, // 是否开启安装时权限限制（此电脑或当前用户）
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          installerIcon: './public/favicon.ico', // 安装图标
          uninstallerIcon: './public/favicon.ico', // 卸载图标
          installerHeaderIcon: './public/favicon.ico', // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, // 创建开始菜单图标
          shortcutName: '桌游王' // 图标名称
        }
        // 'mac': {
        //   'target': 'dmg',
        //   'icon': './public/favicon.ico'
        // },
        // 'dmg': {
        //   'title': '桌游王',
        //   'icon': './public/favicon.ico',
        //   'contents': [
        //     {
        //       'x': 110,
        //       'y': 150
        //     },
        //     {
        //       'x': 240,
        //       'y': 150,
        //       'type': 'link',
        //       'path': '/Applications'
        //     }
        //   ],
        //   'window': {
        //     'x': 400,
        //     'y': 400
        //   }
        // }
      }
    }
  }
}
