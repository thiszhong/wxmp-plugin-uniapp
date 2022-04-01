# uniapp + vue2 开发微信小程序插件

`uniapp` 插件打包当前还不支持 `vue 3`，[参考文档 https://ask.dcloud.net.cn/article/39290](https://ask.dcloud.net.cn/article/39290)

<img src="./example/screenshot/plugin.jpg" width="200px">

## Project setup
```
npm install
```

### 开发
```
// 先填写自己的小程序 appId： src/manifest.json/mp-weixin/plugins、project.config.json

// 需要运行两个命令（起两个命令行窗口）：
npm run dev:mp-weixin
npm run dev:mp-wx-plugin

// 然后用小程序开发者工具打开 dist/dev/mp-wx-plugin 目录即可开发预览
```

### 打包
```
// 打包产物 dist/build/mp-wx-plugin
npm run build:mp-wx-plugin
```

### 问题

暂无
