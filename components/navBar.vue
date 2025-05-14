<template>
    <div>
        <transition name="slide-up">
            <div class="space-y-2 border border-gray-300 rounded-t bg-gray-100/60 backdrop-blur-sm shadow px-2 py-2 font-medium"
                v-if="isContactExpanded">
                <div class="grid grid-cols-6 font-mono text-sm text-gray-600 gap-1" name="fade">
                    <NuxtLink :to="`mailto:${$t('info.emailAddress')}`" external
                        class="flex items-center gap-2 col-span-3 w-full justify-center btn-light px-2 py-1"
                        key="email">
                        {{ $t('info.emailAddress') }}
                        <Icon name="solar:map-arrow-right-bold-duotone" class="h-4 w-4 bg-gray-600" />
                    </NuxtLink>
                    <NuxtLink :to="$t('info.githubUrl')" external
                        class="flex items-center col-span-1 w-full btn-light justify-center px-2 py-1">
                        <Icon name="simple-icons:github" class="h-4 w-4 bg-gray-600" />
                    </NuxtLink>
                    <NuxtLink :to="$t('info.instagramUrl')" external
                        class="flex items-center col-span-1 w-full btn-light justify-center px-2 py-1">
                        <Icon name="simple-icons:instagram" class="h-4 w-4 bg-gray-600" />
                    </NuxtLink>
                    <NuxtLink :to="$t('info.linkedinUrl')" external
                        class="flex items-center col-span-1 w-full btn-light justify-center px-2 py-1">
                        <Icon name="simple-icons:linkedin"
                            class="h-4 w-4 bg-gray-600 group-hover:bg-white transition" />
                    </NuxtLink>
                </div>
            </div>
        </transition>
        <div class="flex items-center max-sm:justify-between border border-gray-300 rounded bg-gray-100/60 backdrop-blur-sm shadow px-4 font-medium text-sm space-x-8 font-mono text-gray-600 p-1 h-8"
            :class="{ 'border-t-0! rounded-t-none!': isContactExpanded }">
            <NuxtLink to="/">
                <NuxtImg src="/favicon.svg" alt="Logo" class="h-10 w-10 items-center hover:invert transition" />
            </NuxtLink>
            <div class="flex flex-col items-center">
                <NuxtLink to="/">Home</NuxtLink>
                <transition name="slide-up">
                    <div class="h-0.5 w-4 bg-blue-600 rounded"
                        v-show="currentRouteName?.toString().startsWith('index')" />
                </transition>
            </div>
            <div class="flex flex-col items-center">
                <NuxtLink to="/about">About</NuxtLink>
                <transition name="slide-up">
                    <div class="h-0.5 w-4 bg-blue-600 rounded"
                        v-show="currentRouteName?.toString().startsWith('about')" />
                </transition>
            </div>
            <button class="flex flex-col items-center" @click="isContactExpanded = !isContactExpanded"
                :aria-expanded="isContactExpanded">
                <span>Contact</span>
                <transition name="slide-up">
                    <div class="h-0.5 w-4 bg-blue-600 rounded" v-show="isContactExpanded" />
                </transition>
            </button>
            <div class="flex flex-col items-center">
                <NuxtLink to="/cv/resume.pdf" external class="flex items-center gap-1">
                    CV
                    <Icon name="solar:import-broken" class="h-4 w-4 bg-gray-600" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const currentRouteName = computed(() => route.name);

const isContactExpanded = ref(false);
</script>
