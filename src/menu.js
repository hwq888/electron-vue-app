/***
 * 配置顶端菜单栏
 * 配置右键菜单
 * ***/
// import { Menu, shell, ipcMain, BrowserWindow } from 'electron'
import { Menu, shell } from 'electron'

// normal （常规菜单项）
// separator （分割线）
// submenu （子菜单）
// checkbox （复选菜单项）
// radio （单选菜单项）

const template = [
  {
    label: '原生应用菜单演示',
    submenu: [
      {
        label: '个人信息'
      },
      {
        type: 'separator'
      },
      {
        label: '开机启动',
        type: 'checkbox',
        checked: true
      },
      {
        type: 'separator'
      },
      {
        label: '性别',
        submenu: [
          {
            label: '男',
            type: 'radio'
          },
          {
            label: '女',
            type: 'radio'
          }
        ]
      }
    ]
  },
  {
    label: '文件',
    submenu: [
      {
        label: '新建',
        click () {}
      },
      {
        label: '打开',
        accelerator: 'ctrl+q',
        click () {}
      },
      {
        label: '保存',
        click () {

        }
      },
      {
        type: 'separator' // 分割线
      },
      {
        label: '打印',
        click () {}
      },
      {
        label: '退出',
        click () {}
      }
    ]
  },
  {
    label: '编辑',
    submenu: [
      {
        label: '撤销',
        role: 'undo'
      },
      {
        label: '恢复',
        role: 'redo'
      },
      {
        type: 'separator'
      },
      {
        label: '截切',
        role: 'cut'
      },
      {
        label: '复制',
        role: 'copy'
      },
      {
        label: '黏贴',
        role: 'paste'
      },

      {
        label: '删除',
        role: 'delete'
      },
      {
        label: '全选',
        role: 'selectall'
      }
    ]
  },
  {
    label: '视图',
    submenu: [
      {
        label: '缩小',
        role: 'zoomin'
      },
      {
        label: '放大',
        role: 'zoomout'
      },
      {
        label: '重置缩放',
        role: 'resetzoom'
      },
      {
        type: 'separator'
      },
      {
        label: '全屏',
        role: 'togglefullscreen'
      }
    ]
  },
  {
    label: '帮助',
    submenu: [
      {
        label: '关于',
        click () {
          shell.openExternal('https://www.baidu.com')
        }
      }
    ]
  }
]
const m = Menu.buildFromTemplate(template)

Menu.setApplicationMenu(m)

// 右键菜单
// const contextMenuTemplate = [
//   {
//     label: '撤销',
//     role: 'undo'
//   },
//   {
//     label: '恢复',
//     role: 'redo'
//   },
//   {
//     type: 'separator'
//   },
//   {
//     label: '截切',
//     role: 'cut'
//   },
//   {
//     label: '复制',
//     role: 'copy'
//   },
//   {
//     label: '黏贴',
//     role: 'paste'
//   },
//   {
//     type: 'separator'
//   }, // 分隔线
//   {
//     label: '全选',
//     role: 'selectall'
//   }
//   // Select All菜单项
// ]
//
// const contextMenuFrom = Menu.buildFromTemplate(contextMenuTemplate)
//
// // 监听右键事件
// ipcMain.on('contextMenu', () => {
//   console.log('右键监听')
//   contextMenuFrom.popup(BrowserWindow.getFocusedWindow())
// })

// const { app, Menu } = require('electron')
//
// const dockMenu = Menu.buildFromTemplate([
//   {
//     label: '游戏',
//     submenu: [
//       {
//         label: '看图猜成语',
//         accelerator: 'ctrl+n',
//         click () {
//           console.log('看图猜成语')
//         }
//       },
//       {
//         label: '文字拆分'
//       }
//     ]
//   },
//   {
//     label: '困难级别',
//     submenu: [
//       {
//         label: '一星'
//       },
//       {
//         label: '二星'
//       },
//       {
//         label: '三星'
//       },
//       {
//         label: '四星'
//       },
//       {
//         label: '五星'
//       }
//     ]
//   }
// ])
//
// app.whenReady().then(() => {
//   app.dock.setMenu(dockMenu)
// })

// const { Menu } = require('electron')
// const template = [
//   {
//     label: '游戏',
//     submenu: [
//       {
//         label: '看图猜成语',
//         accelerator: 'ctrl+n',
//         click () {
//           console.log('看图猜成语')
//         }
//       },
//       {
//         label: '文字拆分'
//       }
//     ]
//   },
//   {
//     label: '困难基本',
//     submenu: [
//       {
//         label: '一星'
//       },
//       {
//         label: '二星'
//       },
//       {
//         label: '三星'
//       },
//       {
//         label: '四星'
//       },
//       {
//         label: '五星'
//       }
//     ]
//   }
// ]
// const m = Menu.buildFromTemplate(template)
// Menu.setApplicationMenu(m)
