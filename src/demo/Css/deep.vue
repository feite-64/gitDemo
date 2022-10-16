<template>
  <div class="btn">
    <el-button>按钮</el-button>
    <slot></slot>
  </div>
  <!-- deep -->
  <!-- 标签添加data-v-哈希值 -->
  <!-- css选择器末尾添加属性选择器[data-v-哈希值] 样式私有化-->
  <!-- 组件内引用外部组件，只会给其他组件的最外层加属性选择器 -->

  <!-- soltter -->
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>

<style scoped lang='scss'>
div {
  .btn {
    :deep(.el-button) {
      background-color: red;
    }

    // :slotted(.el-button) 
    // :global(.el-button)
  }
}
</style>