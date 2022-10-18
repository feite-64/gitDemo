import { defineStore } from 'pinia'
import { echartsXG } from '@/axios/echartsType'
export const useEchartsStore = defineStore('echarts', {
  state() {
    return {
      list: {}
    }
  },
  getters: {},
  actions: {
    async getList() {
      await echartsXG()
        .then((res) => {
          this.list = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
