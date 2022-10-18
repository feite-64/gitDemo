<template>
  <div>
    <el-button :disabled="disabled" ref="elBtn" @click="isShowClick">{{num}}</el-button>
    <img id="img" src="../assets/草神.png" alt="草神">
  </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue'
// import useBase64 from '@/hooks/index'
import { debounce } from 'lodash'
const instance = getCurrentInstance()
const num = ref<number>(10)
const disabled = ref<boolean>(false)
// const current = ref<number>(0)
const isShowClick = () => {
  num.value++
  if (num.value >= 15) {
    //使用自定义插件
    instance?.proxy?.$loading.showToast(`已超过最大值${num.value}`)
    // 不可选中
    disabled.value = true
  }
}
debounce(isShowClick, 1000)
// 图片转base64
// useBase64({ el: '#img' }).then(res => {
//   console.log(res.baseUrl);
// })
</script>

<style scoped lang='scss'>
div {
  display: flex;
  justify-content: center;

  // align-items: center;
  img {
    width: 300px;
    height: 200px;
  }
}
</style>