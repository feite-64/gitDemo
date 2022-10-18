export interface StatisGradeCityDetail {
  confirmAdd: number
  dead: number
  date: string
  nowConfirm: number
  city: string
  confirm: number
  heal: number
  grade: string
  mtime: string
  sdate: string
  syear: number
  province: string
  wzz_add: string
}

export interface RootObject {
  statisGradeCityDetail: StatisGradeCityDetail[]
}
