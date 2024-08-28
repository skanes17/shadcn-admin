import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { TopNav } from '@/components/top-nav'
import { UserNav } from '@/components/user-nav'

import { AreaGraph } from '@/components/charts/area-graph'
import { MainLayout } from '@/components/custom/main-layout'
import { LayoutHeaderWithTabs } from '@/components/custom/layout-header-with-tabs'

export default function Positioning() {
  return (
    <MainLayout>
      {/* ===== Top Heading ===== */}
      <LayoutHeaderWithTabs sticky />

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <div className='col-span-1 lg:col-span-7'>
            <AreaGraph />
          </div>
        </div>
        {/* </TabsContent>
        </Tabs> */}
      </Layout.Body>
    </MainLayout>
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
