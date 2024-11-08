<script setup>
import { onMounted, ref } from 'vue';
import soundEvents from '@/configs/soundEvents.js';

const emit = defineEmits(['startGame']);

const countsConfig = [
  {
    image: 'light-0',
    text: null,
    callback: () =>
      window.dispatchEvent(new CustomEvent(soundEvents.LIGHTER_RED)),
  },
  {
    image: 'light-1',
    text: 3,
    callback: () =>
      window.dispatchEvent(new CustomEvent(soundEvents.LIGHTER_RED)),
  },
  {
    image: 'light-2',
    text: 2,
    callback: () =>
      window.dispatchEvent(new CustomEvent(soundEvents.LIGHTER_RED)),
  },
  {
    image: 'light-3',
    text: 1,
    callback: () =>
      window.dispatchEvent(new CustomEvent(soundEvents.LIGHTER_RED)),
  },
  {
    image: 'light-4',
    text: 'lfg',
    callback: () =>
      window.dispatchEvent(new CustomEvent(soundEvents.LIGHTER_GREEN)),
  },
];

const current = ref(0);

onMounted(() => {
  const interval = setInterval(() => {
    current.value++;

    countsConfig[current.value]?.callback();

    if (current.value === countsConfig.length) {
      clearInterval(interval);
      // emit('startGame');
    }
  }, 1000);
});
</script>

<template>
  <div class="game-lighter">
    <div class="game-lighter__holder">
      <div class="game-lighter__main">
        <img
          :src="'/images/lighter/' + countsConfig[current]?.image + '.svg'"
          alt=""
        />
      </div>
      <div class="game-lighter__text">
        <span class="game-lighter__font">{{
          countsConfig[current]?.text
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-lighter {
  width: 100%;
  height: 276px;
  background: url('/images/lighter/light-shadow.png') center / 100% 100%
    no-repeat;
  text-align: center;

  @include is-mobile {
    height: 224px;
  }

  &__font {
    font-size: 64px;
    text-transform: uppercase;
    line-height: 82px;
    text-align: center;
    color: $color-white-1;
    font-family: $font-family-accent;
    font-weight: $bold;
    -webkit-text-stroke: 1px $color-black;

    @include is-mobile {
      font-size: 36px;
      letter-spacing: -0.13em;
    }
  }

  &__holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    @include is-mobile {
      justify-content: flex-start;
      padding-top: 24px;
    }
  }

  &__main {
    width: 274px;
    margin-bottom: 8px;

    @include is-mobile {
      width: 142px;
      margin-bottom: 4px;
    }
  }

  &__text {
    min-height: 82px;

    @include is-mobile {
      min-height: 40px;
    }
  }
}
</style>
