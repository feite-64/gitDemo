<template>
  <transition name="block">
    <div v-show="show"></div>
  </transition>
  <button @click="showClick">显示/隐藏</button>
  <hr />
  <button @click="pushClick">添加</button>
  <button @click="popClick">删除</button>
  <transition-group enter-active-class="animate__animated animate__backInDown"
    leave-active-class="animate__animated animate__backOutDown">
    <div v-for="(item,index) in list" :key="index">{{item}}</div>
  </transition-group>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import 'animate.css'
const show = ref(true)
const showClick = () => {
  show.value = !show.value
}
const list = reactive<number[]>([1, 2, 3, 4, 5])
const pushClick = () => {
  list.push(list.length + 1)
}
const popClick = () => {
  list.pop()
}
// const lists = reactive(Array.from({ length: 81 }).map((value, index) => {
//   return {
//     id: index,
//     number: (index % 9) + 1
//   }
// }))
// console.log(lists);


</script>

<style scoped lang='scss'>
div {
  width: 200px;
  height: 100px;
  background-color: aqua;
}

.block-enter-from {
  width: 0;
  height: 0;
}

.block-enter-active {
  transition: all 1s ease;
}

.block-enter-to {
  width: 200px;
  height: 200px;
}

.block-leave-from {
  width: 200px;
  height: 200px;
}

.block-leave-active {
  transition: all .5s ease;
}

.block-leave-to {
  width: 0;
  height: 0;
}
</style>