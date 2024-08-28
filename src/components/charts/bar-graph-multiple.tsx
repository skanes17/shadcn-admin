import { Bar, BarChart, CartesianGrid, Legend, ReferenceLine, XAxis, YAxis } from 'recharts'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const chartData = [{ skill: 'Time in Air', player: 18, average: 13 }]

// find max of both
const max = Math.max(chartData[0].player, chartData[0].average) + 10

const chartConfig: ChartConfig = {
  player: {
    label: 'You',
    color: 'hsl(var(--chart-1))',
  },
  average: {
    label: 'Average',
    color: 'hsl(var(--chart-5))',
  },
}

export function BarGraphMultipleComponent() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        {/* <XAxis dataKey='skill' /> */}
        <YAxis label={{ value: '% of Game Time', angle: -90, position: 'insideLeft' }} tickFormatter={(value) => `${value}%`} domain={[0, max]} />
        <Legend formatter={(value) => chartConfig[value].label} />
        <Bar dataKey='player' fill='var(--color-player)' radius={4} label={{ position: 'inside', fill: '#fff', fontSize: 24 }} />
        <Bar dataKey='average' fill='var(--color-average)' radius={4} label={{ position: 'inside', fill: '#fff', fontSize: 24 }} />
      </BarChart>
    </ChartContainer>
  )
}
