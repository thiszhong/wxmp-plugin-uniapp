# uniapp + vue3 开发微信小程序插件

<img src="./example/screenshot/plugin.jpg" width="200px">

## Project setup
```
npm install
```

### 开发
```
// 需要同时运行两个命令：
npm run dev:mp-weixin
npm run dev:wxplugin

// 然后用小程序开发者工具打开本项目根目录即可预览
```

### 打包
```
// 依次运行
npm run build:mp-weixin
npm run build:wxplugin
```

### 问题

1. `App is not a function`

`main.js` 中 `app.mount()` 需要条件编译，插件条件下不能加载。

2. `getApp is not a function`

调试小程序跳转到插件页面后控制台报错，暂无解决方法，不确定是否影响功能。
