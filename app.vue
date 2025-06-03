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

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>
