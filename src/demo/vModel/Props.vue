<template>

  <div>父组件</div>
  <el-button @click="isShowClick">显示/隐藏</el-button>
  <div>isShow:{{isShow}}</div>
  <p>{{text}}</p>
  <Emit v-model="isShow" v-model:textVal.isBt="text"></Emit>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Emit from '@/demo/vModel/Emit.vue';
const isShow = ref<boolean>(true)
const text = ref('#e0e0e0')
const isShowClick = () => {
  isShow.value = !isShow.value
}


</script>

<style scoped lang='scss'>

</style>