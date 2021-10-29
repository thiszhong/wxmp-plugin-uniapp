<template>
  <view>Hello plugin

    <TestSync :visible.sync="test" />
  </view>
</template>

<script>
import TestSync from '../components/test-sync/test-sync'

export default {
  components: {
    TestSync
  },
  data() {
    return {
      test: false
    }
  }
}
</script>
