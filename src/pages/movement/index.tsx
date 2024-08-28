import { Layout } from '@/components/custom/layout'

import { BarGraph } from '@/components/charts/bar-graph'
import { LayoutHeaderWithTabs } from '@/components/custom/layout-header-with-tabs'
import { ChartsGrid } from '@/components/charts/charts-grid'

export default function Movement() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeaderWithTabs sticky />

      {/* ===== Main ===== */}
      <Layout.Body>
        <ChartsGrid />
      </Layout.Body>
    </Layout>
  )
}
