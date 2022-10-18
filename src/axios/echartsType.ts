import service from './index'
export function graphChart() {
  return service({
    url: '/api/data/asset/data/les-miserables.json',
    method: 'get'
  })
}
// 新冠实例
export function echartsXG() {
  return service({
    url: '/XG/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf',
    method: 'get'
  })
}
