import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { viteStaticCopy } from 'vite-plugin-static-copy'

const plugins = []

// 打包输出目录 UNI_OUTPUT_DIR 目前通过 package.json -> cross-env 自定义 - https://github.com/dcloudio/uni-app/issues/3248
if (process.env.UNI_PLATFORM === 'mp-weixin') {
  // 拷贝project.config、插件文档
  // src 相对于根目录，dest 相对于输入目录 UNI_OUTPUT_DIR
  const copyTargets = [{ src: 'project.config.json', dest: '../' }]

  if (process.env.UNI_CUSTOM_SCRIPT === 'mp-wx-plugin') {
    console.info('----------正在运行【插件】代码---------')

    copyTargets.push({ src: 'src/plugin/doc', dest: '../' })
  } else {
    console.info('----------正在运行调试插件的【小程序】代码---------')
  }

  plugins.push(viteStaticCopy({ targets: copyTargets }))
}

plugins.push(uni())

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
})
