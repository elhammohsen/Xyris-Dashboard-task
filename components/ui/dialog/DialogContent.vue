<template>
  <Teleport to="body">
    <Transition name="dialog">
      <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center">
        <!-- Overlay -->
        <div
          class="fixed inset-0 bg-black/50"
          @click="$emit('update:open', false)"
        />
        
        <!-- Dialog Content -->
        <div
          :class="cn(
            'relative z-50 grid w-full max-w-lg gap-4 rounded-lg border bg-background p-6 shadow-lg',
            $attrs.class ?? ''
          )"
        >
          <!-- Close button -->
          <button
            @click="$emit('update:open', false)"
            class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X class="h-4 w-4" />
            <span class="sr-only">Close</span>
          </button>
          
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, inject, ref, type Ref } from 'vue'
import { X } from 'lucide-vue-next'
import { cn } from '~/lib/utils'

interface Props {
  open?: boolean
}

defineProps<Props>()

defineEmits<{
  'update:open': [value: boolean]
}>()

const dialogOpen = inject<Ref<boolean>>('dialog-open', ref(false))
const open = computed(() => dialogOpen.value)
</script>

<style scoped>
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.2s ease;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}
</style> 