'use client'

import { TrendingUp } from 'lucide-react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
} from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export const chartData = [
  { game: 'Game 1', avg_speed: 1008 },
  { game: 'Game 2', avg_speed: 1031 },
  { game: 'Game 3', avg_speed: 1018 },
  { game: 'Game 4', avg_speed: 1014 },
  { game: 'Game 5', avg_speed: 1052 },
  { game: 'Game 6', avg_speed: 1027 },
  { game: 'Game 7', avg_speed: 1050 },
  { game: 'Game 8', avg_speed: 1078 },
  { game: 'Game 9', avg_speed: 1107 },
  { game: 'Game 10', avg_speed: 1078 },
  { game: 'Game 11', avg_speed: 1092 },
  { game: 'Game 12', avg_speed: 1090 },
  { game: 'Game 13', avg_speed: 1100 },
  { game: 'Game 14', avg_speed: 1123 },
  { game: 'Game 15', avg_speed: 1162 },
  { game: 'Game 16', avg_speed: 1155 },
  { game: 'Game 17', avg_speed: 1169 },
  { game: 'Game 18', avg_speed: 1163 },
  { game: 'Game 19', avg_speed: 1152 },
  { game: 'Game 20', avg_speed: 1181 },
  { game: 'Game 21', avg_speed: 1222 },
  { game: 'Game 22', avg_speed: 1181 },
  { game: 'Game 23', avg_speed: 1213 },
  { game: 'Game 24', avg_speed: 1243 },
  { game: 'Game 25', avg_speed: 1239 },
  { game: 'Game 26', avg_speed: 1257 },
  { game: 'Game 27', avg_speed: 1231 },
  { game: 'Game 28', avg_speed: 1299 },
  { game: 'Game 29', avg_speed: 1270 },
  { game: 'Game 30', avg_speed: 1292 },
  { game: 'Game 31', avg_speed: 1281 },
  { game: 'Game 32', avg_speed: 1337 },
  { game: 'Game 33', avg_speed: 1311 },
  { game: 'Game 34', avg_speed: 1343 },
  { game: 'Game 35', avg_speed: 1334 },
  { game: 'Game 36', avg_speed: 1368 },
  { game: 'Game 37', avg_speed: 1356 },
  { game: 'Game 38', avg_speed: 1398 },
  { game: 'Game 39', avg_speed: 1391 },
  { game: 'Game 40', avg_speed: 1387 },
  { game: 'Game 41', avg_speed: 1429 },
  { game: 'Game 42', avg_speed: 1395 },
  { game: 'Game 43', avg_speed: 1404 },
  { game: 'Game 44', avg_speed: 1446 },
  { game: 'Game 45', avg_speed: 1460 },
  { game: 'Game 46', avg_speed: 1463 },
  { game: 'Game 47', avg_speed: 1484 },
  { game: 'Game 48', avg_speed: 1491 },
  { game: 'Game 49', avg_speed: 1506 },
  { game: 'Game 50', avg_speed: 1462 },
]

const chartConfig = {
  avg_speed: {
    label: 'Average Speed',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function LineGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey='game' />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey='avg_speed'
              type='natural'
              stroke='var(--color-avg_speed)'
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
