import type { PageCollectionItemBase, DataCollectionItemBase } from '@nuxt/content'

declare module '@nuxt/content' {
  interface ExperiencesCollectionItem extends DataCollectionItemBase {
    startDate: Date;
    endDate: Date | "present";
    location: string;
    company: string;
    title: string;
    description: {
      en: string | null;
      sv: string | null;
    };
    highlights: {
      en: string[] | null;
      sv: string[] | null;
    };
    pathToLogo: string | null;
    tags: {
      en: string | null;
      sv: string | null;
    };
  }
  interface EducationCollectionItem extends DataCollectionItemBase {
    startDate: Date;
    endDate: Date;
    location: string;
    school: string;
    degree: string;
    gpa: number | null;
    description: {
      en: string | null;
      sv: string | null;
    };
    highlights: {
      en: string[] | null;
      sv: string[] | null;
    };
    pathToLogo: string | null;
    tags: {
      en: string | null;
      sv: string | null;
    };
  }

  interface PageCollections {
  }

  interface Collections {
    experiences: ExperiencesCollectionItem
    education: EducationCollectionItem
  }
}
