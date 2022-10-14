<template>

  <div>
    <input type="text" v-model="user.name">
    <button @click="stopWatch">取消监听</button>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive, watchEffect, watch } from 'vue'
const user = reactive({
  name: 'sun',
  age: 18
})
const watchs = watchEffect(() => {
  console.log(user.name);
})
const watchss = watch(user, () => {
  console.log(user.name);
})
const stopWatch = () => {
  watchs()
}
</script>

<style scoped lang='scss'>

</style>