<template>
    <main class="flex w-full justify-around bg-side border-b border-gray-300">
        <div
            class="flex w-full flex-col md:mx-8 lg:mx-12 xl:mx-20 bg-white border-x border-gray-300 divide-y divide-gray-300">
            <div class="h-16 w-full bg-linear-to-t from-blue-100/20" />
            <IndexSection class="bg-linear-to-b from-blue-100/20 space-y-8">
                <div>
                    <h3 class="text-gray-400">{{ $t("about.title") }}</h3>
                    <h1 class="font-serif">
                        {{ $t("about.description") }}
                    </h1>
                </div>
                <ConsoleLikePane :paneName="`${$t('about.biography')}.md`">
                    <ContentRenderer :value="biography" class="md:columns-2 space-y-8 font-serif" />
                </ConsoleLikePane>
            </IndexSection>
            <IndexSection>
                <ConsoleLikePane :paneName="`${$t('about.education')}.db`">
                    <div class="space-y-4 md:flex md:justify-between md:space-x-16">
                        <h2 class="capitalize">{{ $t("about.education") }}</h2>
                        <div class="divide-y divide-gray-300 flex-1">
                            <EducationEntry v-for="ed in education" :education="ed" class="py-4 first:pt-0!" />
                        </div>
                    </div>
                </ConsoleLikePane>
            </IndexSection>
            <IndexSection>
                <ConsoleLikePane :paneName="`${$t('about.experiences')}.db`">
                    <div class="space-y-4 md:flex md:justify-between md:space-x-16">
                        <h2 class="capitalize">{{ $t("about.experiences") }}</h2>
                        <div class="divide-y divide-gray-300 flex-1 max-md:divide-dashed">
                            <ExperienceEntry v-for="experience in experiences" :experience="experience"
                                class="py-4 first:pt-0!" />
                        </div>
                    </div>
                </ConsoleLikePane>
            </IndexSection>
        </div>
    </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const { data: experiences } = await useAsyncData(`experiences-${locale.value}`, () => {
    return queryCollection("experiences").where("locale", "=", locale.value).order("endDate", "DESC").all();
}, {
    watch: [locale]
}
);

const { data: education } = await useAsyncData(`education-${locale.value}`, () => {
    return queryCollection("education").where("locale", "=", locale.value).order("endDate", "DESC").all();
}, {
    watch: [locale]
}
);

const { data: biography } = await useAsyncData(`biography-about-${locale.value}`, () => {
    return queryCollection("biography").path(`/biography/${locale.value}/about`).first()
}, {
    watch: [locale]
})
</script>
