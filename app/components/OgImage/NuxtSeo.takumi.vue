<template>
  <div class="w-full h-full relative text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
    <!-- Background -->
    <NuxtImg class="absolute w-full h-full object-cover object-right" src="/index/hero.webp" />
    <div class="absolute bottom-16 left-8">
      <NuxtImg class="h-16 md:h-24 lg:h-32" src="/info/signature.svg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  colorMode: { type: String, required: false, default: "light" },
  title: { type: String, required: false, default: "title" },
  description: { type: String, required: false },
  isPro: { type: Boolean, required: false },
});
const themeColor = computed(() => (props.isPro ? "124, 58, 237" : "34, 197, 94"));
</script>
