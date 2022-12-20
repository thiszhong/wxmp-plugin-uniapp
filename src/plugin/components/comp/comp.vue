<template>
  <view class="container">
    <view>我是插件的自定义组件</view>
    <view>这里显示一个小程序的自定义组件</view>
    <view>属性 test：{{ test }}</view>
    <view>属性 test2：{{ test2 }}</view>
  </view>
</template>

<script>
export default {
  props: {
    test: String,
    test2: Number,
  },
};
</script>

<style>
.container {
  border: 1px solid black;
  background-color: #aaffff;
  padding: 8px;
  margin: 8px;
}
</style>
