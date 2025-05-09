<template>
    <footer class="flex justify-around">
        <div
            class="flex flex-col md:mx-8 lg:mx-12 xl:mx-20 flex-1 bg-white border-x border-gray-300 border-dashed hover:border-solid divide-y divide-gray-300 divide-dashed"
        >
            <FooterSection class="flex justify-between items-center">
                <div>
                    <h6 class="font-semibold">Get in touch</h6>
                    <p class="font-medium text-gray-500">Send me an email.</p>
                </div>
                <NuxtLink
                    :to="`mailto:${$t('info.emailAddress')}`"
                    external
                    class="flex btn-light items-center gap-2"
                >
                    <Icon
                        name="solar:map-arrow-right-bold-duotone"
                        class="h-4 w-4 bg-gray-600"
                    />
                    {{ $t("info.emailAddress") }}
                </NuxtLink>
            </FooterSection>
            <FooterSection>
                <NuxtImg
                    class="mx-auto h-24 sm:h-36 md:h-56 invert brightness-10 mix-blend-multiply"
                    src="info/signature.svg"
                />
            </FooterSection>
            <FooterSection
                class="flex flex-col md:flex-row md:items-end md:justify-between text-gray-600 font-mono text-sm text-center pb-12"
            >
                <p class="md:text-left">
                    Iteration {{ iteration }} Patch {{ minor }} <br />All rights
                    reserved © {{ year }} {{ $t("info.url") }}
                </p>
                <p class="md:text-right">
                    Made with <span class="text-emerald-700">Vue.js</span>
                    <br />
                    Designed and engineered by Anson Ng
                </p>
            </FooterSection>
        </div>
    </footer>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const version = runtimeConfig.public.__APP_VERSION__.split(".");
const iteration = version[0];
const minor = version.slice(1, 3).join(".");
const year = ref(new Date().getFullYear());
</script>
