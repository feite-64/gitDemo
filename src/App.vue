<script setup lang="ts">
import { onMounted, ref } from 'vue';

const div = ref(null)
onMounted(() => {
  console.log(div.value);
  })
  
</script>

<template>
  <div ref="div"></div>
</template>

<style scoped>
</style>
