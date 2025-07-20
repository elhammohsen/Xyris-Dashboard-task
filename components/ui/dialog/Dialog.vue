<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, computed } from 'vue'

interface Props {
  open?: boolean
}

const props = defineProps<Props>()

provide('dialog-open', computed(() => props.open))
</script> 