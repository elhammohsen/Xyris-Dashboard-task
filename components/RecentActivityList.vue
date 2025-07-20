<template>
  <Card>
    <CardHeader>
      <CardTitle>Recent Activity</CardTitle>
      <CardDescription>Your latest actions and updates</CardDescription>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        <div
          v-for="activity in activitiesData"
          :key="activity.id"
          class="flex items-start gap-4 pb-4 last:pb-0 last:border-0 border-b"
        >
          <!-- Activity icon -->
          <div :class="[
            'rounded-full p-2',
            activity.type === 'user' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
            activity.type === 'system' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
            'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
          ]">
            <component :is="activity.icon" class="h-4 w-4" />
          </div>
          
          <!-- Activity content -->
          <div class="flex-1 space-y-1">
            <p class="text-sm font-medium">{{ activity.title }}</p>
            <p class="text-sm text-muted-foreground">{{ activity.description }}</p>
            <p class="text-xs text-muted-foreground">{{ formatTime(activity.timestamp) }}</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { activitiesData, formatTime } from '~/data/activities'
</script> 