/**
 * Creation time:2021/3/10.
 */
export default {
  /*
  * 说明：数组乱序
  * a：数组对象
  * */
  shuffle (a) {
    for (let i = a.length; i; i--) {
      const j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]]
    }
    return a
  },
  formatDate (time, fmt) {
    var date = new Date(Number(time))
    const padLeftZero = (str) => {
      return ('00' + str).substr(str.length)
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        const str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
      }
    }
    return fmt
    // 使用方式
    // export default {
    //   filters: {
    //     formatDate(time) {
    //       var date = new Date(time);
    //       return formatDate(date, 'yyyy-MM-dd hh:mm:ss');
    //     }
    //   }
    // }
  },
  /*
  *比较时间大小
  * @desc d1 > d2
  * */
  CompareDateTime (d1, d2) {
    return ((new Date(d1.replace(/-/g, '/'))) > (new Date(d2.replace(/-/g, '/'))))
  },
  /*
   *说明：localStorage存储对象
   * key：对象  obj：对象的值
   * */
  setLocalStorage (key, obj) {
    localStorage.setItem(key, JSON.stringify(obj))
  },
  /*
   *说明：获取localStorage获取对象数据
   *key：对象
   * */
  getLocalStorage (key) {
    return JSON.parse(localStorage.getItem(key))
  },
  /*
   *说明：localStorage删除对象
   * key：对象  obj：对象的值
   * */
  delLocalStorage (key) {
    localStorage.removeItem(key)
  },
  /*
   *说明：localStorage删除所有
   * key：对象  obj：对象的值
   * */
  delAllLocalStorage () {
    localStorage.clear()
  },
  /*
    *说明：设置cookie方法
    *key：对象  val：对象的值   time：过去时间（小时）
    * */
  setCookie (key, val, time) {
    if (time) {
      const date = new Date() // 获取当前时间
      const hours = time // 将date设置为n小时以后的时间
      date.setTime(date.getTime() + hours * 3600 * 1000) // 格式化为cookie识别的时间
      document.cookie = key + '=' + val + ';expires=' + date.toGMTString() // 设置cookie
    } else {
      document.cookie = key + '=' + val
    }
  },
  /*
  *说明：获取cookie方法
   *key：对象
   * */
  getCookie (key) {
    const getCookie = document.cookie.replace(/[ ]/g, '') // 获取cookie，并且将获得的cookie格式化，去掉空格字符
    const arrCookie = getCookie.split(';') // 将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
    let tips // 声明变量tips
    for (let i = 0; i < arrCookie.length; i++) { // 使用for循环查找cookie中的tips变量
      const arr = arrCookie[i].split('=') // 将单条cookie用"等号"为标识，将单条cookie保存为arr数组
      if (key === arr[0]) { // 匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
        tips = arr[1] // 将cookie的值赋给变量tips
        break // 终止for循环遍历
      }
    }
    return tips
  },
  /*
   *说明：删除cookie方法
   *key：对象
   * */
  deleteCookie (key) { // 删除cookie方法
    const date = new Date() // 获取当前时间
    date.setTime(date.getTime() - 10000) // 将date设置为过去的时间
    document.cookie = key + '=v; expires =' + date.toGMTString()// 设置cookie
  },
  /** 金额千分位格式化
   * @param num {Number} 金额
   * @param digits {Number} 保留小数点后几位数
   **/
  addThousandSign (num, digits) {
    num = parseFloat(num)
    num = '' + num.toFixed(digits)
    return num.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
  },
  /** 删除金额千分位格式化
   * @param num {String} 金额
   **/
  delThousandSign (num) {
    const x = num.split(',')
    return parseFloat(x.join(''))
  },
  /** 获取字符串指定前几位
   * @param str {String} 原字符串
   * @param num {Number} 需求的位数
   **/
  getStrFirstPart (str, num) {
    str = '' + str
    num = Number(num)
    if (num > str.length) {
      num = str.length
    }
    return str.slice(0, num)
  },

  /** 获取字符串指定最后几位
   * @param str {String} 原字符串
   * @param num {Number} 需求的位数
   **/
  getStrLastPart (str, num) {
    str = '' + str
    num = Number(num)
    return str.slice(-num)
  },
  /** 获取url对象key的值
   **/
  getUrlParam (name) {
    // eslint-disable-next-line no-useless-escape
    const reg = new RegExp('(^|[&\?])' + name + '=([^&]*)(&|$)')
    const searchString = (location.hash) ? location.hash : window.location.search.substring(1)
    const r = searchString.match(reg)
    if (r != null) { return decodeURIComponent(r[2]) }
  },
  /** 获取url对象
   * **/
  getUrlParams () {
    let searchString = ''
    if (location.hash.indexOf('?') > 0) {
      searchString = location.hash.slice(location.hash.indexOf('?') + 1)
    } else {
      searchString = window.location.search.substring(1)
    }
    const params = searchString.split('&')
    const hash = {}
    if (searchString === '') { return {} }
    for (let i = 0; i < params.length; i++) {
      const val = params[i].split('=')
      /* if(navigator.userAgent.indexOf("Safari") > -1){ //谷歌出现兼容问题
                 hash[val[0]] = unescape(val[1]);
                 }else{
                 hash[unescape(val[0])] = decodeURIComponent(val[1]);
                 } */
      hash[unescape(val[0])] = decodeURIComponent(val[1])
    }

    return hash
  },
  // 数组去重
  removeRepeatItem (arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr
  },
  /*
   *说明：对象复制
   *data：参数传递
   * */
  dataClone (data) {
    let obj = {}
    obj = JSON.parse(JSON.stringify(data))
    return obj
  }
}
