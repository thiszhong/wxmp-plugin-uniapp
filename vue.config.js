const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

// process.env.UNI_USING_VUE3 = true
// process.env.UNI_USING_VUE3_OPTIONS_API = true

const plugins = [];
const pathRoot = p => path.resolve(p)

const { UNI_PLATFORM, npm_lifecycle_event, UNI_SCRIPT, UNI_OUTPUT_DIR } = process.env
if (UNI_PLATFORM === 'mp-weixin') {
  // dev / build
  const [mode] = npm_lifecycle_event.split(':')
  // 拷贝project.config、插件文档
  const copyTargets = [
    { from: pathRoot('./project.config.json'), to: pathRoot(`./dist/${mode}/mp-wx-plugin`) }
  ]
  let filename
  if (UNI_SCRIPT === 'mp-wx-plugin') {
    console.info('----------正在运行【插件】代码---------')
    filename = 'plugin'
    copyTargets.push({ from: pathRoot('./src/plugin/doc'), to: pathRoot(`./dist/${mode}/mp-wx-plugin/doc`) })
  } else {
    console.info('----------正在运行调试插件的【小程序】代码---------')
    filename = 'miniprogram'
  }
  process.env.UNI_OUTPUT_DIR = UNI_OUTPUT_DIR.replace('mp-weixin', `mp-wx-plugin${path.sep}${filename}`)
  plugins.push(
    new CopyPlugin({ patterns: copyTargets })
  )
}

module.exports = {
  configureWebpack: {
    plugins
  }
}
