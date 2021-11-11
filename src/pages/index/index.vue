<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{ title }}</text>
		</view>

		<button @click="navigateToPlugin">点击跳转插件页</button>

    <TestSync :visible.sync="test" />

    <TestEmitKebab @button-click="aaa" />

	</view>
</template>

<script>
import TestSync from '../../plugin/components/test-sync/test-sync'
import TestEmitKebab from '../../plugin/components/test-emit-kebab/test-emit-kebab'

export default {
	components: {
    TestSync,
		TestEmitKebab
  },
	data() {
		return {
			title: 'hello',
			test: false
		}
	},
	methods: {
		navigateToPlugin() {
			uni.navigateTo({
				url: "plugin://myPlugin/hello",
			});
		},
		aaa() {
      uni.showToast({
        title: '收到'
      })
    }
	}
};
</script>

<style>
.content {
	text-align: center;
	height: 400upx;
}

.logo {
	height: 200upx;
	width: 200upx;
	margin-top: 200upx;
}

.title {
	font-size: 36upx;
	color: #8f8f94;
}
</style>
