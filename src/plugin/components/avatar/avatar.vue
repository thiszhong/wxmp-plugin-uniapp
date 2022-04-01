<script setup lang="ts">
import { ref } from "vue"

const imgSrc = ref(
  "http://storage.360buyimg.com/taro-static/static/images/logo.png"
)
</script>

<template>
  <view>
    <image :src="imgSrc" />
  </view>
</template>
