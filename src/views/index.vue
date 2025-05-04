<template>
  <div class="flex flex-col w-full justify-between">
    <div
      class="h-screen w-full bg-[url(@Assets/index/hero.jpg)] bg-cover bg-center flex flex-col justify-center items-center space-y-4 xs:space-y-8 shadow-2xl select-none">
      <img class="h-80 mix-blend-difference" src="/src/assets/index/signature.svg" />
      <p class="text-white font-mono font-light text-center xs:text-sm text-base mix-blend-difference">{{
        $t('info.role') }}</p>
    </div>
    <main class="flex w-full justify-around bg-side border-b border-gray-300">
      <div
        class="flex w-full flex-col md:mx-8 lg:mx-12 xl:mx-20 bg-white border-x border-gray-300 divide-y divide-gray-300">
        <div class="h-16 w-full bg-linear-to-t from-blue-100/20" />
        <IndexSection class="bg-linear-to-b from-blue-100/20">
          <div class="flex flex-col space-y-12 lg:flex-row lg:space-x-12 lg:space-y-0">
            <ConsoleLikePane paneName="intro.md" class="flex-1">
              <template #default>
                <div class="space-y-4 sm:space-y-8 lg:space-y-12">
                  <div class="space-y-2">
                    <h1>{{ $t('index.greeting') }}</h1>
                    <h3 class="text-gray-300 font-serif">Nothing more than an ordinary human.</h3>
                  </div>
                  <SeeThroughBox>
                    <p><span class="text-black">{{ $t('info.fullName') }}</span> {{ $t('index.intro') }}</p>
                  </SeeThroughBox>
                </div>
              </template>
              <template #right-info>
                <p>HKT {{ currentDateString }}</p>
              </template>
            </ConsoleLikePane>
            <ConsoleLikePane paneName="portrait.png" class="">
              <Polaroid src="/src/assets/index/portrait.jpg" :caption="$t('index.portraitCaption')"
                :alt="$t('index.portraitAlt')" class="aspect-3/4 max-w-88" img-class="object-top!" />
            </ConsoleLikePane>
          </div>
        </IndexSection>
        <IndexSection>
          <ConsoleLikePane paneName="polaroids">
            <div
              class="flex space-x-4 max-w-full md:max-xl:grid md:grid-cols-2 md:gap-8 justify-between justify-items-center overflow-x-auto md:overflow-visible">
              <Polaroid src="/src/assets/index/polaroids/salford.png" caption="Salford, UK"
                class="aspect-3/4 w-48 md:w-60 xl:max-w-88 xl:h-fit xl:w-full " />
              <Polaroid src="/src/assets/hero.jpg" description="This is me!"
                class="aspect-3/4 w-48 md:w-60 xl:max-w-88 xl:h-fit xl:w-full min-w-fit" />
              <Polaroid src="/src/assets/hero.jpg" description="This is me!"
                class="aspect-3/4 w-48 md:w-60 xl:max-w-88 xl:h-fit xl:w-full min-w-fit" />
              <Polaroid src="/src/assets/hero.jpg" description="This is me!"
                class="aspect-3/4 w-48 md:w-60 xl:max-w-88 xl:h-fit xl:w-full min-w-fit" />
            </div>
          </ConsoleLikePane>
        </IndexSection>
        <IndexSection>
          <ConsoleLikePane paneName="current-status.md">
            <div>
              <h2>Current Status</h2>
              <h3 class="text-gray-300 font-serif">What am I doing currently?</h3>
            </div>
          </ConsoleLikePane>
        </IndexSection>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import ConsoleLikePane from '@Layouts/consoleLikePane.vue';
import SeeThroughBox from '@Components/seeThroughBox.vue';
import IndexSection from '@Layouts/indexSection.vue';
import Polaroid from '@Components/polaroid.vue';
import { ref, onMounted, onUnmounted, computed } from 'vue';

const currentDate = ref<Date | null>();
let dateUpdateIntervalId: number | undefined;


const currentDateString = computed(() => {
  return currentDate.value ? currentDate.value.toLocaleString('en-HK', {
    timeZone: 'Asia/Hong_Kong',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }) : '';
})

function updateDate() {
  currentDate.value = new Date();
}

onMounted(() => {
  updateDate();
  dateUpdateIntervalId = setInterval(updateDate, 1000);
});

onUnmounted(() => {
  clearInterval(dateUpdateIntervalId);
});
</script>