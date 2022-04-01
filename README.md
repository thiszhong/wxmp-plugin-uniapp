# uniapp + vue3 开发微信小程序插件

<img src="./example/screenshot/plugin.jpg" width="200px">

## Project setup

```
npm install
```

### 开发

```
// 自行补充 src/manifest.json/mp-weixin/plugins/myPlugin/provider、project.config.json 当前开发小程序 appId
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

- getApp is not a function 貌似还是不支持 vue3
