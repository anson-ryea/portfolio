<template>
  <div>
    <SpeedInsights />
    <slot />
    <footer class="flex justify-around">
      <div
        class="flex flex-col md:mx-8 lg:mx-12 xl:mx-20 flex-1 bg-white border-x border-gray-300 border-dashed hover:border-solid divide-y divide-gray-300 divide-dashed"
      >
        <FooterSection class="flex justify-between items-center">
          <div>
            <h6 class="font-medium">
              {{ $t("footer.contact.title") }}
            </h6>
            <p class="font-medium text-gray-500">
              {{ $t("footer.contact.description") }}
            </p>
          </div>
          <NuxtLink
            :to="`mailto:${$t('info.emailAddress')}`"
            external
            class="flex btn-light items-center gap-2"
          >
            {{ $t("info.emailAddress") }}
            <Icon
              name="solar:plain-2-broken"
              class="h-4 w-4 bg-gray-600"
            />
          </NuxtLink>
        </FooterSection>
        <FooterSection>
          <NuxtImg
            class="mx-auto h-24 sm:h-36 md:h-56 invert brightness-10 mix-blend-multiply"
            src="info/signature.svg"
            :alt="$t('info.firstName') + $t('dictionary.logoAlt')"
          />
        </FooterSection>
        <FooterSection
          class="flex flex-col md:flex-row md:items-end md:justify-between text-gray-600 font-mono text-sm text-center pb-12"
        >
          <div class="md:text-left">
            <p class="capitalize">
              {{ $t("footer.version.majorLabel") }} {{ iteration }} {{ $t("footer.version.patchLabel") }} {{
                minor
              }}
            </p>
            <p>{{ $t("footer.copyright.description") }} {{ year }} {{ $t("info.url") }}</p>
          </div>
          <div class="md:text-right">
            <p>
              {{ $t("footer.copyright.madeWith") }} <span class="text-green-600">Nuxt</span> {{
                $t("dictionary.and") }}
              <span class="text-sky-400">Tailwind CSS</span>
            </p>
            <p>{{ $t("footer.copyright.credit") }}</p>
          </div>
        </FooterSection>
      </div>
    </footer>
    <NavBar class="fixed bottom-2 left-1/2 -translate-x-1/2 w-95/100 md:w-fit z-100" />
    <CursorAnimated class="fixed top-0 z-9999 w-fit [@media(hover:none)]:hidden" />
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue'

const runtimeConfig = useRuntimeConfig()
const version = runtimeConfig.public.__APP_VERSION__.split('.')
const iteration = version[0]
const minor = version.slice(1, 3).join('.')
const year = ref(new Date().getFullYear())
</script>
