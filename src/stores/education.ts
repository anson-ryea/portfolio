import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'
import educationEntries from '@/entries/education.json'
import i18n from '@Locales/index'
const { locale } = i18n.global

export class Education {
    startDate: Date
    endDate: Date
    location: string
    school: string
    degree: string
    gpa: number | null
    description: string | null
    highlights: string[] | null
    pathToLogo: string | null
    tags: string[] | null
    constructor(startDate: Date, endDate: Date, location: string, school: string, degree: string, gpa: number | null = null, description: string | null = null, highlights: string[] | null = null, pathToLogo: string | null = null, tags: string[] | null = null) {
        this.startDate = startDate
        this.endDate = endDate
        this.school = school
        this.degree = degree
        this.gpa = gpa
        this.description = description
        this.location = location
        this.highlights = highlights
        this.pathToLogo = pathToLogo
        this.tags = tags
    }
}

export const useEducationStore = defineStore('education', () => {
    const education: Ref<Education[]> = ref(
        (educationEntries as any[]).map(entry => new Education(
            new Date(entry.startDate.year, entry.startDate.month - 1),
            new Date(entry.endDate.year, entry.endDate.month - 1),
            entry.location,
            entry.school,
            entry.degree,
            entry.gpa,
            entry.description[locale.value],
            entry.highlights[locale.value],
            entry.pathToLogo,
            entry.tags[locale.value]
        ))
    )

    function isPresent(education: Education) {
        const currentDate = new Date()
        return education.startDate <= currentDate && currentDate <= education.endDate
    }

    const presentEducation = computed(() => {
        return education.value.filter(isPresent)
    })

    return { education, isPresent, presentEducation }
})