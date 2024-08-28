// src/components/GlobalTabs.js
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'
import useGameStore from '@/store/useGameStore'

const Tabs = TabsPrimitive.Root
const TabsList = TabsPrimitive.List
const TabsTrigger = TabsPrimitive.Trigger

const GlobalTabs = () => {
  const { selectedGames, setSelectedGames } = useGameStore()

  const handleTabChange = (value) => {
    const gamesMap = {
      last_game: 1,
      last_5: 5,
      last_10: 10,
      last_25: 25,
      last_50: 50,
    }
    setSelectedGames(gamesMap[value])
  }

  return (
    <Tabs defaultValue='last_game' onValueChange={handleTabChange}>
      <TabsList className={cn('inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground')}>
        <TabsTrigger
          value='last_game'
          className={cn(
            'font-lg inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow'
          )}
        >
          Last Game
        </TabsTrigger>
        <TabsTrigger
          value='last_5'
          className={cn(
            'font-lg inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow'
          )}
        >
          Last 5 Games
        </TabsTrigger>
        <TabsTrigger
          value='last_10'
          className={cn(
            'font-lg inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow'
          )}
        >
          Last 10 Games
        </TabsTrigger>
        <TabsTrigger
          value='last_25'
          className={cn(
            'font-lg inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow'
          )}
        >
          Last 25 Games
        </TabsTrigger>
        <TabsTrigger
          value='last_50'
          className={cn(
            'font-lg inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow'
          )}
        >
          Last 50 Games
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export default GlobalTabs
