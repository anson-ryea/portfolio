<template>
  <div class="relative p-4 sm:p-8  max-w-full overflow-x-clip md:overflow-x-visible">
    <div class="absolute rounded-full bg-blue-700 h-2 w-2 inline-block -left-1 -top-1" />
    <div class="absolute rounded-full bg-blue-700 h-2 w-2 inline-block -right-1 -top-1" />
    <slot />
  </div>
</template>

<script setup lang="ts"></script>
