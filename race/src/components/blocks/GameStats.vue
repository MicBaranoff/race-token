<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';

import { useTimer } from '@/composables/useTimer.js';

const { formattedTime, startTimer, stopTimer, resetTimer } = useTimer();

const score = ref(0);

onMounted(() => {
  window.addEventListener('update-points', (event) => {
    score.value = event.detail.points;
  });

  window.addEventListener('game-init', () => {
    resetTimer();
    startTimer();
  });

  window.addEventListener('game-end', () => {
    stopTimer();
  });
});

onBeforeUnmount(() => {
  stopTimer();
});
</script>

<template>
  <div class="game-stats">
    <div class="game-stats__title game-stats__title--left">
      <span class="game-stats__font game-stats__font--title">tokens</span>
    </div>
    <div class="game-stats__value game-stats__value--left">
      <span class="game-stats__font game-stats__font--value">{{ score }}</span>
    </div>
    <div class="game-stats__value game-stats__value--right">
      <span class="game-stats__font game-stats__font--value">{{
        formattedTime
      }}</span>
    </div>
    <div class="game-stats__title game-stats__title--right">
      <span class="game-stats__font game-stats__font--title">time</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-stats {
  width: 100%;
  width: 1280px;
  height: 120px;
  background: url('/images/game-stats.png') center / 100% 100% no-repeat;
  margin-top: -20px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  &__font {
    &--title {
      font-weight: $regular;
      font-size: 32px;
      line-height: 140%;
      letter-spacing: -0.13em;
      text-transform: uppercase;
      color: $color-primary;
      font-family: $font-family-accent;
    }

    &--value {
      font-size: 36px;
      line-height: 130%;
      letter-spacing: -0.13em;
      text-transform: uppercase;
      color: $color-primary;
      font-weight: $bold;
      font-family: $font-family-accent;
    }
  }

  &__title {
    position: absolute;
    width: 200px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    &--left {
      left: 50%;
      top: 35px;
      transform: translateX(-480px);
    }

    &--right {
      right: 50%;
      top: 35px;
      transform: translateX(480px);
    }
  }

  &__value {
    position: absolute;
    width: 200px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    &--left {
      left: 50%;
      top: 35px;
      transform: translateX(-260px);
    }

    &--right {
      justify-content: flex-start;
      right: calc(50% - 10px);
      top: 35px;
      transform: translateX(290px);
    }
  }
}
</style>
