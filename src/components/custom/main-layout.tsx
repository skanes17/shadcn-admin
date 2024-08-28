// src/components/custom/main-layout.tsx
import * as React from 'react'
import { Layout } from './layout'
import GlobalTabs from '../global-tabs'

interface MainLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  fixed?: boolean
}

const MainLayout = ({ className, fixed = false, ...props }: MainLayoutProps) => {
  return (
    <Layout fixed={fixed} className={className} {...props}>
      <Layout.Header sticky>
        <GlobalTabs />
      </Layout.Header>
      <Layout.Body>{props.children}</Layout.Body>
    </Layout>
  )
}

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  sticky?: boolean
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(({ className, sticky, ...props }, ref) => {
  return <Layout.Header ref={ref} sticky={sticky} className={className} {...props} />
})
Header.displayName = 'Header'

const Body = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  return <Layout.Body ref={ref} className={className} {...props} />
})
Body.displayName = 'Body'

MainLayout.Header = Header
MainLayout.Body = Body

export { MainLayout }
