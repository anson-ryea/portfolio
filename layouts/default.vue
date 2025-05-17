<template>
    <SpeedInsights />
    <slot />
    <Footer />
    <NavBar class="fixed left-1/2 -translate-x-1/2 w-95/100 md:w-fit bottom-2 " />
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>
