<template>
  <div class="max-md:space-y-2 md:flex md:divide-x md:divide-gray-300 md:divide-dashed">
    <div class="flex flex-col max-md:space-y-2 md:justify-between md:w-36 lg:w-48 xl:w-64 md:pr-4">
      <div class="max-md:flex text-balance">
        <span class="font-mono text-xs text-gray-600">{{ startDateString }} ~ {{ endDateString }}</span>
        <span class="font-mono text-xs text-gray-600 md:hidden">&nbsp;·&nbsp;</span>
        <h6 class="max-md:text-xs font-mono">
          {{ education.location }}
        </h6>
      </div>
      <div class="flex flex-wrap gap-1">
        <TagText
          v-if="isPresent"
          class="bg-blue-100! text-blue-950!"
        >
          {{
            $t("dictionary.present")
          }}
        </TagText>
        <TagText
          v-for="tag in education.tags"
          :key="tag"
        >
          {{ tag }}
        </TagText>
      </div>
    </div>
    <div class="md:pl-4 space-y-4 flex-1">
      <div class="space-y-2">
        <div class="rounded-full bg-gray-100 p-2 w-fit">
          <NuxtImg
            :src="education.pathToLogo"
            :alt="education.school + $t('dictionary.logoAlt')"
            class="h-12 w-12"
            width="48"
          />
        </div>
        <div>
          <h6 class="font-medium">
            {{ education.degree }}
          </h6>
          <p>{{ education.school }}</p>
        </div>
        <p class="text-gray-600 font-serif">
          {{ education.description }}
        </p>
        <ul class="text-gray-600 list-disc list-inside font-serif">
          <li
            v-for="highlight in education.highlights"
            :key="highlight"
          >
            {{ highlight }}
          </li>
        </ul>
      </div>
      <div
        v-if="education.scholarships"
        class="relative group"
      >
        <div
          class="absolute w-full h-full bg-stone-100 rounded group-hover:-translate-x-2 group-hover:-translate-y-2 transition invisible group-hover:visible [@media(hover:none)]:visible [@media(hover:none)]:-translate-x-2 [@media(hover:none)]:-translate-y-2"
        />
        <div
          class="absolute w-full h-full bg-stone-100 rounded group-hover:translate-x-2 group-hover:translate-y-2 transition invisible group-hover:visible [@media(hover:none)]:visible [@media(hover:none)]:translate-x-2 [@media(hover:none)]:translate-y-2"
        />
        <div
          class="relative bg-stone-50 rounded border border-gray-300 from-blue-100/20 bg-linear-to-b overflow-hidden group-hover:shadow-lg transition group-hover:border-yellow-700"
        >
          <div
            class="absolute bg-[url('/bg/geometric.svg')] mask-b-to-20% w-full h-full top-0 left-0 group-hover:scale-102 transition [@media(hover:none)]:scale-102"
          />
          <div class="relative space-y-2 p-4 z-10">
            <h5 class="font-sans text-yellow-900 capitalize font-medium">
              {{ $t("about.education.scholarships") }}
              <em class="text-gray-400 font-serif font-light tracking-wide">
                {{ scholarshipsCountString }}
              </em>
            </h5>
            <ul
              class="text-gray-600 list-inside font-serif divide-y divide-gray-300 group-hover:divide-yellow-700 transition [@media(hover:none)]:divide-yellow-700"
            >
              <li
                v-for="year in scholarshipsGroupByYear?.keys()"
                :key="year"
                class="flex divide-x divide-dashed divide-gray-300 group-hover:divide-yellow-700 transition [@media(hover:none)]:divide-yellow-700"
              >
                <span
                  class="pr-4 py-2 font-mono text-gray-400 group-hover:text-yellow-700 transition [@media(hover:none)]:text-yellow-700"
                >
                  {{ year }}
                </span>
                <ul class="flex-1 divide-y divide-gray-300 pl-4">
                  <li
                    v-for="scholarship in scholarshipsGroupByYear?.get(
                      year,
                    )"
                    :key="scholarship.name"
                    class="py-2"
                  >
                    {{ scholarship.name }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { EducationCollectionItem } from '@nuxt/content';

const { t, locale } = useI18n()

const props = defineProps<{
    education: EducationCollectionItem
}>()

const { education } = toRefs(props)

const isPresent = computed(() => {
    const currentDate = new Date()
    return (
        new Date(education.value.endDate) > currentDate
            && new Date(education.value.startDate) < currentDate
    )
})

const startDateString = computed(() => {
    return new Date(education.value.startDate).toLocaleDateString(
        locale.value,
        {
            month: 'short',
            year: 'numeric',
        },
    )
})

const endDateString = computed(() => {
    const date = new Date(education.value.endDate)
    const dateString = date.toLocaleDateString(locale.value, {
        month: 'short',
        year: 'numeric',
    })
    return date > new Date()
        ? `${t('dictionary.expected')} ${dateString}`
        : dateString
})

const scholarshipsCountString = computed(() => {
    return education.value.scholarships.length.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
    })
})

const scholarshipsGroupByYear = computed(() => {
    return education.value.scholarships
        ? new Map(
            Array.from(
                Map.groupBy(education.value.scholarships, (scholarship) => {
                    return new Date(scholarship.date).getFullYear()
                }).entries(),
            ).sort((a, b) => b[0] - a[0]),
        )
        : null
})
</script>
