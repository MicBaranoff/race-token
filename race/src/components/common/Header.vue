<script setup>
import RocketXIcon from '@/assets/svg/rocket-x.svg';
import RacerLegends from '@/assets/svg/racer-legends.svg';
import CQuestion from '@/components/ui/CQuestion.vue';
</script>

<template>
  <header class="game-header">
    <div class="game-header__holder">
      <RacerLegends class="game-header__logo game-header__logo--racer" />
      <div class="game-header__timer">
        <span class="game-header__font game-header__font--text"
          >ROUND ENDS IN</span
        >
        <div class="game-header__timer-value">
          <span class="game-header__font game-header__font--time"
            >6d 12h 56m
          </span>
          <CQuestion
            text="Each week the leaderboard will be reset and you will be able to fight for the leaderboard again."
          />
        </div>
      </div>
      <RocketXIcon class="game-header__logo game-header__logo--rocket" />
    </div>

    <div class="game-header__decor"></div>
  </header>
</template>

<style scoped lang="scss">
.game-header {
  background: $color-primary;
  height: 85px;
  position: relative;

  &__font {
    &--text {
      font-weight: $medium;
      font-size: 12px;
      line-height: 120%;
      letter-spacing: 0.04em;
      text-align: center;
    }
    &--time {
      font-weight: $bold;
      font-size: 20px;
      line-height: 120%;
      text-align: center;
    }
  }

  &__holder {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    padding: 18px 40px;
  }

  &__logo {
    max-width: 345px;
    display: block;

    &--racer {
      width: 345px;
      height: 28px;
    }

    &--rocket {
      width: 149px;
      height: 28px;
    }
  }

  &__decor {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 18px;
    background:
      url('/images/header-decor.png') center / 1280px 100% repeat-x,
      #000000;
  }

  &__timer {
    text-align: center;
    &-value {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
}
</style>
