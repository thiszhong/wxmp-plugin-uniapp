<template>
    <view class="content">
        <image class="logo" src="/static/logo.png"></image>
        <view>
            <text class="title">{{title}}</text>
        </view>

        <button @click="navigateToPlugin">点击跳转插件页</button>
    </view>
</template>

<script>
    export default {
        setup() {
            const navigateToPlugin = () => {
                uni.navigateTo({
                    url: 'plugin://myPlugin/hello'
                })
            }
            return {
                title: 'hello',
                navigateToPlugin
            }
        }
    }
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
