import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'
import expereinceEntries from '@/entries/experiences.json'
import i18n from '@Locales/index'
const { locale } = i18n.global

export class Experience {
    startDate: Date
    endDate: Date | "present"
    location: string
    company: string
    title: string
    description: string | null
    highlights: string[] | null
    pathToLogo: string | null
    tags: string[] | null
    constructor(startDate: Date, endDate: Date | "present", location: string, company: string, title: string, description: string | null = null, highlights: string[] | null = null, pathToLogo: string | null = null, tags: string[] | null = null) {
        this.startDate = startDate
        this.endDate = endDate
        this.title = title
        this.company = company
        this.description = description
        this.location = location
        this.highlights = highlights
        this.pathToLogo = pathToLogo
        this.tags = tags
    }
}

export const useExperiencesStore = defineStore('experiences', () => {
    const experiences: Ref<Experience[]> = ref(
        (expereinceEntries as any[]).map(entry => new Experience(
            new Date(entry.startDate.year, entry.startDate.month - 1),
            entry.endDate === 'present'
                ? 'present'
                : new Date(entry.endDate.year, entry.endDate.month - 1),
            entry.location,
            entry.company,
            entry.title,
            entry.description[locale.value],
            entry.highlights[locale.value],
            entry.pathToLogo,
            entry.tags[locale.value]
        ))
    )

    function isPresent(experience: Experience) {
        const currentDate = new Date()
        return experience.startDate <= currentDate && (experience.endDate === "present" || currentDate <= experience.endDate)
    }

    const presentExperiences = computed(() => {
        return experiences.value.filter(isPresent)
    })

    return { experiences, isPresent, presentExperiences }
})