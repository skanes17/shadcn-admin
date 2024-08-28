import { LabelList, Legend, RadialBar, RadialBarChart } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const chartData = [
  { player: 'you', value: 10, fill: 'var(--color-you)' },
  { player: 'average', value: 21, fill: 'var(--color-average)' },
]

const chartConfig = {
  you: {
    label: 'You',
    color: 'hsl(var(--chart-1))',
  },
  average: {
    label: 'Average',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig

export function RadialChartMultiple() {
  return (
    <ChartContainer config={chartConfig} className='mx-auto aspect-square max-h-[250px]'>
      <RadialBarChart accessibilityLayer data={chartData} startAngle={180} endAngle={0} innerRadius={30} outerRadius={110}>
        <RadialBar dataKey='value' background>
          <LabelList position='middle' dataKey='value' formatter={(value) => `${value}%`} className='fill-white capitalize' fontSize={24} />
          {/* <LabelList position='middle' dataKey='player' className='fill-white capitalize' fontSize={24} /> */}
        </RadialBar>
      </RadialBarChart>
    </ChartContainer>
  )
}
