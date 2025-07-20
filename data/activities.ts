import { UserPlus, Settings, FileText, Bell, Shield } from 'lucide-vue-next'

export interface Activity {
  id: number
  type: 'user' | 'system' | 'general'
  icon: any
  title: string
  description: string
  timestamp: Date
}

export const activitiesData: Activity[] = [
  {
    id: 1,
    type: 'user',
    icon: UserPlus,
    title: 'New user registered',
    description: 'John Doe created an account',
    timestamp: new Date(Date.now() - 1000 * 60 * 15), 
  },
  {
    id: 2,
    type: 'system',
    icon: Shield,
    title: 'Security update',
    description: 'System security patches applied successfully',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), 
  },
  {
    id: 3,
    type: 'general',
    icon: FileText,
    title: 'Report generated',
    description: 'Monthly sales report is ready for review',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
  },
  {
    id: 4,
    type: 'user',
    icon: Settings,
    title: 'Settings updated',
    description: 'Email notification preferences changed',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
  },
  {
    id: 5,
    type: 'system',
    icon: Bell,
    title: 'Scheduled maintenance',
    description: 'System maintenance completed successfully',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
  },
]

export const formatTime = (date: Date) => {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  
  const minutes = Math.floor(diff / (1000 * 60))
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  
  if (minutes < 60) {
    return `${minutes} minutes ago`
  } else if (hours < 24) {
    return `${hours} hours ago`
  } else {
    return `${days} days ago`
  }
} 