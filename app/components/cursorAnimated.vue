<template>
  <motion.div
    v-if="isMouseActive"
    class="pointer-events-none"
    :initial="{ scale: 0 }"
    :animate="{ scale: 1 }"
    :exit="{ scale: 0 }"
  >
    <motion.div
      class="h-2 w-2 bg-blue-700 border border-gray-300 -top-1 -left-1 shadow-lg shadow-blue-300"
      :animate="{ scaleX: isHoveringTextElement ? 0.5 : 1, scaleY: isHoveringTextElement ? 2 : 1, borderRadius: isHoveringTextElement ? '2px' : 'calc(infinity * 1px)', x: positionX + 'px', y: positionY + 'px' }"
      :transition="{ x: { type: 'tween', duration: 0 }, y: { type: 'tween', duration: 0 } }"
    />
    <motion.div
      class="ml-1 -mt-1 rounded bg-black w-fit p-1 text-xs text-white font-mono uppercase shadow flex items-center"
      :animate="{ x: positionX + 'px', y: positionY + 'px', scale: 1 }"
      :transition="{ ease: 'easeOut', duration: 0.05 }"
    >
      <Icon
        v-show="isHoveringLink"
        name="solar:arrow-left-up-linear"
        class="bg-white h-4 w-4"
      />
      <span>{{ store.text }}</span>
    </motion.div>
  </motion.div>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v'

const store = useCursorStore()

const positionX = ref(0)
const positionY = ref(0)
const hoveringElement = ref<Element | null>(null)
const isMouseActive = ref(false)

const isHoveringLink = ref(false)

const isHoveringTextElement = computed(() => {
    if (!hoveringElement.value) return false
    return hoveringElement.value.tagName === 'SPAN' || hoveringElement.value.tagName === 'LI' || hoveringElement.value.tagName === 'P' || hoveringElement.value.tagName === 'H1' || hoveringElement.value.tagName === 'H2' || hoveringElement.value.tagName === 'H3' || hoveringElement.value.tagName === 'H4' || hoveringElement.value.tagName === 'H5' || hoveringElement.value.tagName === 'H6'
})

watch(hoveringElement, (newElement) => {
    if (newElement?.tagName === 'A') {
        isHoveringLink.value = true
        store.setText(newElement.attributes.getNamedItem('href')?.value || null)
    }
    else {
        store.clearText()
        isHoveringLink.value = false
    }
}, { immediate: true })

function setIsMouseActive() {
    isMouseActive.value = true
}

function resetIsMouseActive() {
    isMouseActive.value = false
}
let animationFrame: number | null = null
function trackMouseMove(event: MouseEvent) {
    if (animationFrame) return
    animationFrame = requestAnimationFrame(() => {
        isMouseActive.value = true
        positionX.value = event.clientX
        positionY.value = event.clientY
        animationFrame = null
    })
}

function getHoveringElement(event: MouseEvent) {
    const { clientX: x, clientY: y } = event
    hoveringElement.value = document.elementFromPoint(x, y)
}

onMounted(() => {
    document.addEventListener('mouseenter', setIsMouseActive)
    document.addEventListener('mouseleave', resetIsMouseActive)
    window.addEventListener('mousemove', trackMouseMove)
    window.addEventListener('mouseover', getHoveringElement)
})

onUnmounted(() => {
    window.removeEventListener('mousemove', trackMouseMove)
    window.removeEventListener('mouseover', getHoveringElement)
    document.removeEventListener('mouseenter', setIsMouseActive)
    document.removeEventListener('mouseleave', resetIsMouseActive)
})
</script>
