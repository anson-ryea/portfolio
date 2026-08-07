<template>
  <div
    class="border border-gray-300 rounded-t bg-gray-100/60 backdrop-blur-sm shadow px-2 py-2 space-y-1 font-medium font-mono text-sm text-gray-600"
    name="fade"
  >
    <NuxtLink
      key="email"
      :to="`mailto:${$t('info.emailAddress')}`"
      external
      class="flex items-center gap-2 col-span-1 w-full justify-center btn-light px-2 py-1"
    >
      {{ $t("info.emailAddress") }}
      <Icon name="solar:plain-2-broken" class="h-4 w-4 bg-gray-600 pointer-events-none" />
    </NuxtLink>
    <NuxtLink
      key="email"
      :to="`mailto:${$t('info.academicEmailAddress')}`"
      external
      class="flex items-center gap-2 col-span-1 w-full justify-center btn-light px-2 py-1"
    >
      {{ $t("info.academicEmailAddress") }}
      <Icon
        name="solar:square-academic-cap-2-broken"
        class="h-4 w-4 bg-gray-600 pointer-events-none"
      />
    </NuxtLink>
    <div class="grid grid-cols-3 gap-1">
      <NuxtLink
        :to="$t('info.orcidUrl')"
        external
        class="flex items-center col-span-1 w-full btn-light justify-center px-2 py-1"
      >
        <Icon name="simple-icons:orcid" class="h-4 w-4 bg-gray-600 pointer-events-none" />
      </NuxtLink>
      <NuxtLink
        :to="$t('info.githubUrl')"
        external
        class="flex items-center col-span-1 w-full btn-light justify-center px-2 py-1"
      >
        <Icon name="simple-icons:github" class="h-4 w-4 bg-gray-600 pointer-events-none" />
      </NuxtLink>
      <NuxtLink
        :to="$t('info.linkedinUrl')"
        external
        class="flex items-center col-span-1 w-full btn-light justify-center px-2 py-1"
      >
        <Icon name="simple-icons:linkedin" class="h-4 w-4 bg-gray-600 pointer-events-none" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
