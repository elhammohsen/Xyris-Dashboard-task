<template>
  <div>
    <!-- Page Title -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold">Dashboard</h1>
      <p class="text-muted-foreground">Welcome back! Here's an overview of your data.</p>
    </div>
    
    <!-- Stats Cards Grid -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      <StatsCard
        v-for="stat in statsData"
        :key="stat.title"
        :title="stat.title"
        :value="stat.value"
        :trend="stat.trend"
      />
    </div>
    
    <!-- Chart and Activity Grid -->
    <div class="grid gap-6 lg:grid-cols-3">
      <!-- Chart -->
      <div class="lg:col-span-2">
        <ChartPlaceholder
          :title="dashboardCharts[0]?.title || 'Chart'"
          :description="dashboardCharts[0]?.description || 'Chart description'"
        />
      </div>
      
      <!-- Recent Activity -->
      <div class="lg:col-span-1">
        <RecentActivityList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StatsCard from '~/components/StatsCard.vue'
import ChartPlaceholder from '~/components/ChartPlaceholder.vue'
import RecentActivityList from '~/components/RecentActivityList.vue'
import { statsData } from '~/data/stats'
import { dashboardCharts } from '~/data/charts'
</script> 