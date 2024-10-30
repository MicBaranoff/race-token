<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';

import { useTimer } from '@/composables/useTimer.js';
import Health from '@/components/blocks/Health.vue';

const { formattedTime, startTimer, stopTimer, resetTimer } = useTimer();

const score = ref(0);

onMounted(() => {
  window.addEventListener('update-points', (event) => {
    score.value = event.detail.points;
  });

  window.addEventListener('game-start', () => {
    score.value = 0;
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

    <Health class="game-stats__health desktop-hide" />
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

  @include is-mobile {
    position: relative;
    z-index: 3;
    height: 110px;
    width: 100%;
    width: 360px;
    transform: none;
    left: 0;
    background: url('/images/game-stats-mob.png') center / 100% 100% no-repeat;
    overflow: hidden;
    margin: -8px auto 0;
  }

  &__font {
    &--title {
      font-weight: $regular;
      font-size: 32px;
      line-height: 140%;
      letter-spacing: -0.13em;
      text-transform: uppercase;
      color: $color-primary;
      font-family: $font-family-accent;

      @include is-mobile {
        font-size: 14px;
        line-height: 140%;
        letter-spacing: -0.13em;
      }
    }

    &--value {
      font-size: 36px;
      line-height: 130%;
      letter-spacing: -0.13em;
      text-transform: uppercase;
      color: $color-primary;
      font-weight: $bold;
      font-family: $font-family-accent;

      @include is-mobile {
        font-size: 16px;
        line-height: 140%;
      }
    }
  }

  &__title {
    position: absolute;
    width: 200px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    @include is-mobile {
      width: 100px;
      height: 40px;
    }

    &--left {
      left: 50%;
      top: 35px;
      transform: translateX(-480px);

      @include is-mobile {
        left: 50%;
        top: auto;
        bottom: -3px;
        transform: translateX(-120px);
      }
    }

    &--right {
      right: 50%;
      top: 35px;
      transform: translateX(480px);

      @include is-mobile {
        right: 50%;
        top: auto;
        bottom: -3px;
        transform: translateX(120px);
      }
    }
  }

  &__value {
    position: absolute;
    width: 200px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    @include is-mobile {
      width: 100px;
      height: 40px;
    }

    &--left {
      left: 50%;
      top: 35px;
      transform: translateX(-260px);

      @include is-mobile {
        left: 50%;
        top: auto;
        bottom: 20px;
        transform: translateX(-120px);
      }
    }

    &--right {
      justify-content: flex-start;
      right: calc(50% - 10px);
      top: 35px;
      transform: translateX(290px);

      @include is-mobile {
        right: 50%;
        top: auto;
        bottom: 20px;
        transform: translateX(130px);
      }
    }
  }

  &__health {
    position: absolute;
    top: 29px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
