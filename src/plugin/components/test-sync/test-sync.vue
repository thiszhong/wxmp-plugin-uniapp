<template>
  <view>
    <button @click="onClick">点击，当前值：{{ visible }}</button>
  </view>
</template>

<script>
export default {
  props: {
    visible: Boolean,
  },
  methods: {
    onClick() {
      this.$emit('update:visible', !this.visible)
    }
  }
}
</script>
