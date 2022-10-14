<template>

  <div>我是A</div>
  <button @click="emit"> 发送数据emit</button>
</template>

<script setup lang='ts'>
import { ref, getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
const money = ref<number>(98)
//派发事件
const emit = () => {
  instance?.proxy?.$Bus.emit('on-click', money.value += 2)
  instance?.proxy?.$Bus
}
</script>

<style scoped lang='scss'>

</style>