<template>
    <div class="max-md:space-y-2 md:flex md:divide-x md:divide-gray-300 md:divide-dashed">
        <div class="flex flex-col max-md:space-y-2 md:justify-between md:w-36 lg:w-48 xl:w-64 md:pr-4">
            <div class="max-md:flex text-balance">
                <span class="font-mono text-xs text-gray-600">{{ startDateString }} ~ {{ endDateString }}</span>
                <span class="font-mono text-xs text-gray-600 md:hidden">&nbsp·&nbsp</span>
                <h6 class="max-md:text-xs font-mono">
                    {{ education.location }}
                </h6>
            </div>
            <div class="flex flex-wrap gap-1">
                <Tag v-show="isPresent" class="bg-blue-100! text-blue-950!">Present</Tag>
                <Tag v-for="tag in education.tags" :key="tag">{{
                    tag
                    }}</Tag>
            </div>
        </div>
        <div class="md:pl-4 space-y-2 flex-1">
            <div class="rounded-full bg-gray-100 p-2 w-fit">
                <NuxtImg :src="`content/education/${education.pathToLogo}`" class="h-12 w-12" />
            </div>
            <div>
                <h6 class="font-semibold">{{ education.degree }}</h6>
                <p>{{ education.school }}</p>
            </div>
            <p class="text-gray-600 font-serif">
                {{ education.description }}
            </p>
            <ul class="text-gray-600 list-disc list-inside font-serif">
                <li v-for="highlight in education.highlights" :key="highlight">
                    {{ highlight }}
                </li>
            </ul>
            <div v-if="education.scholarships"
                class="relative bg-gray-50 p-4 space-y-2 rounded border border-gray-100 from-blue-100/20 bg-linear-to-b overflow-hidden">
                <div class="absolute bg-ys mask-b-to-30% w-full h-full top-0 left-0"></div>
                <h5 class="font-sans font-semibold text-blue-950">Scholarships</h5>
                <ul class="text-gray-600 list-inside font-serif divide-y divide-gray-300">
                    <li v-for="(scholarships, year) in scholarshipsGroupByYear" :key="year"
                        class="flex divide-x divide-gray-300">
                        <p class="pr-4 py-2 font-mono text-sm">{{ year }}</p>
                        <ul class="flex-1 divide-y divide-gray-300 pl-4">
                            <li v-for="scholarship in scholarships" :key="scholarship.name" class="py-2">
                                {{ scholarship.name }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { EducationCollectionItem } from "@nuxt/content";

const { t, locale } = useI18n();

const props = defineProps<{
    education: EducationCollectionItem;
}>();

const { education } = toRefs(props);

const isPresent = computed(() => {
    const currentDate = new Date();
    return (
        new Date(education.value.endDate) > currentDate &&
        new Date(education.value.startDate) < currentDate
    );
});

const startDateString = computed(() => {
    return new Date(education.value.startDate).toLocaleDateString(locale.value, {
        month: "short",
        year: "numeric",
    });
});

const endDateString = computed(() => {
    const date = new Date(education.value.endDate);
    const dateString = date.toLocaleDateString(locale.value, {
        month: "short",
        year: "numeric",
    });
    return date > new Date() ? `${t("dictionary.expected")} ${dateString}` : dateString;
});

const scholarshipsGroupByYear = computed(() => {
    return education.value.scholarships ? Object.groupBy(education.value.scholarships, (scholarship) => {
        return new Date(scholarship.date).getFullYear();
    }) : null;
})
</script>
