import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { TopNav } from '@/components/top-nav'
import { UserNav } from '@/components/user-nav'

import { BarGraph } from '@/components/charts/bar-graph'


export default function Positioning() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center justify-end space-x-4'>
          <Search />
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        {/* <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          <div className='w-full overflow-x-auto pb-2'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='analytics'>Analytics</TabsTrigger>
              <TabsTrigger value='reports'>Reports</TabsTrigger>
              <TabsTrigger value='notifications'>Notifications</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value='overview' className='space-y-4'>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'></div> */}
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <div className='col-span-1 lg:col-span-7'>
            <BarGraph />
          </div>
        </div>
        {/* </TabsContent>
        </Tabs> */}
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
