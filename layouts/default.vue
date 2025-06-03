<template>
    <SpeedInsights />
    <slot />
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>
