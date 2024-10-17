<script setup>

</script>

<template>
  <div class="game-info-row">
    <div class="game-info-row__holder">
      <div class="game-info-row__left">
        <div class="game-info-row__left-row">
          <span class="game-info-row__font game-info-row__font--text">
            best <br> score:
          </span>
          <span class="game-info-row__font game-info-row__font--score">228</span>
        </div>
        <div class="game-info-row__left-row">
          <span class="game-info-row__font game-info-row__font--text">
            best <br> time:
          </span>
          <span class="game-info-row__font game-info-row__font--time">00:56:19</span>
        </div>
      </div>
      <img src="/images/slash.svg" alt="" class="game-info-row__slash">
      <div class="game-info-row__right">
        <div class="game-info-row__table">
          <div class="game-info-row__table-row">
            <span>01</span>
            <span>0x4A6Bf9c7E1d2</span>
            <span>02:28:08</span>
            <span>862</span>
          </div>
          <div class="game-info-row__table-row">
            <span>01</span>
            <span>0x4A6Bf9c7E1d2</span>
            <span>02:28:08</span>
            <span>862</span>
          </div>
          <div class="game-info-row__table-row">
            <span>01</span>
            <span>0x4A6Bf9c7E1d2</span>
            <span>02:28:08</span>
            <span>862</span>
          </div>
          <img class="game-info-row__table-line" src="/images/line.png" alt="">
          <div class="game-info-row__table-row game-info-row__table-row--main">
            <span>01</span>
            <span>0x4A6Bf9c7E1d2</span>
            <span>02:28:08</span>
            <span>862</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .game-info-row {
    border-bottom: 2px solid $color-primary;
    padding: 14px 50px 17px;

    &__font {
      &--text {
        font-weight: $medium;
        font-size: 16px;
        line-height: 110%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        text-align: right;
        color: $color-primary;
      }

      &--score {
        font-size: 48px;
        line-height: 110%;
        text-transform: uppercase;
        text-align: center;
        color: $color-primary;
      }

      &--time {
        font-size: 22px;
        line-height: 110%;
        text-transform: uppercase;
        text-align: center;
        color: $color-primary;
      }
    }

    &__holder {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 24px;
    }

    &__slash {
      width: 44px;
      height: 96px;
    }

    &__left-row {
      display: flex;
      align-items: center;
      gap: 24px;
      text-align: right;
      margin-bottom: 11px;

      &:last-child {
        margin-bottom: 0;
      }

      span:first-child {
        width: 76px;
      }
    }

    &__table {
      width: 440px;
    }

    &__table-line {
      display: block;
      width: 100%;
      margin-bottom: 6px;
      height: 1px;
    }

    &__table-row {
      display: flex;
      margin-bottom: 6px;

      span {
        display: block;
        font-weight: $medium;
        font-size: 16px;
        line-height: 110%;
        text-transform: uppercase;
        color: $color-primary;
      }

      span:nth-child(1) {
        width: 52px;
      }
      span:nth-child(2) {
        width: 230px;
      }
      span:nth-child(3) {
        width: 90px;
        text-align: right;
      }
      span:nth-child(4) {
        width: 58px;
        text-align: right;
      }

      &--main {
        span {
          color: $color-white;
        }
      }
    }
  }
</style>
