<script setup>
import soundEvents from '@/configs/soundEvents.js';

defineProps({
  theme: {
    default: 'stroke-black',
    validator(value) {
      return ['black', 'yellow', 'stroke-yellow', 'stroke-black'].includes(
        value
      );
    },
  },
  size: {
    default: 'l',
    validator(value) {
      return ['m', 'l', 'xl'].includes(value);
    },
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
    :class="['c-button', `c-button--theme-${theme}`, `c-button--size-${size}`]"
  >
    <span class="c-button__text c-button__font">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
.c-button {
  min-width: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 64px;
  background: url('/images/buttons/stroke-button.png') center / 100% 100%
    no-repeat;
  color: $color-black;

  @include is-mobile {
    min-width: 222px;
    padding: 6px;
    height: 36px;
  }

  &[disabled] {
    opacity: 0.3;
    pointer-events: none;
  }

  $parent: &;

  &__font {
    font-weight: $bold;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0.01em;
    text-transform: uppercase;

    @include is-mobile {
      font-size: 16px;
      line-height: 150%;
    }
  }

  &:active {
    scale: 0.95;
  }

  &--theme-black {
    background: url('/images/buttons/black-button.png') center / 100% 100%
      no-repeat;
    color: $color-primary;
  }

  &--theme-yellow {
    background: url('/images/buttons/yellow-button.png') center / 100% 100%
      no-repeat;
    color: $color-black;
  }

  &--theme-stroke-yellow {
    background: url('/images/buttons/stroke-yellow.png') center / 100% 100%
      no-repeat;
    color: $color-primary;
  }

  &--size-m {
    #{$parent} {
      &__font {
        font-size: 16px;

        @include is-mobile {
          font-size: 11px;
        }
      }
    }
  }
}
</style>
