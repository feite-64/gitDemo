<template>
  <div>
    <el-button :disabled="disabled" ref="elBtn" @click="isShowClick">{{num}}</el-button>
  </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
const num = ref<number>(10)
const disabled = ref<boolean>(false)
const isShowClick = () => {
  num.value++
  if (num.value >= 15) {
    instance?.proxy?.$loading.showToast(`已超过最大值${num.value}`)
    disabled.value = true
  }
}

</script>

<style scoped lang='scss'>
div {
  display: flex;
  justify-content: center;
  // align-items: center;
}
</style>