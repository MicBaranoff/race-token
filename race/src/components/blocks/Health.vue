<script setup>
import Heart from '@/assets/svg/heart.svg';
import HeartEmpty from '@/assets/svg/heart-empty.svg';
import TimerWhite from '@/components/blocks/Timer.vue';

const livesInitial = 8;

defineProps({
  lives: {
    type: Number,
  },
});
</script>

<template>
  <div class="health-block">
    <div class="health-block__scores">
      <div
        v-for="point in livesInitial"
        :key="point + 'live'"
        class="health-block__item"
      >
        <component
          class="health-block__ico"
          :is="point >= lives + 1 ? HeartEmpty : Heart"
        />
      </div>
    </div>
    <div class="health-block__text">
      <span class="health-block__font health-block__font--text">
        {{ lives }}/{{ livesInitial }} <br />
        tries reset in
      </span>
    </div>
    <TimerWhite class="health-block__timer" />
  </div>
</template>

<style scoped lang="scss">
.health-block {
  text-align: center;

  &__font {
    &--text {
      font-weight: $medium;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      text-align: center;
      color: $color-primary;
    }
  }

  &__text {
    margin-bottom: 8px;

    @include is-touch {
      display: none;
    }

    @include is-mobile {
      display: none;
    }
  }

  &__timer {
    @include is-touch {
      display: none;
    }

    @include is-mobile {
      display: none;
    }
  }

  &__item {
    width: 32px;

    @include is-touch {
      width: 15px;
    }

    @include is-mobile {
      width: 19px;
    }
  }
  &__ico {
    width: 100%;
  }
  &__scores {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    gap: 12px 24px;
    grid-auto-flow: column;
    width: 88px;
    margin: 0 auto 24px;

    @include is-touch {
      display: flex;
      gap: 5px;
      width: auto;
      justify-content: center;
      margin: 0;
    }

    @include is-mobile {
      display: flex;
      gap: 8px;
      width: auto;
      justify-content: center;
      margin: 0;
    }
  }
}
</style>
