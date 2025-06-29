<template>
  <div
    class="relative px-4 py-3 sm:px-8 w-full bg-white bg-linear-to-r from-transparent via-blue-100/40 to-transparent transition overflow-x-clip md:overflow-x-visible"
  >
    <div class="absolute rounded-full bg-gray-400 h-2 w-2 inline-block -left-1 -top-1" />
    <div class="absolute rounded-full bg-gray-400 h-2 w-2 inline-block -right-1 -top-1" />
    <slot />
  </div>
</template>

<script setup lang="ts"></script>
