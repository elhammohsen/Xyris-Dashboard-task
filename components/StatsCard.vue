<template>
  <Card>
    <CardHeader class="pb-2">
      <CardTitle class="text-sm font-medium text-muted-foreground">
        {{ title }}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div class="text-2xl font-bold">{{ value }}</div>
      <p class="text-xs mt-1">
        <span :class="[
          'inline-flex items-center',
          trend.type === 'increase' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        ]">
          <TrendingUp v-if="trend.type === 'increase'" class="h-3 w-3 mr-1" />
          <TrendingDown v-else class="h-3 w-3 mr-1" />
          {{ trend.value }}
        </span>
        from last {{ trend.period }}
      </p>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { TrendingUp, TrendingDown } from 'lucide-vue-next'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'

interface Props {
  title: string
  value: string | number
  trend: {
    type: 'increase' | 'decrease'
    value: string
    period: string
  }
}

defineProps<Props>()
</script> 