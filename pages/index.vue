<template>
    <div class="flex flex-col w-full justify-between">
        <div
            class="h-screen w-full bg-[url(/index/hero.jpg)] bg-cover bg-center flex flex-col justify-center items-center space-y-4 xs:space-y-8 shadow-2xl select-none">
            <NuxtImg class="h-80 mix-blend-difference" src="/info/signature.svg" />
            <p class="text-white font-mono font-light text-center xs:text-sm text-base mix-blend-difference">
                {{ $t("info.role") }}
            </p>
        </div>
        <main class="flex w-full justify-around bg-side border-b border-gray-300">
            <div
                class="flex w-full flex-col md:mx-8 lg:mx-12 xl:mx-20 bg-white border-x border-gray-300 divide-y divide-gray-300">
                <div class="h-16 w-full bg-linear-to-t from-blue-100/20" />
                <IndexSection class="bg-linear-to-b from-blue-100/20">
                    <div class="flex flex-col space-y-12 lg:flex-row lg:space-x-12 lg:space-y-0">
                        <ConsoleLikePane :paneName="`${$t('index.greeting.intro.label')}.md`" class="flex-1">
                            <template #default>
                                <div class="space-y-4 sm:space-y-8 lg:space-y-12">
                                    <div class="space-y-2">
                                        <h1>{{ $t("index.greeting.title") }}</h1>
                                        <h3 class="text-gray-400 font-serif">
                                            {{ $t("index.greeting.description") }}
                                        </h3>
                                    </div>
                                    <SeeThroughBox>
                                        <ContentRenderer :value="intro" class="font-serif" :data="introVars" />
                                    </SeeThroughBox>
                                </div>
                            </template>
                            <template #right-info>
                                HKT
                                <ClientOnly>
                                    <NuxtTime :datetime="currentDate" time-zone="Asia/Hong_Kong" year="numeric"
                                        month="2-digit" day="2-digit" hour="2-digit" minute="2-digit" second="2-digit"
                                        :hour12="false" />
                                </ClientOnly>
                            </template>
                        </ConsoleLikePane>
                        <ConsoleLikePane :paneName="`${$t('index.portrait.label')}.png`" class="">
                            <Polaroid :src="'index/portrait.jpg'" :caption="$t('index.portrait.caption')"
                                :alt="$t('index.portrait.alt')" class="aspect-3/4 max-w-88" img-class="object-top!" />
                        </ConsoleLikePane>
                    </div>
                </IndexSection>
                <IndexSection>
                    <ConsoleLikePane :paneName="$t('index.polaroids')">
                        <div class="flex space-x-4 max-w-full md:max-xl:grid md:grid-cols-2 md:gap-8 justify-between
                            justify-items-center
                            overflow-x-auto md:overflow-visible">
                            <Polaroid :src="'/index/polaroids/salford.png'" caption="Salford, UK"
                                class="aspect-3/4 w-48 md:w-60 xl:max-w-88 xl:h-fit xl:w-full" />
                            <!-- <Polaroid
                                src=""
                                description="This is me!"
                                class="aspect-3/4 w-48 md:w-60 xl:max-w-88 xl:h-fit xl:w-full min-w-fit"
                            />
                            <Polaroid
                                src=""
                                description="This is me!"
                                class="aspect-3/4 w-48 md:w-60 xl:max-w-88 xl:h-fit xl:w-full min-w-fit"
                            />
                            <Polaroid
                                src=""
                                description="This is me!"
                                class="aspect-3/4 w-48 md:w-60 xl:max-w-88 xl:h-fit xl:w-full min-w-fit"
                            /> -->
                        </div>
                    </ConsoleLikePane>
                </IndexSection>
                <IndexSection>
                    <ConsoleLikePane :paneName="`${$t('index.currentStatus.label')}.md`">
                        <div class="space-y-4">
                            <div>
                                <h2>{{ $t("index.currentStatus.title") }}</h2>
                                <h3 class="text-gray-400 font-serif">
                                    {{ $t("index.currentStatus.description") }}
                                </h3>
                            </div>
                            <div class="divide-y divide-gray-300 flex-1 max-md:divide-dashed">
                                <EducationEntry v-for="education in presentEducation" :education="education"
                                    class="py-4 first:pt-0!" />
                                <ExperienceEntry v-for="experience in presentExperiences" :experience="experience"
                                    class="py-4 first:pt-0!" />
                            </div>
                        </div>
                    </ConsoleLikePane>
                </IndexSection>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

const currentDate = ref(Date.now());
let intervalId: number;

onMounted(() => {
    currentDate.value = Date.now();
    intervalId = window.setInterval(() => {
        currentDate.value = Date.now();
    }, 1000);
});

onUnmounted(() => {
    clearInterval(intervalId);
});

const { data: presentExperiences } = await useAsyncData(
    `presentExperiences-${locale.value}`,
    () => {
        return queryCollection("experiences")
            .where("locale", "=", locale.value)
            .andWhere((query) =>
                query
                    .where("endDate", ">", new Date().toISOString())
                    .where("startDate", "<", new Date().toISOString()),
            )
            .order("endDate", "DESC")
            .all();
    },
    {
        watch: [locale]
    }
);

const { data: presentEducation } = await useAsyncData(
    `presentEducation-${locale.value}`,
    () => {
        return queryCollection("education")
            .where("locale", "=", locale.value)
            .andWhere((query) =>
                query
                    .where("endDate", ">", new Date().toISOString())
                    .where("startDate", "<", new Date().toISOString()),
            )
            .order("endDate", "DESC")
            .all();
    },
    {
        watch: [locale]
    }
);

const { data: intro } = await useAsyncData(`biography-intro-${locale.value}`, () => {
    return queryCollection("biography").path(`/biography/${locale.value}/intro`).first()
}, {
    watch: [locale]
})

const introVars = ref({ fullName: t("info.fullName") });
</script>
