<template>
  <motion.div
    v-if="isPointerActive"
    aria-hidden="true"
    class="pointer-events-none fixed top-0 left-0 z-9999 w-fit"
  >
    <motion.div
      class="h-2 w-2 border border-gray-300 bg-blue-700 -top-1 -left-1 shadow-lg shadow-blue-300"
      :style="{ x: positionX, y: positionY }"
      :initial="{
        scaleX: 0,
        scaleY: 0,
        borderRadius: isHoveringTextElement ? '2px' : '9999px',
      }"
      :animate="{
        scaleX: isHoveringTextElement ? 0.5 : 1,
        scaleY: isHoveringTextElement ? 2 : 1,
        borderRadius: isHoveringTextElement ? '2px' : '9999px',
        borderTopWidth: isHoveringTextElement ? '0.5px' : '1px',
        borderBottomWidth: isHoveringTextElement ? '0.5px' : '1px',
        borderLeftWidth: isHoveringTextElement ? '2px' : '1px',
        borderRightWidth: isHoveringTextElement ? '2px' : '1px',
      }"
    />
    <motion.div
      v-if="cursorText"
      class="ml-1 -mt-1 flex w-fit items-center rounded bg-black p-1 font-mono text-xs uppercase text-white shadow"
      :style="{ x: labelPositionX, y: labelPositionY }"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ ease: 'easeOut', duration: 0.05 }"
    >
      <Icon v-if="isHoveringLink" name="solar:arrow-left-up-linear" class="h-4 w-4 bg-white" />
      <span>{{ cursorText }}</span>
    </motion.div>
  </motion.div>
</template>

<script lang="ts" setup>
import { animate, motion, useMotionValue } from "motion-v";

const TEXT_TARGET_SELECTOR = [
  '[data-cursor="text"]',
  "p",
  "li",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
].join(", ");

const positionX = useMotionValue(0);
const positionY = useMotionValue(0);
const labelPositionX = useMotionValue(0);
const labelPositionY = useMotionValue(0);
const isPointerActive = ref(false);
const isHoveringLink = ref(false);
const isHoveringTextElement = ref(false);
const cursorText = ref<string | null>(null);

let cursorAvailabilityQuery: MediaQueryList | null = null;
let animationFrame: number | null = null;
let pendingPosition: { x: number; y: number } | null = null;

function clearHoverTarget() {
  isHoveringLink.value = false;
  isHoveringTextElement.value = false;
  cursorText.value = null;
}

function updateHoverTarget(target: EventTarget | null) {
  const element = target instanceof Element ? target : null;
  const link = element?.closest<HTMLAnchorElement>("a[href]") ?? null;

  isHoveringLink.value = link !== null;
  isHoveringTextElement.value =
    link === null && (element?.closest(TEXT_TARGET_SELECTOR) ?? null) !== null;
  cursorText.value = link?.getAttribute("href") ?? null;
}

function trackPointerMove(event: PointerEvent) {
  if (event.pointerType !== "mouse") return;

  pendingPosition = { x: event.clientX, y: event.clientY };

  if (animationFrame !== null) return;

  animationFrame = requestAnimationFrame(() => {
    const position = pendingPosition;
    animationFrame = null;
    pendingPosition = null;

    if (!position) return;

    positionX.set(position.x);
    positionY.set(position.y);

    if (isPointerActive.value && cursorText.value) {
      animate(labelPositionX, position.x, { type: "tween", ease: "easeOut", duration: 0.05 });
      animate(labelPositionY, position.y, { type: "tween", ease: "easeOut", duration: 0.05 });
    } else {
      // A newly visible label should start at the pointer, not trail from a stale position.
      labelPositionX.jump(position.x);
      labelPositionY.jump(position.y);
    }

    isPointerActive.value = true;
  });
}

function handlePointerOver(event: PointerEvent) {
  if (event.pointerType === "mouse") {
    updateHoverTarget(event.target);
  }
}

function hideCursor() {
  labelPositionX.stop();
  labelPositionY.stop();
  isPointerActive.value = false;
  pendingPosition = null;
  clearHoverTarget();

  if (animationFrame !== null) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }
}

function handlePointerOut(event: PointerEvent) {
  if (event.pointerType === "mouse" && event.relatedTarget === null) {
    hideCursor();
  }
}

function handleVisibilityChange() {
  if (document.hidden) {
    hideCursor();
  }
}

function updateCursorAvailability() {
  if (!cursorAvailabilityQuery?.matches) {
    stopTrackingPointer();
    return;
  }

  window.addEventListener("pointermove", trackPointerMove, { passive: true });
  window.addEventListener("pointerover", handlePointerOver, { passive: true });
  window.addEventListener("pointerout", handlePointerOut, { passive: true });
  window.addEventListener("blur", hideCursor);
  document.addEventListener("visibilitychange", handleVisibilityChange);
}

function stopTrackingPointer() {
  window.removeEventListener("pointermove", trackPointerMove);
  window.removeEventListener("pointerover", handlePointerOver);
  window.removeEventListener("pointerout", handlePointerOut);
  window.removeEventListener("blur", hideCursor);
  document.removeEventListener("visibilitychange", handleVisibilityChange);
  hideCursor();
}

onMounted(() => {
  cursorAvailabilityQuery = window.matchMedia(
    "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
  );
  cursorAvailabilityQuery.addEventListener("change", updateCursorAvailability);
  updateCursorAvailability();
});

onUnmounted(() => {
  cursorAvailabilityQuery?.removeEventListener("change", updateCursorAvailability);
  stopTrackingPointer();
  positionX.destroy();
  positionY.destroy();
  labelPositionX.destroy();
  labelPositionY.destroy();
});
</script>
