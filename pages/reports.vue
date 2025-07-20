<template>
  <div>
    <!-- Page Title -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold">Reports</h1>
      <p class="text-muted-foreground">View and analyze your detailed reports</p>
    </div>
    
    <!-- Reports Grid -->
    <div class="grid gap-6 md:grid-cols-2">
      <ChartPlaceholder
        v-for="chart in reportsCharts"
        :key="chart.title"
        :title="chart.title"
        :description="chart.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChartPlaceholder from '~/components/ChartPlaceholder.vue'
import { reportsCharts } from '~/data/charts'
</script> 