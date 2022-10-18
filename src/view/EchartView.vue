<template>
  <!-- <div :style="{backgroundImage:`url(${bg})`}"></div> -->
  <div class="box">
    <div class="box-left">左</div>
    <div class="box-center">
      <CenterView />
    </div>
    <div class="box-right">右</div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useEchartsStore } from '@/store/echartsStore'
import CenterView from '@/view/home/CenterView.vue'
// import bg from '@/assets/setu1.jpg'
//请求新冠数据
const useEcharts = useEchartsStore()


onMounted(async () => {
  await useEcharts.getList()
  console.log(useEcharts.list);

})
</script>

<style scoped lang='scss'>
.box {
  display: flex;
  height: 100%;
  overflow: hidden;
  background-image: url('@/assets/shenhe1.jpg');
  background-repeat: no-repeat;
  // background-size: cover;
  background-position: center;

  &-left {
    width: 400px;
    // background-image: url('@/assets/linghua.jpg');
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: center;
  }

  &-center {
    flex: 1;
  }

  &-right {
    width: 400px;
    // background-image: url('@/assets/shenhe.jpg');
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: center;
  }
}
</style>