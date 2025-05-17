<template>
    <div>
        <transition name="slide-up">
            <component :is="currentExpandedComponent" v-if="currentExpandedComponent" />
        </transition>
        <div class="flex items-center max-md:justify-between md:space-x-8 border border-gray-300 rounded bg-gray-100/60 backdrop-blur-sm shadow px-4 font-medium text-sm font-mono text-gray-600 py-1 h-8"
            :class="{ 'border-t-0! rounded-t-none!': isExpanded.contact || isExpanded.locale }">
            <NuxtLink to="/" class="max-md:min-w-fit">
                <NuxtImg src="/favicon.svg" alt="Logo" class="h-10 w-10 items-center hover:invert transition" />
            </NuxtLink>
            <div class="flex flex-col items-center">
                <NuxtLinkLocale to="/" class="capitalize"> {{ $t("nav.home") }}</NuxtLinkLocale>
                <transition name="slide-up">
                    <div class="h-0.5 w-4 bg-blue-600 rounded"
                        v-show="currentRouteName?.toString().startsWith('index')" />
                </transition>
            </div>
            <div class="flex flex-col items-center">
                <NuxtLinkLocale to="/about" class="capitalize"> {{ $t("nav.about") }}</NuxtLinkLocale>
                <transition name="slide-up">
                    <div class="h-0.5 w-4 bg-blue-600 rounded"
                        v-show="currentRouteName?.toString().startsWith('about')" />
                </transition>
            </div>
            <button class="flex flex-col items-center" @click="toggleContact" :aria-expanded="isExpanded.contact">
                <span class="capitalize">{{ $t("nav.contact") }}</span>
                <transition name="slide-up">
                    <div class="h-0.5 w-4 bg-blue-600 rounded" v-show="isExpanded.contact" />
                </transition>
            </button>
            <div class="flex flex-col items-center">
                <NuxtLink to="/cv/resume.pdf" external class="flex items-center gap-1 uppercase">
                    {{ $t("nav.cv") }}
                    <Icon name="solar:import-broken" class="h-4 w-4 bg-gray-600" />
                </NuxtLink>
            </div>
            <button class="flex items-center gap-0.5" @click="toggleLocale" :aria-expanded="isExpanded.locale">
                <Icon name="solar:earth-line-duotone" class="h-4 w-4 bg-gray-600" />
                <transition name="slide-up">
                    <div class="h-0.5 w-4 bg-blue-600 rounded" v-show="isExpanded.locale" />
                </transition>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const currentRouteName = computed(() => route.name);

const { locale } = useI18n();

const isExpanded: Record<string, boolean> = reactive({
    contact: false,
    locale: false,
});

function contractAll() {
    for (const key in isExpanded) {
        isExpanded[key] = false;
    }
}

function toggleContact() {
    if (!isExpanded.contact) {
        contractAll();
    }
    isExpanded.contact = !isExpanded.contact;
}

function toggleLocale() {
    if (!isExpanded.locale) {
        contractAll();
    }
    isExpanded.locale = !isExpanded.locale;
}

const NavBarContact = resolveComponent('NavBarContact');
const NavBarLocale = resolveComponent('NavBarLocale');

const currentExpandedComponent = computed(() => {
    if (isExpanded.contact) {
        return NavBarContact;
    } else if (isExpanded.locale) {
        return NavBarLocale;
    }
    return null;
});

watch(locale, async () => {
    contractAll();
})
</script>
