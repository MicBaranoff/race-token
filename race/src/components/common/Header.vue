<script setup>
import RocketXIcon from '@/assets/svg/rocket-x.svg';
import RacerLegends from '@/assets/svg/racer-legends.svg';
import RacerLegendsMob from '@/assets/svg/racer-legends-mob.svg';
import CQuestion from '@/components/ui/CQuestion.vue';
</script>

<template>
  <header class="game-header">
    <div class="game-header__holder">
      <RacerLegends
        class="game-header__logo game-header__logo--racer mobile-hide"
      />
      <RacerLegendsMob
        class="game-header__logo game-header__logo--racer desktop-hide"
      />
      <div class="game-header__timer">
        <span class="game-header__font game-header__font--text"
          >ROUND ENDS IN</span
        >
        <div class="game-header__timer-value">
          <span class="game-header__font game-header__font--time"
            >6d 12h 56m
          </span>
          <CQuestion
            class="game-header__timer-info"
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

  @include is-mobile {
    height: 62px;
  }

  &__font {
    &--text {
      font-weight: $medium;
      font-size: 12px;
      line-height: 120%;
      letter-spacing: 0.04em;
      text-align: center;

      @include is-mobile {
        font-size: 10px;
        line-height: 120%;
        letter-spacing: 0.04em;
      }
    }
    &--time {
      font-weight: $bold;
      font-size: 20px;
      line-height: 120%;
      text-align: center;

      @include is-mobile {
        font-size: 12px;
        line-height: 120%;
      }
    }
  }

  &__holder {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    padding: 11px 40px;

    @include is-mobile {
      padding: 11px 14px 0;
      height: 38px;
      align-items: flex-end;
    }
  }

  &__logo {
    max-width: 345px;
    display: block;

    &--mobile {
      display: none;
      @include is-mobile {
        display: block;
      }
    }

    &--desktop {
      @include is-mobile {
        display: none;
      }
    }

    &--racer {
      width: 345px;
      height: 28px;

      @include is-mobile {
        width: 60px;
        height: auto;
        position: relative;
        top: -3px;
      }
    }

    &--rocket {
      width: 149px;
      height: 28px;

      @include is-mobile {
        width: 77px;
        height: 14px;

        position: relative;
        top: -10px;
      }
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
      url('/images/header-decor.png') center / 3000px 100% repeat-x,
      #000000;
  }

  &__timer {
    text-align: center;
    position: relative;
    left: -100px;

    @include is-mobile {
      right: -10px;
      left: auto;
    }
    &-value {
      display: flex;
      align-items: center;
      gap: 4px;

      @include is-mobile {
        justify-content: center;
      }
    }
  }
}
</style>
