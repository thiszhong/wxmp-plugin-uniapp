import { createSSRApp } from 'vue'
import App from './App.vue'

// 小程序插件中的组件，在整个当前项目没有被调用的话，需要全局注册下，否则不会被打包进去
// #ifdef MP-WX-PLUGIN
import Avatar from './plugin/components/avatar/avatar.vue'
// #endif

export function createApp() {
  const app = createSSRApp(App)
  // #ifdef MP-WX-PLUGIN
  app.component('avatar', Avatar)
  // #endif

  return { app }
}
