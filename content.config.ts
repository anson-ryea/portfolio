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
                description: z.string(),
                highlights: z.array(z.string()),
                pathToLogo: z.string(),
                tags: z.array(z.string()),
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
                description: z.string(),
                highlights: z.array(z.string()),
                pathToLogo: z.string(),
                tags: z.array(z.string()),
            }),
        }),
    },
});
