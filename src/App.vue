<template>
    <SpeedInsights />
    <Analytics />
    <Suspense>
        <RouterView class="h-full w-full max-w-screen" />
    </Suspense>
    <Footer />
    <navBar class="left-1/2 -translate-x-1/2 w-fit bottom-2 fixed" />
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
import { Analytics } from '@vercel/analytics/vue';
import Footer from "@Layouts/footer.vue"
import navBar from "@Layouts/navBar.vue"
</script>