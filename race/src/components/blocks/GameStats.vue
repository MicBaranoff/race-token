<script setup>

</script>

<template>
  <div class="game-stats">
    <div class="game-stats__title game-stats__title--left">
      <span class="game-stats__font game-stats__font--title">tokens</span>
    </div>
    <div class="game-stats__value game-stats__value--left">
      <span class="game-stats__font game-stats__font--value">16</span>
    </div>
    <div class="game-stats__value game-stats__value--right">
      <span class="game-stats__font game-stats__font--value">00:01:23</span>
    </div>
    <div class="game-stats__title game-stats__title--right">
      <span class="game-stats__font game-stats__font--title">time</span>
    </div>





  </div>
</template>

<style scoped lang="scss">
  .game-stats {
    width: 100%;
    height: 120px;
    background: url('/images/game-stats.png') center / 100% 100% no-repeat;
    margin-top: -20px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    min-width: 1280px;

    &__font {
      &--title {
        font-size: 20px;
        line-height: 140%;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        color: $color-primary;
      }

      &--value {
        font-size: 32px;
        line-height: 130%;
        letter-spacing: 0.3em;
        text-transform: uppercase;
        color: $color-primary;
      }
    }

    &__title {
      position: absolute;
      width: 200px;
      height: 80px;
      border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;

      &--left {
        left: 50%;
        top: 40px;
        transform: translateX(-450px);
      }

      &--right {
        right: 50%;
        top: 40px;
        transform: translateX(480px);
      }
    }

    &__value {
      position: absolute;
      width: 200px;
      height: 80px;
      border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;

      &--left {
        left: 50%;
        top: 40px;
        transform: translateX(-250px);
      }

      &--right {
        right: 50%;
        top: 40px;
        transform: translateX(280px);
      }
    }
  }
</style>
