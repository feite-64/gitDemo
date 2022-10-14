<template>

  <div>我是B</div>
  <p>接收到的数据：{{ amount }}</p>
</template>

<script setup lang='ts'>
import { ref, getCurrentInstance } from 'vue';

const amount = ref();
const instance = getCurrentInstance()
const fn = (sum: unknown) => {
  amount.value = sum;
  console.log(sum);
  // console.log(sum);
}
//on接受事件
instance?.proxy?.$Bus.on('on-click', fn
)
const off = (value: string | number) => {
  if (value >= 102) {
    //满足条件  移除订阅
    instance?.proxy?.$Bus.off('on-click', fn)
  }
}
watchEffect(() => {
  off(amount.value)
})

</script>

<style scoped lang='scss'>

</style>