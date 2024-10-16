<script setup>
import RocketXIcon from '@/assets/svg/rocket-x.svg'
import RacerLegends from '@/assets/svg/racer-legends.svg'
</script>

<template>
  <header class="game-header">
    <div class="game-header__holder">
      <RacerLegends class="game-header__logo game-header__logo--racer"/>
      <RocketXIcon class="game-header__logo game-header__logo--rocket"/>
    </div>
    <div class="game-header__decor"></div>
  </header>
</template>

<style scoped lang="scss">
  .game-header {
    background: $color-primary;
    height: 85px;
    position: relative;

    &__holder {
      display: flex;
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
      background: url("/images/header-decor.png") center / 1280px 100% repeat-x, #000000;
    }
  }
</style>
