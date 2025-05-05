<template>
    <div class="max-md:space-y-2 md:flex md:divide-x md:divide-gray-300 md:divide-dashed">
        <div class="flex flex-col max-md:space-y-2 md:justify-between md:w-36 lg:w-48 xl:w-64 md:pr-4">
            <div class="max-md:flex text-balance">
                <span class="font-mono text-xs text-gray-600">{{ startDateString }} ~ {{ endDateString }}</span>
                <span class="font-mono text-xs text-gray-600 md:hidden">&nbsp·&nbsp</span>
                <h6 class="max-md:text-xs font-mono">{{ education.location }}</h6>
            </div>
            <div class="flex flex-wrap gap-1">
                <Tag v-show="isPresent(education)" class="bg-blue-100! text-blue-950!">Present</Tag>
                <Tag v-for="tag in education.tags" :key="tag">{{ tag }}</Tag>
            </div>
        </div>
        <div class="md:pl-4 space-y-2 flex-1">
            <div class="rounded-full bg-gray-100 p-2 w-fit"><img
                    :src="getAsset(`about/education/${education.pathToLogo}`)" class="h-12 w-12" /></div>
            <div>
                <h6 class="font-semibold">{{ education.degree }}</h6>
                <p>{{ education.school }}</p>
            </div>
            <p class="text-gray-600 font-serif">{{ education.description }}</p>
            <ul class="text-gray-600 list-disc list-inside font-serif">
                <li v-for="highlight in education.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import Tag from '@Components/tag.vue';
import { Education } from '@/stores/education';
import { computed } from 'vue';
import { useEducationStore } from '@/stores/education';
import getAsset from '@/utils/url';

const { isPresent } = useEducationStore()

const props = defineProps({
    education: {
        type: Education,
        required: true
    }
})

const startDateString = computed(() => {
    return props.education.startDate.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    })
})

const endDateString = computed(() => {
    const dateString = props.education.endDate.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
    })
    return props.education.endDate > new Date() ? `Expected ${dateString}` : dateString
})
</script>