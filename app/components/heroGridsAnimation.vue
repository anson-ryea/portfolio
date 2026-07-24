<template>
  <div class="grid grid-cols-10 h-dvh w-full">
    <div
      v-for="cell in cells"
      :key="cell.id"
      class="hero-grid-cell relative"
      :style="{
        '--cell-brightness': cell.brightness,
        '--cell-delay': `${cell.delay}s`,
      }"
    />
  </div>
</template>

<script lang="ts" setup>
const GRID_COLUMNS = 10;
const FADE_STAGGER = 0.03;

const cells = Array.from({ length: GRID_COLUMNS ** 2 }, (_, index) => {
  const id = index + 1;

  return {
    id,
    brightness: ((id % 7) * 5 + 30) / 100,
    delay:
      (((id - 1) % GRID_COLUMNS) - (id - 1) / GRID_COLUMNS + GRID_COLUMNS) *
      FADE_STAGGER,
  };
});
</script>

<style scoped>


.hero-grid-cell::before,
.hero-grid-cell::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid var(--color-blue-900, #1e3a8a);
  border-radius: 0.25rem;
  background-color: var(--color-blue-600, #2563eb);
  pointer-events: none;
}

.hero-grid-cell::before {
  opacity: 0.85;
  filter: brightness(var(--cell-brightness));
  animation: hero-grid-cell-fade 300ms ease-out var(--cell-delay) forwards;
}

.hero-grid-cell::after {
  opacity: 0;
  /* Slow fade-out creates the trail after the pointer leaves. */
  transition: opacity 1000ms ease-out;
}

@media (hover: hover) and (pointer: fine) {
  .hero-grid-cell:hover::after {
    /* Make the cell light up quickly, then use the slower base transition on exit. */
    opacity: 0.5;
    transition-duration: 100ms;
  }
}

@keyframes hero-grid-cell-fade {
  from {
    opacity: 0.85;
    filter: brightness(var(--cell-brightness));
  }

  to {
    opacity: 0;
    filter: brightness(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-grid-cell::before {
    animation: none;
    opacity: 0;
  }
}
</style>
