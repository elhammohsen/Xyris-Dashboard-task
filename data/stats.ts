export interface StatsData {
  title: string
  value: string | number
  trend: {
    type: 'increase' | 'decrease'
    value: string
    period: string
  }
}

export const statsData: StatsData[] = [
  {
    title: 'Total Users',
    value: '2,847',
    trend: {
      type: 'increase',
      value: '+12.5%',
      period: 'month'
    }
  },
  {
    title: 'Active Users',
    value: '1,394',
    trend: {
      type: 'increase',
      value: '+5.2%',
      period: 'week'
    }
  },
  {
    title: 'Revenue',
    value: '$45,231',
    trend: {
      type: 'increase',
      value: '+23.1%',
      period: 'month'
    }
  },
  {
    title: 'Conversion Rate',
    value: '3.24%',
    trend: {
      type: 'decrease',
      value: '-2.4%',
      period: 'month'
    }
  }
] 