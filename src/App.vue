<template>
    <Suspense>
        <RouterView class="h-full w-full max-w-screen" />
    </Suspense>
    <Footer />
</template>

<script setup lang="ts">
import Footer from "@Layouts/footer.vue"
</script>