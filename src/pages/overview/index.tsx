import { Layout } from '@/components/custom/layout'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { PieGraph } from '@/components/charts/pie-graph'
import { AreaGraph } from '@/components/charts/area-graph'

import ChatComponent from '../../components/custom/chatbox'
import { LineGraph } from '@/components/charts/line-graph'
import { RadialGraphComponent } from '@/components/charts/radial-graph-text'
import useGameStore from '@/store/useGameStore'
import { LayoutHeaderWithTabs } from '@/components/custom/layout-header-with-tabs'
import { BarGraphMultipleComponent } from '@/components/charts/bar-graph-multiple'
import { RadialChartMultiple } from '@/components/charts/radial-chart-label'

export const chartData = Array.from({ length: 12 }, (_, i) => ({
  game: `Game ${i + 1}`,
  avg_speed: Math.floor(1000 + i * 6 + Math.random() * 100),
}))
const filterStages = [1, 5, 10, 25, 50, 100] // You can adjust this list as needed

export default function Overview() {
  const gamesPlayed = chartData.length // Number of games played
  const { selectedGames } = useGameStore()

  // const [selectedTab, setSelectedTab] = useState('last_game')

  // const filteredData = chartData.slice(-selectedGames)

  const availableFilters = filterStages.filter((stage) => gamesPlayed >= stage)
  // const nextUnlockStage = filterStages.find((stage) => gamesPlayed < stage)

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeaderWithTabs sticky />

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 '>
          <Card className='mb-2 flex flex-col justify-start p-2'>
            <CardHeader className='text-3xl font-semibold'>Match Grade</CardHeader>
            <CardContent className='new-amsterdam-regular text-5xl text-red-600'>TOUGH LOSS</CardContent>
            <CardFooter>You lost the match but weren't trailing for long.</CardFooter>
          </Card>
          <Card className='mb-2 flex flex-col justify-start p-2'>
            <CardHeader className='text-3xl font-semibold'>Biggest Win</CardHeader>

            <CardContent className='new-amsterdam-regular space-y-4 text-5xl '>
              <div className='text-green-600'>Aerials</div>
              <BarGraphMultipleComponent />
            </CardContent>

            {/* <CardFooter className='flex-col items-start gap-2 text-sm'>
              <div className='leading-none text-muted-foreground'>Rank average: 13%</div>
            </CardFooter> */}
          </Card>
          <Card className='mb-2 flex flex-col justify-start p-2'>
            <CardHeader className='text-3xl font-semibold'>Area of Improvement</CardHeader>
            <CardContent className='new-amsterdam-regular space-y-4 text-5xl '>
              <div className='text-green-600'>Positioning</div>
              <RadialChartMultiple />
            </CardContent>

            {/* <CardFooter className='text-blue-300'>Rank Average: 21%</CardFooter> */}
          </Card>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <Card className='col-span-1 lg:col-span-4'>
            <CardHeader className='text-3xl font-semibold'>Coach's Analysis</CardHeader>
            <CardContent className='space-y-4'>
              <p>
                You played a great game out there, but looks like you let the defense slip around the
                <strong> 3:30 </strong> mark of the game.
              </p>
              <p>
                Your <strong>POSITIONING</strong> needs some work. Later on in the game, both you and your teammate tended to spend less time in the defensive zone, leaving your net vulnerable.
              </p>
              <p>
                You're doing a great job with <strong>AERIALS</strong>. Your time spent high in the air is
                <strong className='text-green-500'> 5% </strong> higher than the average player at the platinum rank.
              </p>
              <p>Take a look through each of the analytics categories to get more detailed results, and don't forget to ask me questions so I can help you rank up!</p>
            </CardContent>
            {/* <BarGraph /> */}
          </Card>
          <Card className='col-span-1 lg:col-span-3'>
            <CardHeader>
              <CardTitle>Chat with Mansell</CardTitle>
              <CardDescription>Ask questions to understand your playstyle.</CardDescription>
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
            <LineGraph selectedGames={selectedGames} />
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
