<template>
  <div ref="main" :style="{ width: '100%', height: '100%' }" >
  </div>
  <div>
    <!-- 注释 -->
    11111111111111
  </div>
</template>

<script setup lang="ts">
import { Directive, DirectiveBinding, onMounted, ref } from 'vue';
import { echarts } from '../../echarts/index'
const main = ref<HTMLElement>()
// const value = ref('red')
onMounted(() => {
  const myChart = echarts.init(main.value!)
  // // 绘制图表
  myChart.setOption({
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  });
})



</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
