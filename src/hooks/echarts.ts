import * as echarts from 'echarts/core'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import {
  TitleComponentOption,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption,
  TitleComponent,
  TooltipComponent,
  GeoComponent,
  GeoComponentOption,
  GridComponent,
  GridComponentOption
} from 'echarts/components'
import {
  ScatterChart,
  ScatterSeriesOption,
  MapChart,
  MapSeriesOption,
  GraphChart,
  GraphSeriesOption,
  BarChart,
  BarSeriesOption
} from 'echarts/charts'

echarts.use([
  CanvasRenderer,
  UniversalTransition,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  BarChart,
  ScatterChart,
  GeoComponent,
  GraphChart,
  MapChart
])
export type EChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | GraphSeriesOption
  | GridComponentOption
  | BarSeriesOption
  | ScatterSeriesOption
  | MapSeriesOption
  | GeoComponentOption
>
export { echarts }
