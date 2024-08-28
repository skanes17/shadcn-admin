// src/components/custom/header-with-tabs.tsx
import * as React from 'react'
import { Layout } from './layout'
import GlobalTabs from '../global-tabs'
import ThemeSwitch from '../theme-switch'
import { UserNav } from '../user-nav'

interface LayoutHeaderWithTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  sticky?: boolean
}

const LayoutHeaderWithTabs = React.forwardRef<HTMLDivElement, LayoutHeaderWithTabsProps>(({ className, sticky, ...props }, ref) => {
  return (
    <Layout.Header ref={ref} sticky={sticky} className={className} {...props}>
      <GlobalTabs />
      <div className='ml-auto flex items-center justify-end space-x-4'>
        <ThemeSwitch />
        <UserNav />
      </div>
    </Layout.Header>
  )
})

LayoutHeaderWithTabs.displayName = 'HeaderWithTabs'

export { LayoutHeaderWithTabs as LayoutHeaderWithTabs }
