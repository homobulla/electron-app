const platform = process.platform
const fs = require('fs')
const path = require('path')
// Windows 系统有可能不安装在 C 盘
// eslint-disable-next-line camelcase
// 获取本地host文件路径
const sys_hosts_path = platform === 'win32' ? `${process.env.windir || 'C:\\WINDOWS'}\\system32\\drivers\\etc\\hosts` : '/etc/hosts'

let hostdata
try {
  hostdata = fs.readFileSync(sys_hosts_path, 'utf8')
} catch (err) {
  hostdata = 'error'
}

export default {
  sys_hosts_path,
  hostdata
}
