'use client'

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { useGamesFilterStore } from '@/pages/overview/gamesFilterState'

export const chartData = Array.from({ length: 12 }, (_, i) => ({
  game: `Game ${i + 1}`,
  avg_speed: Math.floor(1000 + i * 6 + Math.random() * 100),
}))

const filterStages = [5, 10, 25, 50, 100] // You can adjust this list as needed

const chartConfig = {
  avg_speed: {
    label: 'Average Speed',
    color: 'hsl(var(--chart-1))',
  },
} satisfies ChartConfig

export function LineGraph() {
  const { selectedGames } = useGamesFilterStore() // from zustand
  const filteredData = chartData.slice(-selectedGames)

  const gamesPlayed = filteredData.length // Number of games played

  const roundDownToNearest = (value: number, nearest: number) =>
    Math.floor(value / nearest) * nearest
  const roundUpToNearest = (value: number, nearest: number) =>
    Math.ceil(value / nearest) * nearest

  const minValue = roundDownToNearest(
    Math.min(...filteredData.map((d) => d.avg_speed)),
    50
  )
  const maxValue = roundUpToNearest(
    Math.max(...filteredData.map((d) => d.avg_speed)),
    50
  )

  // const availableFilters = filterStages.filter((stage) => gamesPlayed >= stage)
  // const nextUnlockStage = filterStages.find((stage) => gamesPlayed < stage)

  // const initialSpeed = filteredData[0].avg_speed
  // const finalSpeed = filteredData[selectedGames - 1].avg_speed
  // const speedDifference = finalSpeed - initialSpeed

  // const avgSpeed =
  //   filteredData.reduce((acc, curr) => acc + curr.avg_speed, 0) / selectedGames

  return (
    <Card>
      <CardHeader>
        <CardTitle>Average Speed</CardTitle>
        <CardDescription>
          Average speed for your{' '}
          {gamesPlayed === 1 ? 'last game' : `last ${gamesPlayed} games`}{' '}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[310px] w-full'
        >
          <LineChart
            accessibilityLayer
            data={filteredData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey='game' />
            <YAxis domain={[minValue, maxValue]} />{' '}
            {/* Set the domain to min and max */}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey='avg_speed'
              type='natural'
              stroke='var(--color-avg_speed)'
              strokeWidth={2}
              dot={{
                fill: 'var(--color-avg_speed)',
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
