<template>

  <div>
    <MenuItem :data="data">
    </MenuItem>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import MenuItem from './ItemRecursion.vue';
const data = reactive([
  {
    roleId: '1',
    name: '1',
    children: [
      {
        roleId: '1-1',
        name: '1-1',
        children: [
          {
            roleId: '1-1-1',
            name: '1-1-1',
          },
          {
            roleId: '1-1-2',
            name: '1-1-2',
          }
        ]
      }
    ]
  },
  {
    roleId: '2',
    name: '2',
    children: [
      {
        roleId: '2-1',
        name: '2-1',
      },
      {
        roleId: '2-2',
        name: '2-2',
      },
    ]
  }, {
    roleId: '3',
    name: '3',
  }
])
</script>
<style scoped lang='scss'>

</style>
