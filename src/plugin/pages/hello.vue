<template>
  <view>Hello plugin

    <TestSync :visible.sync="test" />
    <TestEmitKebab @button-click="aaa" />
  </view>
</template>

<script>
import TestSync from '../components/test-sync/test-sync'
import TestEmitKebab from '../components/test-emit-kebab/test-emit-kebab'

export default {
  components: {
    TestSync,
    TestEmitKebab
  },
  data() {
    return {
      test: false
    }
  },
  methods: {
    aaa() {
      uni.showToast({
        title: '收到'
      })
    }
  }
}
</script>
