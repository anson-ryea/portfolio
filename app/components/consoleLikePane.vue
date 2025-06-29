<template>
  <div class="flex flex-col justify-between space-y-4">
    <slot />
    <div
      class="flex justify-between border-b border-gray-300 font-mono text-xs sm:text-sm text-gray-400 pb-1"
    >
      <p>
        @{{ $t("info.url") }}:~/<span
          class="text-blue-400 font-medium"
        >{{ paneName }}</span>
      </p>
      <div>
        <slot name="right-info" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
    paneName: String,
})
</script>
