export interface ChartConfig {
  title: string
  description: string
}

export const dashboardCharts: ChartConfig[] = [
  {
    title: 'Revenue Overview',
    description: 'Monthly revenue for the last 12 months'
  }
]

export const reportsCharts: ChartConfig[] = [
  {
    title: 'Sales Report',
    description: 'Quarterly sales performance'
  },
  {
    title: 'User Growth',
    description: 'New user registrations over time'
  },
  {
    title: 'Product Performance',
    description: 'Top performing products by revenue'
  },
  {
    title: 'Geographic Distribution',
    description: 'User distribution by region'
  }
] 