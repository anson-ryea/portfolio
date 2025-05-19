<template>
    <div class="max-md:space-y-2 md:flex md:divide-x md:divide-gray-300 md:divide-dashed">
        <div class="flex flex-col max-md:space-y-2 md:justify-between md:w-36 lg:w-48 xl:w-64 md:pr-4">
            <div class="max-md:flex text-balance">
                <span class="font-mono text-xs text-gray-600">{{ startDateString }} ~ {{ endDateString }}</span>
                <span class="font-mono text-xs text-gray-600 md:hidden">&nbsp·&nbsp</span>
                <h6 class="max-md:text-xs font-mono">
                    {{ experience.location }}
                </h6>
            </div>
            <div class="flex flex-wrap gap-1">
                <Tag v-show="isPresent" class="bg-blue-100! text-blue-950!">Present</Tag>
                <Tag v-for="tag in experience.tags" :key="tag">{{
                    tag
                }}</Tag>
            </div>
        </div>
        <div class="md:pl-4 space-y-2 flex-1">
            <div class="rounded-full bg-gray-100 p-2 w-fit">
                <NuxtImg :src="`content/experiences/${experience.pathToLogo}`" class="h-12 w-12" />
            </div>
            <div>
                <h6 class="font-medium">{{ experience.title }}</h6>
                <p>{{ experience.company }}</p>
            </div>
            <p class="text-gray-600 font-serif">
                {{ experience.description }}
            </p>
            <ul class="text-gray-600 list-disc list-inside font-serif">
                <li v-if="experience.highlights" v-for="highlight in experience.highlights" :key="highlight">
                    {{ highlight }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ExperiencesCollectionItem } from "@nuxt/content";

const { t, locale } = useI18n();

const props = defineProps<{
    experience: ExperiencesCollectionItem;
}>();

const { experience } = toRefs(props);

const isPresent = computed(() => {
    const currentDate = new Date();
    return (
        new Date(experience.value.endDate) > currentDate &&
        new Date(experience.value.startDate) < currentDate
    );
});

const startDateString = computed(() => {
    return new Date(experience.value.startDate).toLocaleDateString(locale.value, {
        month: "short",
        year: "numeric",
    });
});

const endDateString = computed(() => {
    return new Date(experience.value.endDate).getDate() === new Date("2100-01-01").getDate()
        ? t("dictionary.present")
        : new Date(experience.value.endDate).toLocaleDateString(locale.value, {
            month: "short",
            year: "numeric",
        });
});
</script>
