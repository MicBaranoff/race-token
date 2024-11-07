<script setup>
import CButtonIcon from '@/components/ui/CButtonIcon.vue';
import soundEvents from '@/configs/soundEvents.js';

defineProps({
  theme: {
    default: 'yellow',
    validator(value) {
      return ['black', 'yellow', 'stroke'].includes(value);
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
  <div @click="onClickHandler" class="button-icon-text">
    <CButtonIcon class="button-icon-text__btn" :theme="theme" :icon="icon" />

    <span class="button-icon-text__font">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped lang="scss">
.button-icon-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &[disabled] {
    opacity: 0.4;
    pointer-events: none;
  }

  &__font {
    font-weight: $medium;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: $color-primary;

    @include is-mobile-and-tablet {
      display: none;
    }
  }

  &__btn {
    margin-bottom: 16px;

    @include is-mobile {
      margin-bottom: 0;
    }
  }
}
</style>
