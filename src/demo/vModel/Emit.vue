<template>

  <div v-if="modelValue" v-list="{background:textVal}">
    <el-button @click="emitData">关闭</el-button>
    <h4>子组件</h4>
    <input :value="textVal" @change="changes" />
  </div>
</template>

<script setup lang='ts'>
import { Directive, DirectiveBinding } from 'vue';

const props = defineProps<{
  modelValue: boolean,
  textVal: string,
  textValModifiers?: {
    isBt: boolean
  }
}>()
// defineProps(['modelValue','textVal'])
const emit = defineEmits(['update:modelValue', 'update:textVal'])

const changes = (e: Event) => {
  const target = e.target as HTMLInputElement
  // emit('update:textVal', props.textValModifiers?.isBt ? target.value + 'bt' : target.value)
  emit('update:textVal', target.value)
}

const emitData = () => {
  emit('update:modelValue', false)
}
//自定义指令
type Dir = {
  background: string
}
const vList: Directive = (el: HTMLElement, binding: DirectiveBinding<Dir>) => {
  el.style.background = binding.value.background;
}
</script>

<style scoped lang='scss'>
div {
  width: 200px;
  height: 100px;
  border: 1px solid #000;
}

button {
  float: right;
}
</style>