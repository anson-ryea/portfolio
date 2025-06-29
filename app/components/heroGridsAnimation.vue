<template>
  <div class="grid grid-cols-10 h-dvh w-full">
    <motion.div
      v-for="i in 100"
      :key="i"
      class="bg-blue-600 border border-blue-900 rounded flex-1"
      :initial="{ opacity: 0.85, filter: `brightness(${(i % 7 * 5 + 30) / 100})` }"
      :animate="{ opacity: 0, filter: `brightness(1)`, transition: { delay: ((i - 1) % 10 - (i - 1) / 10 + 10) * 0.03 } }"
      :while-hover="{ opacity: 0.5 }"
    />
  </div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v'
</script>
