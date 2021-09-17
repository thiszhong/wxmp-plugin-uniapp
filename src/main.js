import {
	createApp
} from 'vue'
import App from './App.vue'

// #ifdef MP-WXPLUGIN
import Avatar from './plugin/components/avatar/avatar.vue'
// #endif

const app = createApp(App);

// #ifdef MP-WXPLUGIN
app.component('avatar', Avatar)
// #endif

// 插件加这个的话会报 App is not a function
// #ifndef MP-WXPLUGIN
app.mount()
// #endif
