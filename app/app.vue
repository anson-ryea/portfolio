<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  ogSiteName: "www.an5on.com",
  ogTitle: "Anson Ng",
  description:
    "Anson Ng is a dedicated BSc Computer Science student at CUHK. Focuses on Programming Languages, particularly Type Systems and Language Features.",
  ogDescription:
    "Anson Ng is a dedicated BSc Computer Science student at CUHK. Focuses on Programming Languages, particularly Type Systems and Language Features.",
});

if (import.meta.server) {
  const runtimeConfig = useRuntimeConfig();
  const originTrailHeader = useResponseHeader("Origin-Trail");
  originTrailHeader.value = String(runtimeConfig.originTrail ?? "");
}
</script>
