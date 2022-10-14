<template>

  <div>
    <!-- 动画列表 -->
    <!-- <TransitinGroup></TransitinGroup> -->
    <!-- 全局组件直接引用 -->
    <!-- <EchartsViwe></EchartsViwe> -->

    <PropsVue></PropsVue>
    <!-- <Emit></Emit> -->
    {{$filters.format('哎嘿')}}{{$env}}
  </div>

</template>

<script setup lang='ts'>
// import EchartsViwe from './components/EchartsView.vue';
// import TransitinGroup from '@/demo/TransitinGroup.vue';
// import readerDom from './App'
// import A from '@/demo/MittEvent/A.vue';
// import B from '@/demo/MittEvent/B.vue';
import PropsVue from '@/demo/vModel/Props.vue';


</script>

<style scoped lang='scss'>

</style>