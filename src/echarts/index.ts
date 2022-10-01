import * as echarts from 'echarts/core'
import { ScatterChart } from 'echarts/charts'
import { GridComponent, GridComponentOption } from 'echarts/components'
import { BarChart, BarSeriesOption } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { TitleComponent, TooltipComponent } from 'echarts/components'
echarts.use([
  GridComponent,
  BarChart,
  CanvasRenderer,
  UniversalTransition,
  ScatterChart,
  TitleComponent,
  TooltipComponent
])
export type EChartsCoreOption = echarts.ComposeOption<
  GridComponentOption | BarSeriesOption
>
export { echarts }
