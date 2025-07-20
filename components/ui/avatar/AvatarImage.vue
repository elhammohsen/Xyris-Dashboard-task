<template>
  <img
    v-if="!error"
    :src="src"
    :alt="alt"
    @error="handleError"
    :class="cn('aspect-square h-full w-full', $attrs.class ?? '')"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '~/lib/utils'

interface Props {
  src?: string
  alt?: string
}

defineProps<Props>()
const error = ref(false)

const handleError = () => {
  error.value = true
}
</script> 