<template>
  <div class="min-h-screen bg-background">
    <div class="relative flex h-screen overflow-hidden">
      <!-- Sidebar -->
      <DashboardSidebar
        :is-open="isSidebarOpen"
        @close="isSidebarOpen = false"
        @open-settings="isSettingsOpen = true"
      />
      
      <!-- Main content area -->
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <!-- Header -->
        <DashboardHeader @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />
        
        <!-- Page content -->
        <main class="flex-1 overflow-y-auto p-6">
          <div class="mx-auto max-w-7xl">
            <slot />
          </div>
        </main>
      </div>
    </div>
    
    <!-- Settings Modal -->
    <SettingsModal
      :open="isSettingsOpen"
      @update:open="isSettingsOpen = $event"
      @save="handleSettingsSave"
    />
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from '~/components/DashboardHeader.vue'
import DashboardSidebar from '~/components/DashboardSidebar.vue'
import SettingsModal from '~/components/SettingsModal.vue'

const isSidebarOpen = ref(false)
const isSettingsOpen = ref(false)

const handleSettingsSave = (data: any) => {
  console.log('Settings saved:', data)
}

const route = useRoute()
watch(() => route.path, () => {
  isSidebarOpen.value = false
})
</script> 