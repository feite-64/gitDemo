<script setup lang="ts">
import HelloWord from './components/HelloWorld.vue'
import { ref, watch } from 'vue';

let students = ref(1)
setTimeout(() => {
  students.value = 2
}, 1000);

watch(() => students.value, (newVal, oldVal) => {
  console.log(newVal, oldVal);
})
</script>

<template >
  <div v-if="students">{{students}}</div>
  <HelloWord v-if="students!=1" :students="students"></HelloWord>
</template>


<style scoped lang="scss">
li {
  width: 200px;
}

.el {
  height: calc(100vh - 60px);
  background-color: #5f89ce;
}

// 定义数组，数组元素用逗号隔开
$liColor: #f5ad1b, #5f89ce, #94bf45, #da8ec5, #78bfc2, #bec278;

// 开始 @each 循环遍历数组
// $c 作为循环变量，代表了数组的元素，不是索引~！！！
@each $c in $liColor {
  $i: index($liColor, $c); // 获取 $c 在数组中的索引，并赋值给 $i 赋值用冒号，不是等号~！

  li:nth-child(#{$i}) {
    // 经典的地方来了，SCSS 循环是从 1 开始，不是 0 哦~
    background: $c; // 背景色

    &:hover {
      background: lighten($c, 10%); // hover 后的颜色
    }
  }
}
</style>
