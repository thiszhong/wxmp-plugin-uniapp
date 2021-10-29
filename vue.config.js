const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
// const argv = require('yargs').argv;

// process.env.UNI_USING_VUE3 = true
// process.env.UNI_USING_VUE3_OPTIONS_API = true

const plugins = [];

// 微信小程序插件开发
const [mode, type] = JSON.parse(process.env.npm_config_argv).cooked[1].split(':');
// 插件代码目录
if (type === 'wxplugin') {
  // if (argv.plugin && argv.plugin.includes('wxplugin')) {
  console.log('----------插件代码---------')
  process.env.UNI_OUTPUT_DIR = process.env.UNI_OUTPUT_DIR.replace(`/dist/${mode}/mp-weixin`, '/miniprogram/plugin')
}
// 开发时调试插件的小程序代码目录
if (type === 'mp-weixin') {
  console.log('----------开发小程序代码---------')
  process.env.UNI_OUTPUT_DIR = process.env.UNI_OUTPUT_DIR.replace(`/dist/${mode}/mp-weixin`, '/miniprogram/miniprogram')

  plugins.push(
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/plugin/doc'), to: path.resolve(__dirname, 'miniprogram/doc') },
        { from: path.resolve(__dirname, 'project.config.json'), to: path.resolve(__dirname, 'miniprogram') },
      ],
    })
  )
}

module.exports = {
  configureWebpack: {
    plugins
  }
}
