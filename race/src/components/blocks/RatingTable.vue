<script setup>

</script>

<template>
  <div class="rating-table">
    <div class="game-info__row">
      <span>01</span>
      <span>0x4A6Bf9c7E1d2</span>
      <span>02:28:08</span>
      <span>862</span>
    </div>
    <div class="game-info__row">
      <span>01</span>
      <span>0x4A6Bf9c7E1d2</span>
      <span>02:28:08</span>
      <span>862</span>
    </div>
    <div class="game-info__row">
      <span>01</span>
      <span>0x4A6Bf9c7E1d2</span>
      <span>02:28:08</span>
      <span>862</span>
    </div>
    <img class="rating-table__line" src="/images/line.png" alt="">
    <div class="game-info__row game-info__row--main">
      <span>01</span>
      <span>0x4A6Bf9c7E1d2</span>
      <span>02:28:08</span>
      <span>862</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rating-table {
  &__line {
    display: block;
    width: 100%;
    margin-bottom: 6px;
    height: 1px;
  }

  &__row {
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
