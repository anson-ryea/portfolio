<template>
    <footer class="flex justify-around">
        <div
            class="flex flex-col md:mx-8 lg:mx-12 xl:mx-20 flex-1 bg-white border-x border-gray-300 border-dashed hover:border-solid divide-y divide-gray-300 divide-dashed">
            <FooterSection class="flex justify-between items-center">
                <div>
                    <h6 class="font-semibold">Get in touch</h6>
                    <p class="font-medium text-gray-500">Send me an email.</p>
                </div>
                <Tooltip>
                    <template #reference>
                        <a :href="`mailto:${$t('info.emailAddress')}`" class="flex btn-light items-center gap-2">
                            <SendOne theme="outline" size="16" fill="#4b5563" />
                            {{ $t("info.emailAddress") }}
                        </a>
                    </template>
                    <template #tooltip>
                        Click to copy
                    </template>
                </Tooltip>
            </FooterSection>
            <FooterSection>
                <img class="mx-auto h-24 sm:h-36 md:h-56 invert brightness-10 mix-blend-multiply "
                    :src="getAsset('index/signature.svg')" />
            </FooterSection>
            <FooterSection
                class="flex flex-col md:flex-row md:items-end md:justify-between text-gray-600 font-mono text-sm text-center pb-12">
                <p class="md:text-left">Iteration {{ iteration }} Patch {{ minor }} <br />All rights reserved © {{ year
                }}
                    {{ $t("info.url") }}</p>
                <p class="md:text-right">Made with <span class="text-emerald-700">Vue.js</span> <br />
                    Designed and
                    engineered by
                    Anson Ng
                </p>
            </FooterSection>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import FooterSection from '@Layouts/footerSection.vue';
import Tooltip from '@Components/tooltip.vue';
import { SendOne } from '@icon-park/vue-next';
import getAsset from '@/utils/url';

const version = __APP_VERSION__.split('.')
const iteration = version[0]
const minor = version.slice(1, 3).join('.')
const year = ref(new Date().getFullYear())
</script>