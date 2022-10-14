<template>

  <ul>
    <li @click.stop="menuClick(item.name)" v-for="item in data" :key="item.roleId">
      {{item.name}}
      <MenuItem v-if="item.children?.length" :data="item.children">
      </MenuItem>
    </li>
  </ul>

</template>

<script setup lang='ts'>
type TreeList = {
  name: string,
  roleId: string,
  children?: TreeList[] | []
}

type Props = {
  data?: TreeList[] | []
}

defineProps<Props>()
const menuClick = (name: string) => {
  console.log(name);

}
</script>
<script lang="ts">
export default {
  name: 'MenuItem'
}
</script>
<style scoped lang='scss'>

</style>