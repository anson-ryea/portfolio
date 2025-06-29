<template>
  <div
    class="group relative bg-gray-50 bg-[url('/bg/contour.svg')] flex flex-col justify-around items-center rounded border border-dashed border-gray-300 font-serif"
    @click="isFlipped = !isFlipped"
  >
    <div
      class="grid grid-rows-1 group-hover:grid-rows-5 group-hover:p-2 group-hover:shadow-xl [@media(hover:none)]:grid-rows-5 [@media(hover:none)]:p-2 [@media(hover:none)]:shadow-xl bg-gray-100 absolute rounded shadow-lg h-full w-full transition-all border border-gray-300 overflow-hidden"
      :class="{ 'rotate-y-180! opacity-0': isFlipped }"
      :style="{
        transform: `rotateZ(${rotateDegree}deg)`,
      }"
    >
      <NuxtImg
        :src="src"
        :alt="alt"
        class="transition-all object-cover w-full max-h-full row-span-4"
        :class="imgClass"
        format="webp"
      />
      <span
        class="text-center font-handwritten text-gray-600 text-3xl my-auto hidden group-hover:block [@media(hover:none)]:block"
      >{{
        caption }}</span>
    </div>
    <p class="max-w-4/5 text-center font-handwritten text-gray-600 text-2xl">
      {{ alt }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
    src: String,
    alt: String,
    caption: String,
    imgClass: String,
})
const { src, alt, caption, imgClass } = props

const isFlipped = ref(false)

const rotateDegree = ref(0)

onMounted(() => {
    rotateDegree.value = Math.ceil(Math.random() * 6 - 3)
})
</script>
