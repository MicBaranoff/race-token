<script setup>
defineProps({
  theme: {
    default: 'stroke',
    validator(value) {
      return ['black', 'yellow', 'stroke'].includes(value)
    }
  },
})
</script>

<template>
  <button type="button" :class="['c-button', `c-button--theme-${theme}`]">
    <span class="c-button__text c-button__font">
      <slot />
    </span>
  </button>
</template>

<style scoped lang="scss">
.c-button {
  min-width: 290px;
  display: block;
  padding: 20px;
  height: 64px;
  background: url('/images/buttons/stroke-button.png') center / 100% 100% no-repeat;
  color: $color-black;

  &__font {
    font-weight: $bold;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0.01em;
    text-transform: uppercase;
  }

  &:active {
    scale: 0.95;
  }

  &--theme-black {
    background: url('/images/buttons/black-button.png') center / 100% 100% no-repeat;
    color: $color-primary;
  }

  &--theme-yellow {
    background: url('/images/buttons/yellow-button.png') center / 100% 100% no-repeat;
    color: $color-black;
  }
}
</style>
