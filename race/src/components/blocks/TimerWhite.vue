<script setup></script>

<template>
  <div class="timer-white">
    <span class="timer-white__font"> <b>23</b>h <b>59</b>m <b>59</b>s </span>
  </div>
</template>

<style scoped lang="scss">
.timer-white {
  padding: 8px 10px;
  border: 2px solid $color-white-1;

  &__font {
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: center;
    color: $color-white-1;
  }
}
</style>
