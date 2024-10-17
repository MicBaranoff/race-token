<script setup>
import icons from "@/configs/icons.js";

defineProps({
  theme: {
    default: 'black',
    validator(value) {
      return ['black', 'yellow', 'stroke'].includes(value)
    }
  },
  icon: {
    type: String,
  }
})
</script>

<template>
  <button type="button" :class="['c-button-simple', `c-button-simple--theme-${theme}`]">
    <component :is="icons[icon]" class="c-button-simple__icon" />
    <span class="c-button-simple__font">
      slot
    </span>
  </button>
</template>

<style scoped lang="scss">
.c-button-simple {
  min-width: 140px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid $color-black;
  color: $color-black;

  &:active {
    scale: 0.95;
  }

  &__font {
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.01em;
    text-align: center;
  }

  &__icon {
    max-height: 16px;
  }

  &--theme-black {
    border: 1px solid $color-black;
    color: $color-black;

    &:hover {
      background: $color-primary;
    }
  }

  &--theme-yellow {
    border: 1px solid $color-primary;
    color: $color-primary;

    &:hover {
      background: $color-black;
    }
  }
}
</style>
