<template>
    <div
        class="flex items-center max-sm:justify-between max-sm:w-95/100 border border-gray-300 rounded bg-gray-100/55 backdrop-blur-sm px-4 text-shadow-2xl font-medium text-sm space-x-8 font-mono text-gray-600 p-1 h-8">
        <RouterLink to="/"><img src="/logo.svg" alt="Logo" class="h-10 w-10 items-center" /></RouterLink>
        <div class="flex flex-col items-center">
            <RouterLink to="/">Home</RouterLink>
            <div class="h-0.5 w-4 bg-blue-600 rounded invisible transition"
                :class="{ 'visible': currentRouteName === 'Index' }" />
        </div>
        <div class="flex flex-col items-center">
            <RouterLink to="/about">About</RouterLink>
            <div class="h-0.5 w-4 bg-blue-600 rounded invisible transition"
                :class="{ 'visible': currentRouteName === 'About' }" />
        </div>

    </div>


</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>