'use client'

import { TrendingUp } from 'lucide-react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
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
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export const chartData = Array.from({ length: 12 }, (_, i) => ({
  game: `Game ${i + 1}`,
  avg_speed: Math.floor(1000 + i * 6 + Math.random() * 100),
}))

const filterStages = [5, 10, 25, 50, 100] // You can adjust this list as needed

const chartConfig = {
  avg_speed: {
    label: 'Average Speed',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig

export function LineGraph() {
  const gamesPlayed = chartData.length // Number of games played

  const [selectedGames, setSelectedGames] = useState(gamesPlayed)
  const filteredData = chartData.slice(-selectedGames)

  const availableFilters = filterStages.filter((stage) => gamesPlayed >= stage)
  const nextUnlockStage = filterStages.find((stage) => gamesPlayed < stage)

  const initialSpeed = filteredData[0].avg_speed
  const finalSpeed = filteredData[selectedGames - 1].avg_speed
  const speedDifference = finalSpeed - initialSpeed

  const avgSpeed =
    filteredData.reduce((acc, curr) => acc + curr.avg_speed, 0) / selectedGames

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <div>
            <CardTitle>Average Speed</CardTitle>
            {/* <CardDescription>Last {selectedGames} Games</CardDescription> */}
          </div>
          <div>
            <Select onValueChange={(value) => setSelectedGames(Number(value))}>
              <SelectTrigger className='w-[300px]'>
                <SelectValue placeholder='All Games' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={gamesPlayed.toString()}>
                  All Games
                </SelectItem>
                {availableFilters.map((filter) => (
                  <SelectItem key={filter} value={filter.toString()}>
                    Last {filter} Games
                  </SelectItem>
                ))}

                {/* {nextUnlockStage && (
                  <SelectItem disabled value='disabled'>
                    Play {nextUnlockStage - gamesPlayed} more game
                    {nextUnlockStage - gamesPlayed === 1 ? '' : 'es'} to
                    unlock deeper insights!
                  </SelectItem>
                )} */}
              </SelectContent>
            </Select>
          </div>
        </div>
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
            <YAxis dataKey='avg_speed' />
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
