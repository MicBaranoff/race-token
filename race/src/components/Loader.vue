<script setup></script>

<template>
  <div class="game-loader">
    <img
      src="/images/loader/loader-logo.svg"
      class="game-loader__logo"
      alt="logo"
    />
    <img src="/images/loader/giga.svg" class="game-loader__giga" alt="giga" />

    <div class="game-loader__block">
      <div class="game-loader__progress">
        <span
          class="game-loader__progress-item game-loader__progress-item--active"
        ></span
        ><span
          class="game-loader__progress-item game-loader__progress-item--active"
        ></span
        ><span
          class="game-loader__progress-item game-loader__progress-item--active"
        ></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span
        ><span class="game-loader__progress-item"></span>
      </div>
      <div class="game-loader__block-row">
        <span class="game-loader__font">Loading...</span>
        <span class="game-loader__font">5%</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-loader {
  width: 100vw;
  height: 100dvh;
  border: 4px solid $color-primary;
  background: url('/images/loader/loader-bg.jpg') center / cover no-repeat;
  padding: 22px 22px 42px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  &__font {
    font-weight: $bold;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0.01em;
    color: $color-primary;
  }

  &__logo {
    display: block;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }

  &__giga {
    display: block;
    width: 100px;
    position: absolute;
    right: 42px;
    bottom: 42px;
  }

  &__progress {
    display: inline-flex;
    padding: 10px 0;
    position: relative;
    gap: 8px;
    height: 64px;
    background: $color-black;

    &:before {
      content: '';
      display: block;
      width: 12px;
      height: 64px;
      background: url('/images/loader/loader-border.png') center / 100% 100%
        no-repeat;
      position: absolute;
      top: 0;
      left: -12px;
      scale: -1;
    }

    &:after {
      content: '';
      display: block;
      width: 12px;
      height: 64px;
      background: url('/images/loader/loader-border.png') center / 100% 100%
        no-repeat;
      position: absolute;
      top: 0;
      right: -12px;
    }
  }

  &__progress-item {
    display: block;
    width: 22px;
    height: 44px;
    background: rgba(236, 243, 53, 0.1);

    &--active {
      background: $color-primary;
    }
  }

  &__block-row {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
