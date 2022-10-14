<template>
  <!-- src\components\Toast.vue -->
  <div v-if="isShow" class="toast">{{ toastMessage }}</div>
</template>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const toastData = reactive({
  isShow: false,
  toastMessage: ''
})
const { isShow, toastMessage } = toRefs(toastData)
const showToast = (message: string) => {
  toastData.isShow = true
  toastData.toastMessage = message
  setTimeout(() => {
    toastData.isShow = false
    toastData.toastMessage = ''
  }, 2000)
}
defineExpose({
  showToast
})
</script>
<style lang="scss" scoped>
.toast {
  width: 50px;
  height: 50px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.35);
  padding: 10px;
  border-radius: 10px;
  color: #fff;
}
</style>
