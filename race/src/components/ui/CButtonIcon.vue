<script setup>
import icons from "@/configs/icons.js";

defineProps({
  theme: {
    default: 'stroke',
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
  <button type="button" :class="['c-button-icon', `c-button-icon--theme-${theme}`]">
    <component :is="icons[icon]" class="c-button-icon__icon" />
  </button>
</template>

<style scoped lang="scss">
.c-button-icon {
  width: 64px;
  min-width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/images/buttons/icon-btn-bg-black.jpg') center / 100% 100% no-repeat;
  color: $color-primary;

  &:active {
    scale: 0.95;
  }

  &__icon {
    max-width: 45px;
    max-height: 35px;
  }

  &--theme-black {
    background: url('/images/buttons/icon-btn-bg-black.jpg') center / 100% 100% no-repeat;
    color: $color-primary;
  }

  &--theme-yellow {
    background: url('/images/buttons/icon-btn-bg-yellow.jpg') center / 100% 100% no-repeat;
    color: $color-black;
  }
}
</style>
