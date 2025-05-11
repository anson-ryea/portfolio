import { defineContentConfig, defineCollection, z } from "@nuxt/content";

const localeString = z.object({
    en: z.string().nullable(),
    sv: z.string().nullable(),
});

const localeStringArray = z.object({
    en: z.array(z.string()).nullable(),
    sv: z.array(z.string()).nullable(),
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
                pathToLogo: z.string().nullable(),
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
                gpa: z.number().nullable(),
                description: localeString,
                highlights: localeStringArray,
                pathToLogo: z.string().nullable(),
                tags: localeStringArray,
            }),
        }),
    },
});
