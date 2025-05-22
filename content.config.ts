import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        experiences: defineCollection({
            type: "data",
            source: "experiences/*/*.json",
            schema: z.object({
                locale: z.enum(["en", "sv"]),
                startDate: z.date(),
                endDate: z.date(),
                location: z.string(),
                company: z.string(),
                title: z.string(),
                description: z.string(),
                highlights: z.array(z.string()),
                tags: z.array(z.string()),
                pathToLogo: z.string().editor({ input: "media" }),
            }),
        }),
        education: defineCollection({
            type: "data",
            source: "education/*/*.json",
            schema: z.object({
                locale: z.enum(["en", "sv"]),
                startDate: z.date(),
                endDate: z.date(),
                location: z.string(),
                school: z.string(),
                degree: z.string(),
                gpa: z.number(),
                description: z.string(),
                highlights: z.array(z.string()),
                tags: z.array(z.string()),
                pathToLogo: z.string().editor({ input: "media" }),
                scholarships: z.array(z.object({
                    name: z.string(),
                    date: z.date()
                }))
            }),
        }),
        biography: defineCollection({
            type: "page",
            source: "biography/*/*.md",
            schema: z.object({})
        }),
        polaroids: defineCollection({
            type: "data",
            source: "polaroids/*/*.json",
            schema: z.object({
                locale: z.enum(["en", "sv"]),
                caption: z.string(),
                alt: z.string(),
                pathToImage: z.string().editor({ input: "media" }),
            }),
        }),
    },
});
