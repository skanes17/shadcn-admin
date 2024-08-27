import { Layout } from '@/components/custom/layout'
import { Button } from '@/components/custom/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Search } from '@/components/search'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ThemeSwitch from '@/components/theme-switch'
import { TopNav } from '@/components/top-nav'
import { UserNav } from '@/components/user-nav'

import { BarGraph } from '@/components/charts/bar-graph'
import { PieGraph } from '@/components/charts/pie-graph'
import { AreaGraph } from '@/components/charts/area-graph'

import ChatComponent from '../../components/custom/chatbox'
import { LineGraph } from '@/components/charts/line-graph'
import { playerMetrics } from '@/data/playerMetrics'
import { RadialGraphComponent } from '@/components/charts/radial-graph-text'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import { useGamesFilterStore } from './gamesFilterState'
import { Rocket } from 'lucide-react'

export const chartData = Array.from({ length: 12 }, (_, i) => ({
  game: `Game ${i + 1}`,
  avg_speed: Math.floor(1000 + i * 6 + Math.random() * 100),
}))
const filterStages = [1, 5, 10, 25, 50, 100] // You can adjust this list as needed

export default function Overview() {
  const gamesPlayed = chartData.length // Number of games played
  const { selectedGames, setSelectedGames } = useGamesFilterStore() // ! use zustand to carry context

  // const filteredData = chartData.slice(-selectedGames)

  const availableFilters = filterStages.filter((stage) => gamesPlayed >= stage)
  // const nextUnlockStage = filterStages.find((stage) => gamesPlayed < stage)

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        {/* <TopNav links={topNav} /> */}
        <div className='ml-auto flex items-center justify-end space-x-4'>
          <Select onValueChange={(value) => setSelectedGames(Number(value))}>
            <SelectTrigger className='w-[300px]'>
              <SelectValue placeholder='Select replays to analyze' />
            </SelectTrigger>
            <SelectContent>
              {availableFilters.map((filter) => (
                <SelectItem key={filter} value={filter.toString()}>
                  {filter === 1 ? 'Last Game' : `Last ${filter} Games`}
                </SelectItem>
              ))}
              <SelectItem value={gamesPlayed.toString()}>All Games</SelectItem>

              {/* {nextUnlockStage && (
                  <SelectItem disabled value='disabled'>
                    Play {nextUnlockStage - gamesPlayed} more game
                    {nextUnlockStage - gamesPlayed === 1 ? '' : 'es'} to
                    unlock deeper insights!
                  </SelectItem>
                )} */}
            </SelectContent>
          </Select>
          {/* <Search /> */}
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 '>
          <Card className='mb-2 flex flex-col justify-start p-2'>
            <CardHeader className='text-2xl font-semibold'>
              Match Grade
            </CardHeader>
            <CardContent className='text-5xl text-red-600'>
              TOUGH LOSS
            </CardContent>
            <CardFooter>
              You lost the match but weren't trailing for long.
            </CardFooter>
          </Card>
          <Card className='mb-2 flex flex-col justify-start p-2'>
            <CardHeader className='text-2xl font-semibold'>
              Biggest Win
            </CardHeader>
            <CardContent className='text-5xl text-green-600'>
              Aerials 18%
            </CardContent>
            <CardFooter className='text-blue-300'>Rank Average: 13%</CardFooter>
          </Card>
          <Card className='mb-2 flex flex-col justify-start p-2'>
            <CardHeader className='text-2xl font-semibold'>
              Area of Improvement
            </CardHeader>
            <CardContent className='text-5xl text-green-600'>
              Positioning 10%
            </CardContent>
            <CardFooter className='text-blue-300'>Rank Average: 21%</CardFooter>
          </Card>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <Card className='col-span-1 lg:col-span-4'>
            <CardHeader className='text-2xl font-semibold'>
              Coach's Analysis
            </CardHeader>
            <CardContent className='space-y-4'>
              <p>
                You played a great game out there, but looks like you let the
                defense slip around the
                <strong> 3:30 </strong> mark of the game.
              </p>
              <p>
                Your <strong>POSITIONING</strong> needs some work. Later on in
                the game, both you and your teammate tended to spend less time
                in the defensive zone, leaving your net vulnerable.
              </p>
              <p>
                You're doing a great job with <strong>AERIALS</strong>. Your
                time spent high in the air is
                <strong className='text-green-500'> 5% </strong> higher than the
                average player at the platinum rank.
              </p>
              <p>
                Take a look through each of the analytics categories to get more
                detailed results, and don't forget to ask me questions so I can
                help you rank up!
              </p>
            </CardContent>
            {/* <BarGraph /> */}
          </Card>
          <Card className='col-span-1 lg:col-span-3'>
            <CardHeader>
              <CardTitle>Chat with Mansell</CardTitle>
              <CardDescription>
                Ask questions to understand your playstyle.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* <RecentSales /> */}
              <ChatComponent />
            </CardContent>
          </Card>
          <div className='col-span-1 lg:col-span-4'>
            <AreaGraph />
          </div>
          <div className='col-span-1 lg:col-span-3'>
            <PieGraph />
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <LineGraph />
          </div>
          <div className='col-span-1 lg:col-span-3'>
            <RadialGraphComponent />
          </div>
        </div>
      </Layout.Body>
    </Layout>
  )
}

const topNav = [
  {
    title: 'Overview',
    href: 'overview/overview',
    isActive: true,
  },
  {
    title: 'Customers',
    href: 'overview/customers',
    isActive: false,
  },
  {
    title: 'Products',
    href: 'overview/products',
    isActive: false,
  },
  {
    title: 'Settings',
    href: 'overview/settings',
    isActive: false,
  },
]
