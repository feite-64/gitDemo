<template>

  <div>我是B</div>
  <p>接收到的数据：{{ amount }}</p>
</template>

<script setup lang='ts'>
import { ref, getCurrentInstance, onMounted } from 'vue';

const amount = ref<number>(0);
const instance = getCurrentInstance()
// instance?.proxy?.$Bus.on('*', (res: number) => {
//   amount.value = res;
// })
// instance?.proxy?.$Bus.on('on-click', (res: number) => {
//   amount.value = res;
// })

</script>

<style scoped lang='scss'>

</style>