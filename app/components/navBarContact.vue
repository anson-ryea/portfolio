<template>
  <div class="border border-gray-300 rounded-t bg-gray-100/60 backdrop-blur-sm shadow px-2 py-2 font-medium">
    <div
      class="grid grid-cols-6 font-mono text-sm text-gray-600 gap-1"
      name="fade"
    >
      <NuxtLink
        key="email"
        :to="`mailto:${$t('info.emailAddress')}`"
        external
        class="flex items-center gap-2 col-span-3 w-full justify-center btn-light px-2 py-1"
      >
        {{ $t('info.emailAddress') }}
        <Icon
          name="solar:plain-2-line-duotone"
          class="h-4 w-4 bg-gray-600 pointer-events-none"
        />
      </NuxtLink>
      <NuxtLink
        :to="$t('info.githubUrl')"
        external
        class="flex items-center col-span-1 w-full btn-light justify-center px-2 py-1"
      >
        <Icon
          name="simple-icons:github"
          class="h-4 w-4 bg-gray-600 pointer-events-none"
        />
      </NuxtLink>
      <NuxtLink
        :to="$t('info.instagramUrl')"
        external
        class="flex items-center col-span-1 w-full btn-light justify-center px-2 py-1"
      >
        <Icon
          name="simple-icons:instagram"
          class="h-4 w-4 bg-gray-600 pointer-events-none"
        />
      </NuxtLink>
      <NuxtLink
        :to="$t('info.linkedinUrl')"
        external
        class="flex items-center col-span-1 w-full btn-light justify-center px-2 py-1"
      >
        <Icon
          name="simple-icons:linkedin"
          class="h-4 w-4 bg-gray-600 pointer-events-none"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
