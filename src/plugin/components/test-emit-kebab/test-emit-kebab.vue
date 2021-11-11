<template>
  <view>
    <button @click="onClick">点击触发 button-click 事件</button>
  </view>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('button-click')
    }
  }
}
</script>
