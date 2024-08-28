'use client'

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Label, LabelList, Line, LineChart, PolarAngleAxis, RadialBar, RadialBarChart, Rectangle, ReferenceLine, XAxis, YAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Separator } from '@/components/ui/separator'
import { ArrowUp, TrendingUp } from 'lucide-react'

export function ChartsGrid() {
  return (
    <div className='chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8'>
      <div className='grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]'>
        {/* Average Speed Chart */}
        <Card className='lg:max-w-md'>
          <CardHeader className='space-y-0 pb-2'>
            <CardDescription>Past 5 Games</CardDescription>
            <CardTitle className='text-4xl tabular-nums'>
              99 <span className='font-sans text-sm font-normal tracking-normal text-muted-foreground'>km/h</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                speed: {
                  label: 'Avg Speed',
                  color: 'hsl(var(--chart-1))',
                },
              }}
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: -4,
                  right: -4,
                }}
                data={[
                  {
                    date: 'Game 1',
                    speed: 90,
                  },
                  {
                    date: 'Game 2',
                    speed: 95,
                  },
                  {
                    date: 'Game 3',
                    speed: 93,
                  },
                  {
                    date: 'Game 4',
                    speed: 96,
                  },
                  {
                    date: 'Game 5',
                    speed: 110,
                  },
                ]}
              >
                <Bar dataKey='speed' fill='var(--color-speed)' radius={5} fillOpacity={0.6} activeBar={<Rectangle fillOpacity={0.8} />} />
                <XAxis
                  dataKey='date'
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                  tickFormatter={(value) => {
                    const numericValue = value.toString().match(/\d+/)
                    return numericValue ? numericValue[0] : ''
                  }}
                />
                <ChartTooltip defaultIndex={2} content={<ChartTooltipContent hideIndicator />} cursor={false} />
                <ReferenceLine y={99} stroke='hsl(var(--muted-foreground))' strokeDasharray='5 5' strokeWidth={2}>
                  <Label position='insideBottomLeft' value='Average' offset={10} fill='hsl(var(--foreground))' />
                  <Label position='insideTopLeft' value='99 km/h' className='text-lg' fill='hsl(var(--foreground))' offset={10} />
                </ReferenceLine>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className='flex-col items-start gap-1'>
            <CardDescription>
              Over the past 5 games, your average speed was <span className='font-medium text-foreground'>99 km/h</span>.
            </CardDescription>
          </CardFooter>
        </Card>
        {/* Time Spent in Air (Resting HR equivalent) */}
        <Card className='flex flex-col lg:max-w-md'>
          <CardHeader className='flex flex-row items-center gap-4 space-y-0 pb-2'>
            <div>
              <CardDescription>Avg Time Spent in Air</CardDescription>
              <CardTitle className='flex items-baseline gap-1 text-4xl tabular-nums'>15%</CardTitle>
            </div>
            <div>
              <CardDescription>Consistency</CardDescription>
              <CardTitle className='flex items-baseline gap-1 text-4xl tabular-nums'>93%</CardTitle>
            </div>
            <div>
              <CardDescription>Trend</CardDescription>
              <CardTitle className='flex items-baseline gap-1 text-4xl tabular-nums'>
                5%
                <TrendingUp className='text-green-500' />
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className='flex flex-1 items-center'>
            <ChartContainer
              config={{
                airTime: {
                  label: 'Time in Air',
                  color: 'hsl(var(--chart-1))',
                },
              }}
              className='w-full'
            >
              <LineChart
                accessibilityLayer
                margin={{
                  left: 14,
                  right: 14,
                  top: 10,
                }}
                data={[
                  {
                    date: 'Game 1',
                    airTime: 14,
                  },
                  {
                    date: 'Game 2',
                    airTime: 16,
                  },
                  {
                    date: 'Game 3',
                    airTime: 15,
                  },
                  {
                    date: 'Game 4',
                    airTime: 17,
                  },
                  {
                    date: 'Game 5',
                    airTime: 19,
                  },
                ]}
              >
                <CartesianGrid strokeDasharray='4 4' vertical={false} stroke='hsl(var(--muted-foreground))' strokeOpacity={0.5} />
                <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
                <XAxis
                  dataKey='date'
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => {
                    const numericValue = value.toString().match(/\d+/)
                    return numericValue ? numericValue[0] : ''
                  }}
                />
                <Line
                  dataKey='airTime'
                  type='natural'
                  fill='var(--color-airTime)'
                  stroke='var(--color-airTime)'
                  strokeWidth={2}
                  dot={false}
                  activeDot={{
                    fill: 'var(--color-airTime)',
                    stroke: 'var(--color-airTime)',
                    r: 4,
                  }}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <ReferenceLine y={18} stroke='hsl(var(--muted-foreground))' strokeDasharray='5 5' strokeWidth={2}>
                  <Label position='insideBottomLeft' value='Consistency' offset={10} fill='hsl(var(--muted-foreground))' />
                </ReferenceLine>
                <ReferenceLine y={15} stroke='hsl(var(--muted-foreground))' strokeDasharray='5 5' strokeWidth={2} />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className='grid w-full flex-1 gap-6 lg:max-w-[20rem]'>
        {/* Boost Collected Chart */}
        <Card className='max-w-xs'>
          <CardContent className='flex gap-4 p-4 pb-2'>
            <ChartContainer
              config={{
                smallBoost: {
                  label: 'Small Pads',
                  color: 'hsl(var(--chart-1))',
                },
                bigBoost: {
                  label: 'Big Pads',
                  color: 'hsl(var(--chart-2))',
                },
              }}
              className='h-[140px] w-full'
            >
              <BarChart
                margin={{
                  left: 10,
                  right: 10,
                  top: 0,
                  bottom: 10,
                }}
                data={[
                  {
                    boostType: 'Small Pads',
                    value: 74,
                    label: '74',
                    fill: 'var(--color-smallBoost)',
                  },
                  {
                    boostType: 'Big Pads',
                    value: 36,
                    label: '36',
                    fill: 'var(--color-bigBoost)',
                  },
                ]}
                layout='vertical'
                barSize={32}
                barGap={2}
              >
                <XAxis type='number' dataKey='value' hide />
                <YAxis dataKey='boostType' type='category' tickLine={false} tickMargin={4} axisLine={false} className='capitalize' />
                <Bar dataKey='value' radius={5}>
                  <LabelList position='insideLeft' dataKey='label' fill='white' offset={8} fontSize={12} />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className='flex flex-row border-t p-4'>
            <div className='flex w-full items-center gap-2'>
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-xs text-muted-foreground'>Small</div>
                <div className='flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none'>
                  15
                  <span className='text-sm font-normal text-muted-foreground'>per match</span>
                </div>
              </div>
              <Separator orientation='vertical' className='mx-2 h-10 w-px' />
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-xs text-muted-foreground'>Big</div>
                <div className='flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none'>
                  7<span className='text-sm font-normal text-muted-foreground'>per match</span>
                </div>
              </div>
            </div>
          </CardFooter>
        </Card>
        {/* Total Boost Collected (Active Energy equivalent) */}
        <Card className='max-w-xs'>
          <CardHeader className='p-4 pb-0'>
            <CardTitle>Boost Collected</CardTitle>
            <CardDescription>You're collecting an average of 234 boost per match. Great work!</CardDescription>
          </CardHeader>
          <CardContent className='flex flex-row items-baseline gap-4 p-4 pt-2'>
            <div className='flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none'>
              234
              <span className='text-sm font-normal text-muted-foreground'>boosts/match</span>
            </div>
            <ChartContainer
              config={{
                boost: {
                  label: 'Boost',
                  color: 'hsl(var(--chart-1))',
                },
              }}
              className='ml-auto w-[64px]'
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
                data={[
                  {
                    date: 'Game 1',
                    boost: 290,
                  },
                  {
                    date: 'Game 2',
                    boost: 167,
                  },
                  {
                    date: 'Game 3',
                    boost: 245,
                  },
                  {
                    date: 'Game 4',
                    boost: 200,
                  },
                  {
                    date: 'Game 5',
                    boost: 270,
                  },
                ]}
              >
                <Bar dataKey='boost' fill='var(--color-boost)' radius={2} fillOpacity={0.2} activeIndex={6} activeBar={<Rectangle fillOpacity={0.8} />} />
                <XAxis dataKey='date' tickLine={false} axisLine={false} tickMargin={4} hide />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
      <div className='grid w-full flex-1 gap-6'>
        {/* Time in Offensive, Neutral, Defensive Zones */}
        <Card className='max-w-xs'>
          <CardContent className='flex gap-4 p-4'>
            <div className='grid items-center gap-2'>
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-sm text-muted-foreground'>Offensive Zone</div>
                <div className='flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none'>45%</div>
              </div>
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-sm text-muted-foreground'>Neutral Zone</div>
                <div className='flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none'>30%</div>
              </div>
              <div className='grid flex-1 auto-rows-min gap-0.5'>
                <div className='text-sm text-muted-foreground'>Defensive Zone</div>
                <div className='flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none'>25%</div>
              </div>
            </div>
            <ChartContainer
              config={{
                offense: {
                  label: 'Offensive Zone',
                  color: 'hsl(var(--chart-1))',
                },
                neutral: {
                  label: 'Neutral Zone',
                  color: 'hsl(var(--chart-2))',
                },
                defense: {
                  label: 'Defensive Zone',
                  color: 'hsl(var(--chart-3))',
                },
              }}
              className='mx-auto aspect-square w-full max-w-[80%]'
            >
              <RadialBarChart
                margin={{
                  left: -10,
                  right: -10,
                  top: -10,
                  bottom: -10,
                }}
                data={[
                  {
                    zone: 'Offensive',
                    value: 45,
                    fill: 'var(--color-offense)',
                  },
                  {
                    zone: 'Neutral',
                    value: 30,
                    fill: 'var(--color-neutral)',
                  },
                  {
                    zone: 'Defensive',
                    value: 25,
                    fill: 'var(--color-defense)',
                  },
                ]}
                innerRadius='20%'
                barSize={24}
                startAngle={90}
                endAngle={450}
              >
                <PolarAngleAxis type='number' domain={[0, 100]} dataKey='value' tick={false} />
                <RadialBar dataKey='value' background cornerRadius={5} />
              </RadialBarChart>
            </ChartContainer>
          </CardContent>
        </Card>
        {/* Time Spent in Proximity of Ball (Time in Bed equivalent) */}
        <Card className='max-w-xs'>
          <CardHeader className='space-y-0 pb-0'>
            <CardDescription>Time in Proximity of Ball</CardDescription>
            <CardTitle className='flex items-baseline gap-1 text-4xl tabular-nums'>
              17<span className='font-sans text-sm font-normal tracking-normal text-muted-foreground'>%</span>
            </CardTitle>
          </CardHeader>
          <CardContent className='p-0'>
            <ChartContainer
              config={{
                time: {
                  label: 'Time',
                  color: 'hsl(var(--chart-2))',
                },
              }}
            >
              <AreaChart
                accessibilityLayer
                data={[
                  {
                    date: 'Game 1',
                    time: 15,
                  },
                  {
                    date: 'Game 2',
                    time: 22,
                  },
                  {
                    date: 'Game 3',
                    time: 17,
                  },
                  {
                    date: 'Game 4',
                    time: 20,
                  },
                  {
                    date: 'Game 5',
                    time: 21,
                  },
                ]}
                margin={{
                  left: 0,
                  right: 0,
                  top: 0,
                  bottom: 0,
                }}
              >
                <XAxis dataKey='date' hide />
                <YAxis domain={['dataMin - 1', 'dataMax + 1']} hide />
                <defs>
                  <linearGradient id='fillTime' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='var(--color-time)' stopOpacity={0.8} />
                    <stop offset='95%' stopColor='var(--color-time)' stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <Area dataKey='time' type='natural' fill='url(#fillTime)' fillOpacity={0.4} stroke='var(--color-time)' />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                  formatter={(value) => (
                    <div className='flex min-w-[120px] items-center text-xs text-muted-foreground'>
                      Time near ball
                      <div className='ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground'>
                        {value}
                        <span className='font-normal text-muted-foreground'>%</span>
                      </div>
                    </div>
                  )}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
