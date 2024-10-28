<script setup>
defineProps({
  theme: {
    default: 'white',
    validator(value) {
      return ['black', 'white'].includes(value);
    },
  },
  icon: {
    type: String,
  },
});
</script>

<template>
  <div :class="['timer', `timer--theme-${theme}`]">
    <span class="timer__font"> <b>23</b>h <b>59</b>m <b>59</b>s </span>
  </div>
</template>

<style scoped lang="scss">
.timer {
  padding: 8px 10px;
  border: 2px solid;
  color: $color-white-1;
  display: inline-block;

  @include is-mobile {
    padding: 0 4px;
    border: 1px solid;
  }

  &__font {
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-align: center;

    @include is-mobile {
      font-size: 12px;
    }
  }

  &--theme {
    &-white {
      color: $color-white-1;
      border-color: $color-white-1;
    }
    &-black {
      color: $color-black;
      border-color: $color-black;
    }
  }
}
</style>
