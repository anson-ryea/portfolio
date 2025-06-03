<template>
    <Analytics />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
    <Footer />
    <NavBar class="fixed bottom-2 left-1/2 -translate-x-1/2 w-95/100 md:w-fit z-100" />
    <CursorAnimated class="fixed top-0 z-9999 w-fit [@media(hover:none)]:hidden" />
</template>

<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";
</script>
