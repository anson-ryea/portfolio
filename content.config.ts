import { defineContentConfig, defineCollection, z } from "@nuxt/content";

const localeString = z.object({
    en: z.string(),
    sv: z.string(),
});

const localeStringArray = z.object({
    en: z.array(z.string()),
    sv: z.array(z.string()),
});

export default defineContentConfig({
    collections: {
        experiences: defineCollection({
            type: "data",
            source: "experiences/*.json",
            schema: z.object({
                startDate: z.date(),
                endDate: z.date(),
                location: z.string(),
                company: z.string(),
                title: z.string(),
                description: localeString,
                highlights: localeStringArray,
                pathToLogo: z.string(),
                tags: localeStringArray,
            }),
        }),
        education: defineCollection({
            type: "data",
            source: "education/*.json",
            schema: z.object({
                startDate: z.date(),
                endDate: z.date(),
                location: z.string(),
                school: z.string(),
                degree: z.string(),
                gpa: z.number(),
                description: localeString,
                highlights: localeStringArray,
                pathToLogo: z.string(),
                tags: localeStringArray,
            }),
        }),
    },
});
