<template>
  <view>
    <image :src='imgSrc' />
  </view>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const imgSrc = ref('http://storage.360buyimg.com/taro-static/static/images/logo.png')
    return {
      imgSrc
    }
  }
}
</script>
