<template>
  <header class="sticky top-0 z-40 w-full border-b bg-background">
    <div class="flex h-16 items-center justify-between px-4 sm:px-6">
      <!-- Left side: Logo and mobile menu button -->
      <div class="flex items-center gap-4">
        <!-- Mobile menu button -->
        <Button
          variant="ghost"
          size="icon"
          class="lg:hidden"
          @click="$emit('toggle-sidebar')"
        >
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle sidebar</span>
        </Button>

        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="h-8 w-8 rounded bg-primary flex items-center justify-center">
            <span class="text-primary-foreground font-bold text-lg">D</span>
          </div>
          <span class="font-semibold text-lg hidden sm:block">Dashboard</span>
        </div>
      </div>

      <!-- Right side: Dark mode toggle and user avatar -->
      <div class="flex items-center gap-4">
        <!-- Dark mode toggle -->
        <Button
          variant="ghost"
          size="icon"
          @click="toggleColorMode"
        >
          <Sun v-if="colorMode.value === 'dark'" class="h-5 w-5" />
          <Moon v-else class="h-5 w-5" />
          <span class="sr-only">Toggle theme</span>
        </Button>

        <!-- User avatar -->
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu, Sun, Moon } from 'lucide-vue-next'
import { Button } from '~/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'

defineEmits<{
  'toggle-sidebar': []
}>()

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script> 