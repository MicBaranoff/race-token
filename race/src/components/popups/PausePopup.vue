<script setup>
import CButton from '@/components/ui/CButton.vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['onResume']);
</script>

<template>
  <div class="pause-popup">
    <div class="pause-popup__holder">
      <div class="pause-popup__title">
        <h2 class="pause-popup__font pause-popup__font--title">pause</h2>
      </div>
      <div class="pause-popup__text">
        <span class="pause-popup__font pause-popup__font--text">
          PRESS (P)
        </span>
      </div>
      <div class="pause-popup__button">
        <CButton @click="emit('onResume')" theme="yellow">CONTINUE</CButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pause-popup {
  width: 100%;
  height: 100%;
  background: url('/images/shadow.png') center / 100% 100% no-repeat;
  text-align: center;

  &__font {
    &--title {
      font-size: 64px;
      letter-spacing: -0.13em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white-1;
      font-family: $font-family-accent;
      font-weight: $bold;
      -webkit-text-stroke: 1px $color-black;
    }

    &--text {
      font-weight: $medium;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      text-align: center;
      color: $color-primary;
    }
  }

  &__holder {
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &__title {
    margin-bottom: 24px;
  }
  &__text {
    margin-bottom: 40px;
  }

  &__subtext {
    max-width: 375px;
  }
  &__button {
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
  }
}
</style>
