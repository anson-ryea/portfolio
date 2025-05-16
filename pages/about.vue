<template>
    <main class="flex w-full justify-around bg-side border-b border-gray-300">
        <div
            class="flex w-full flex-col md:mx-8 lg:mx-12 xl:mx-20 bg-white border-x border-gray-300 divide-y divide-gray-300">
            <div class="h-16 w-full bg-linear-to-t from-blue-100/20" />
            <IndexSection class="bg-linear-to-b from-blue-100/20 space-y-8">
                <div>
                    <h3 class="text-gray-400">{{ $t("about.title") }}</h3>
                    <h1 class="font-serif">
                        {{ $t("about.description") }}
                    </h1>
                </div>
                <ConsoleLikePane :paneName="`${$t('about.biography')}.md`">
                    <div class="md:columns-2 space-y-8 font-serif">
                        <p>
                            Born and raised in Hong Kong, I am the first to
                            pursue a university degree. My father, a designer
                            whose ideas were ahead of their time, has always
                            embraced digital novelties, yet remains determinedly
                            traditional in his craft. Even today, he wields
                            large canvases and markers for his sketches,
                            provided a client still seeks his expertise and he
                            is willing to return to work. Though the industry
                            gradually passed him by as he struggled to adopt
                            modern tools, his unyielding perfectionism and
                            resolute determination have profoundly inspired me,
                            shaping my approach to the pursuits I am truly
                            passionate about with steadfast commitment.
                        </p>
                        <p>
                            I have chosen to pursue computer science at
                            university, and unlike many of my peers, I have
                            endeavoured to achieve near-complete financial
                            independence. Though my family is, perhaps, of
                            modest means, this decision stems not from necessity
                            but from a deep-seated aversion to depending on
                            others when I am capable of standing on my own. To
                            this end, I undertake various side jobs, including
                            freelance programming, configuring IT environments,
                            and tutoring secondary school students. Such a path
                            is undoubtedly more arduous, but this is, quite
                            simply, life.
                        </p>
                        <p>
                            Pursuing the disciplines of computer science or
                            engineering was not the course I envisioned in my
                            youth. Under the tutelage of my father's craft,
                            which I beheld with rapt attention in my tender
                            years, I acquired a considerable knowledge of design
                            and nurtured an ardent zeal for the design of
                            products and architectures whilst still a schoolboy.
                            My inclination towards programming lay dormant
                            until, in my First Form year at secondary school, I
                            came into possession of a Raspberry Pi 3. The
                            endeavour to understand the vexing intricacies of
                            configuring drivers in Linux was no trifling matter,
                            yet it was this very trial that kindled my
                            fascination, urging me to plumb the depths of the
                            computing world, a quest I pursue with unwavering
                            devotion to this day.
                        </p>
                        <p>
                            In recent years, my endeavours have chiefly centred
                            upon full-stack development, employing Vue.js,
                            Node.js / Kotlin, and PostgreSQL. As the son of an
                            esteemed designer father, I hold myself to exacting
                            standards in crafting UI/UX interfaces, striving for
                            both elegance and utility. Yet, I never forget the
                            maxim: first make it work, then make it right, and
                            lastly make it fast. Whilst my focus has been on
                            full-stack applications, I am earnestly pursuing
                            opportunities in other domains, with a particular
                            aim for projects related to UNIX systems and
                            concurrent programming.
                        </p>
                        <p>
                            Among the most memorable enterprises of my fledgling
                            career was a start-up venture in late 2022 and 2023,
                            which endeavoured to provide accessible online
                            learning materials through an engaging, interactive
                            platform. Though the team's progress verged on
                            deployment and had advanced to the crafting of
                            instructional content, the project was regrettably
                            stayed, its promise overshadowed by the advent of
                            generative artificial intelligence. Nonetheless,
                            this singular undertaking served as a comprehensive
                            tutelage in software engineering, encompassing
                            front-end and back-end development, web security,
                            and sundry software development paradigms. The
                            receipt of laudatory feedback from users within the
                            intended audience, even in the project's alpha
                            stage, remains a moment of singular delight.
                        </p>
                        <p>
                            I am ever vigilant for projects that span the
                            manifold domains of computer science and UI/UX
                            design. I am determined in my conviction that my
                            professional odyssey shall flourish as I immerse
                            myself further in diverse undertakings, bolstered by
                            the invaluable support of those around me—and,
                            perchance, by you, random esteemed reader.
                        </p>
                    </div>
                </ConsoleLikePane>
            </IndexSection>
            <IndexSection>
                <ConsoleLikePane :paneName="`${$t('about.education')}.db`">
                    <div class="space-y-4 md:flex md:justify-between md:space-x-16">
                        <h2 class="capitalize">{{ $t("about.education") }}</h2>
                        <div class="divide-y divide-gray-300 flex-1">
                            <EducationEntry v-for="ed in education" :education="ed" class="py-4 first:pt-0!" />
                        </div>
                    </div>
                </ConsoleLikePane>
            </IndexSection>
            <IndexSection>
                <ConsoleLikePane :paneName="`${$t('about.experiences')}.db`">
                    <div class="space-y-4 md:flex md:justify-between md:space-x-16">
                        <h2 class="capitalize">{{ $t("about.experiences") }}</h2>
                        <div class="divide-y divide-gray-300 flex-1 max-md:divide-dashed">
                            <ExperienceEntry v-for="experience in experiences" :experience="experience"
                                class="py-4 first:pt-0!" />
                        </div>
                    </div>
                </ConsoleLikePane>
            </IndexSection>
        </div>
    </main>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const { data: experiences } = await useAsyncData(`experiences-${locale.value}`, () => {
    return queryCollection("experiences").where("locale", "=", locale.value).order("endDate", "DESC").all();
}, {
    watch: [locale]
}
);

const { data: education } = await useAsyncData(`education-${locale.value}`, () => {
    return queryCollection("education").where("locale", "=", locale.value).order("endDate", "DESC").all();
}, {
    watch: [locale]
}
);
</script>
