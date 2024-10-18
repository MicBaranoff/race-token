<script setup>

</script>

<template>
  <div class="game-info-row">
    <div class="game-info-row__holder">
      <div class="game-info-row__table-row  game-info-row__table-head">
        <span>#</span>
        <span>PLAYER</span>
        <span>SCORE</span>
        <span>TIME</span>
      </div>
      <div class="game-info-row__table">
        <div class="game-info-row__table-row">
          <span>01</span>
          <span>0x4A6Bf9c7E1d2</span>
          <span>02:28:08</span>
          <span>862</span>
        </div>
        <div :class="['game-info-row__table-row', {'game-info-row__table-row--active': true}]">
          <span>01</span>
          <span>0x4A6Bf9c7E1d2</span>
          <span><span style="margin-right: 13px" class="game-info-row__font game-info-row__font--accent">needs validation </span> (862) </span>
          <span>02:28:08</span>
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
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .game-info-row {
    border-bottom: 2px solid $color-primary;
    background: rgba(16, 16, 16, 0.8);

    &__font {
      &--accent {
        color: $color-primary;
      }
    }

    &__holder {
    }

    &__table {
      width: 100%;
      height: 169px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        width: 16px;
      }

      &::-webkit-scrollbar-track {
        background: $color-grey-light;
      }

      &::-webkit-scrollbar-thumb {
        background: $color-primary;
      }
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
      color: $color-grey-light;
      padding: 0 21px;

      span {
        font-weight: $medium;
        font-size: 14px;
        line-height: 140%;
        text-transform: uppercase;
      }

      span:nth-child(1) {
        width: 10%;
        text-align: left;
      }
      span:nth-child(2) {
        width: 40%;
        text-align: left;
      }
      span:nth-child(3) {
        width: 40%;
        text-align: right;
      }
      span:nth-child(4) {
        width: 10%;
        text-align: right;
      }

      &--main {
        span {
          color: $color-white;
        }
      }

      &--active {
        background: $color-grey-light;
        color: $color-white-1;


        span {
          font-weight: $bold;
        }
      }
    }

    &__table-head {
      background: $color-primary;
      color: $color-black;
      margin-bottom: 2px;

      span {
        font-weight: $bold;
      }

    }
  }
</style>
