<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';

import { useTimer } from '@/composables/useTimer.js';
import Health from '@/components/blocks/Health.vue';

const { formattedTime, startTimer, stopTimer, resetTimer } = useTimer();

const score = ref(0);

defineProps({
  lives: {
    type: Number,
  },
});

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
    <img
      class="game-stats__decor game-stats__decor--line mobile-hide"
      src="/images/game-stats/line-2.png"
    />
    <img
      class="game-stats__decor game-stats__decor--left-1 mobile-hide"
      src="/images/game-stats/left-2.png"
    />
    <img
      class="game-stats__decor game-stats__decor--left mobile-hide"
      src="/images/game-stats/left.png"
    />
    <div class="game-stats__center">
      <div class="game-stats__title game-stats__title--left">
        <span class="game-stats__font game-stats__font--title">tokens</span>
      </div>
      <div class="game-stats__value game-stats__value--left">
        <span class="game-stats__font game-stats__font--value">{{
          score
        }}</span>
      </div>
      <img
        class="game-stats__decor game-stats__decor--x mobile-hide"
        src="/images/game-stats/block-x.png"
      />
      <div class="game-stats__value game-stats__value--right">
        <span class="game-stats__font game-stats__font--value">{{
          formattedTime
        }}</span>
      </div>
      <div class="game-stats__title game-stats__title--right">
        <span class="game-stats__font game-stats__font--title">time</span>
      </div>
    </div>
    <img
      class="game-stats__decor game-stats__decor--right mobile-hide"
      src="/images/game-stats/right.png"
    />
    <img
      class="game-stats__decor game-stats__decor--right-2 mobile-hide"
      src="/images/game-stats/right-2.png"
    />
    <img
      class="game-stats__decor game-stats__decor--line mobile-hide"
      src="/images/game-stats/line-2.png"
    />
    <Health :lives="lives" class="game-stats__health desktop-hide" />
  </div>
</template>

<style scoped lang="scss">
.game-stats {
  width: 100%;
  height: 120px;
  //background: url('/images/game-stats.png') center / 100% 100% no-repeat;
  margin-top: -20px;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;

  @include is-mobile {
    position: relative;
    z-index: 3;
    height: 110px;
    width: 100%;
    transform: none;
    left: 0;
    background: url('/images/game-stats/bg-mob.png') center / 100% 100%
      no-repeat;
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

  &__center {
    min-width: 885px;
    height: 100%;
    background: url('/images/game-stats/middle.jpg') center / 100% 100%
      no-repeat;

    @include is-mobile {
      background: none;
    }
  }

  &__decor {
    &--x {
      width: 80px;
      position: absolute;
      left: 51%;
      top: 43px;
      transform: translateX(-50%);
    }

    &--left {
      height: 100%;
      min-width: 120px;
    }
    &--right {
      height: 100%;
      min-width: 120px;
    }

    &--left-1 {
      height: 100%;
      min-width: 120px;
    }
    &--right-1 {
      height: 100%;
      width: 120px;
      min-width: 120px;
    }

    &--line {
      width: auto;
      flex: 1;
      height: 100%;
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
      transform: translateX(-470px);

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
      transform: translateX(470px);

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
    width: 242px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @include is-mobile {
      width: 96px;
      height: 26px;
    }

    &--left {
      left: 50%;
      top: 46px;
      transform: translateX(-283px);
      background: url('/images/game-stats/block-l.png') center / 100% 100%
        no-repeat;

      @include is-mobile {
        left: 50%;
        top: auto;
        bottom: 25px;
        transform: translateX(-120px);
      }
    }

    &--right {
      right: calc(50% - 10px);
      top: 46px;
      transform: translateX(303px);
      background: url('/images/game-stats/block-r.png') center / 100% 100%
        no-repeat;

      @include is-mobile {
        right: 50%;
        top: auto;
        bottom: 25px;
        transform: translateX(122px);
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
