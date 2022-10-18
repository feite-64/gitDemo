export interface ShowAddSwitch {
  all: boolean
  suspect: boolean
  nowConfirm: boolean
  nowSevere: boolean
  confirm: boolean
  dead: boolean
  heal: boolean
  importedCase: boolean
  noInfect: boolean
  localConfirm: boolean
  localinfeciton: boolean
}

export interface Today {
  confirm: number
  isUpdated: boolean
}

export interface Total {
  confirm: number
  dead: number
  provinceLocalConfirm: number
  showRate: boolean
  heal: number
  mediumRiskAreaNum: number
  highRiskAreaNum: number
  nowConfirm: number
  wzz: number
  showHeal: boolean
  continueDayZeroLocalConfirmAdd: number
  continueDayZeroLocalConfirm: number
  mtime: string
  adcode: string
}

export interface Today {
  abroad_confirm_add: number
  dead_add: number
  confirm: number
  confirmCuts: number
  isUpdated: boolean
  tip: string
  wzz_add: number
  local_confirm_add: number
}

export interface Total {
  continueDayZeroConfirmAdd: number
  continueDayZeroConfirm: number
  adcode: string
  nowConfirm: number
  confirm: number
  wzz: number
  provinceLocalConfirm: number
  continueDayZeroLocalConfirmAdd: number
  mtime: string
  dead: number
  showRate: boolean
  heal: number
  showHeal: boolean
  mediumRiskAreaNum: number
  highRiskAreaNum: number
}

export interface Total {
  confirm: number
  wzz: number
  mediumRiskAreaNum: number
  continueDayZeroLocalConfirm: number
  heal: number
  provinceLocalConfirm: number
  mtime: string
  nowConfirm: number
  showHeal: boolean
  continueDayZeroLocalConfirmAdd: number
  adcode: string
  dead: number
  showRate: boolean
  highRiskAreaNum: number
}

export interface Today {
  confirm: number
  confirmCuts: number
  isUpdated: boolean
  wzz_add: number
  local_confirm_add: number
}

export interface Children {
  total: Total
  name: string
  adcode: string
  date: string
  today: Today
}

export interface Children {
  name: string
  adcode: string
  date: string
  today: Today
  total: Total
  children: Children[]
}

export interface AreaTree {
  name: string
  today: Today
  total: Total
  children: Children[]
}

export interface ChinaTotal {
  showlocalinfeciton: number
  noInfectH5: number
  localConfirmH5: number
  localWzzAdd: number
  localConfirmAdd: number
  localConfirm: number
  confirm: number
  nowSevere: number
  importedCase: number
  noInfect: number
  mediumRiskAreaNum: number
  highRiskAreaNum: number
  nowConfirm: number
  showLocalConfirm: number
  local_acc_confirm: number
  nowLocalWzz: number
  mRiskTime: string
  heal: number
  dead: number
  suspect: number
  confirmAdd: number
  deadAdd: number
  mtime: string
}

export interface ChinaAdd {
  heal: number
  nowConfirm: number
  suspect: number
  importedCase: number
  noInfect: number
  localConfirmH5: number
  confirm: number
  nowSevere: number
  localConfirm: number
  noInfectH5: number
  dead: number
}

export interface Diseaseh5Shelf {
  showAddSwitch: ShowAddSwitch
  areaTree: AreaTree[]
  lastUpdateTime: string
  chinaTotal: ChinaTotal
  chinaAdd: ChinaAdd
  isShowAdd: boolean
}

export interface RootObject {
  diseaseh5Shelf: Diseaseh5Shelf
}
