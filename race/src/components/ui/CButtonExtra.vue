<script setup>
defineProps({
  theme: {
    default: 'yellow',
    validator(value) {
      return ['yellow'].includes(value)
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
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }

  &:active {
    scale: 0.95;
  }

  &--theme-yellow {
    background: url('/images/buttons/button-extra-bg.png') center / 100% 100% no-repeat;
    color: $color-black;
    position: relative;

    &::before {
      position: absolute;
      display: block;
      width: 90%;
      height: 90%;
      top: 5%;
      left: 5%;
      content: '';
      box-shadow: 0 8px 50px 0 rgba(236, 243, 53, 0.4);

    }
  }
}
</style>
