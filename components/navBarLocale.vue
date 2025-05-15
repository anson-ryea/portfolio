<template>
  <div class="border border-gray-300 rounded-t bg-gray-100/60 backdrop-blur-sm shadow px-2 py-2 font-medium">
    <div class="flex font-mono text-sm text-gray-600 gap-1" name="fade">
      <SwitchLocalePathLink v-for="locale in locales" :key="locale.code" :locale="locale.code"
        :class="{ 'border-blue-600!': locale.code === currentLocale }"
        class="flex-1 flex items-center gap-2 col-span-3 w-full justify-center btn-light px-2 py-1 capitalize">
        {{ locale.name }} <span class="text-gray-400"> / {{ $t(`locales.${locale.code}`) }}</span>
      </SwitchLocalePathLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { locale, locales } = useI18n()

const currentLocale = computed(() => locale.value)
</script>