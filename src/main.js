import Vue from 'vue'
import App from './App'

// 小程序插件中的组件，在整个项目中没有调用的话，需要在这里引用一下，否则不会被打包
// #ifdef MP-WXPLUGIN
import Avatar from './plugin/components/avatar/avatar.vue'
Vue.component('avatar', Avatar)
// #endif

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
