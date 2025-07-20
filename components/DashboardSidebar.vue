<template>
  <div>
    <!-- Mobile sidebar overlay -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-black/50 lg:hidden"
        @click="$emit('close')"
      />
    </Transition>

    <!-- Sidebar -->
    <aside
      :class="cn(
        'h-screen w-64 bg-card border-r',
        'fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 lg:relative lg:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )"
    >
      <div class="flex h-full flex-col">
        <!-- Sidebar header -->
        <div class="flex h-16 items-center justify-between px-6 border-b">
          <span class="text-lg font-semibold">Navigation</span>
          <Button
            variant="ghost"
            size="icon"
            class="lg:hidden"
            @click="$emit('close')"
          >
            <X class="h-4 w-4" />
          </Button>
        </div>

        <!-- Navigation items -->
        <nav class="flex-1 space-y-1 p-4">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.href"
            :class="cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all',
              isActive(item.href)
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )"
            @click="$emit('close')"
          >
            <component :is="item.icon" class="h-4 w-4" />
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- Settings button -->
        <div class="border-t p-4">
          <button
            @click="handleSettingsClick"
            :class="cn(
              'flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all',
              'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            )"
          >
            <Settings class="h-4 w-4" />
            Settings
          </button>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { Home, FileText, Settings, X } from 'lucide-vue-next'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

interface Props {
  isOpen: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  close: []
  'open-settings': []
}>()

const route = useRoute()

const navigationItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Reports', href: '/reports', icon: FileText },
]

const isActive = (href: string) => {
  return route.path === href
}

const handleSettingsClick = () => {
  emit('close')
  emit('open-settings')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 