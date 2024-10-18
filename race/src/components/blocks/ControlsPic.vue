<script setup></script>

<template>
  <div class="controls-pic">
    <img src="/images/ui/arrows.svg" alt="" class="controls-pic__img" />
    <span class="controls-pic__font controls-pic__font--text">
      use arrows to move
    </span>
  </div>
</template>

<style scoped lang="scss">
.controls-pic {
  width: 100px;

  &__font {
    &--text {
      font-weight: $medium;
      font-size: 12px;
      line-height: 130%;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white-1;
      display: block;
    }
  }

  &__img {
    width: 100%;
    margin-bottom: 16px;
  }
}
</style>
