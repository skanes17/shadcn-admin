'use client'

import { TrendingUp } from 'lucide-react'
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'

const chartData = [{ label: 'near_teammate', value: 70.43 }]

const chartConfig = {
  value: {
    label: '% Time near teammate',
    color: 'hsl(var(--chart-2))', // Ensure this variable is defined in your CSS
  },
  label: {
    label: '% Time',
    // color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export function RadialGraphComponent() {
  const end_angle = chartData[0].value * 3.6

  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Time near Teammmate</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer config={chartConfig} className='mx-auto aspect-square max-h-[250px]'>
          <RadialBarChart data={chartData} startAngle={0} endAngle={end_angle} innerRadius={80} outerRadius={110}>
            <PolarGrid gridType='circle' radialLines={false} stroke='none' className='first:fill-muted last:fill-background' polarRadius={[86, 74]} />
            <RadialBar
              dataKey='value'
              background
              cornerRadius={10}
              fill={chartConfig.value.color} // Set the fill color here
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle' dominantBaseline='middle'>
                        <tspan x={viewBox.cx} y={viewBox.cy} className='fill-foreground text-4xl font-bold'>
                          {Math.round(chartData[0].value).toLocaleString()}%
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className='fill-muted-foreground'>
                          time near teammate
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 font-medium leading-none'>
          Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}
