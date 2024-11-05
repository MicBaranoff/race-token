<script setup>
import icons from '@/configs/icons.js';
import soundEvents from '@/configs/soundEvents.js';

defineProps({
  theme: {
    default: 'black',
    validator(value) {
      return ['black', 'yellow', 'white'].includes(value);
    },
  },
  icon: {
    type: String,
  },
});

const onClickHandler = () => {
  window.dispatchEvent(new CustomEvent(soundEvents.BUTTON));
};
</script>

<template>
  <button
    @click="onClickHandler"
    type="button"
    :class="['c-button-simple', `c-button-simple--theme-${theme}`]"
  >
    <component :is="icons[icon]" class="c-button-simple__icon" />
    <span class="c-button-simple__font">
      <slot></slot>
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
  padding: 0 16px;
  border: 1px solid $color-black;
  color: $color-black;

  &:active {
    scale: 0.95;
  }

  &__font {
    font-weight: $bold;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.03em;
    text-align: center;
    white-space: nowrap;
  }

  &__icon {
    max-height: 16px;
    min-width: 16px;
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

  &--theme-white {
    border: 1px solid $color-white;
    color: $color-white;

    &:hover {
      background: $color-white;
      color: $color-black;
    }
  }
}
</style>
