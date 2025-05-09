<template>
    <SpeedInsights />
    <slot />
    <Footer />
    <navBar class="left-1/2 -translate-x-1/2 w-fit bottom-2 fixed" />
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>
