<script setup>
import Heart from '@/assets/svg/heart.svg';
import HeartEmpty from '@/assets/svg/heart-empty.svg';
import TimerWhite from '@/components/blocks/TimerWhite.vue';
</script>

<template>
  <div class="health-block">
    <div class="health-block__scores">
      <div class="health-block__item">
        <component class="health-block__ico" :is="HeartEmpty" />
      </div>
      <div class="health-block__item">
        <component class="health-block__ico" :is="Heart" />
      </div>
      <div class="health-block__item">
        <component class="health-block__ico" :is="Heart" />
      </div>
      <div class="health-block__item">
        <component class="health-block__ico" :is="Heart" />
      </div>
      <div class="health-block__item">
        <component class="health-block__ico" :is="Heart" />
      </div>
      <div class="health-block__item">
        <component class="health-block__ico" :is="Heart" />
      </div>
      <div class="health-block__item">
        <component class="health-block__ico" :is="Heart" />
      </div>
      <div class="health-block__item">
        <component class="health-block__ico" :is="Heart" />
      </div>
    </div>
    <div class="health-block__text">
      <span class="health-block__font health-block__font--text">
        7/8 <br />
        tries reset in
      </span>
    </div>
    <TimerWhite />
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
  }

  &__item {
    width: 32px;
  }
  &__ico {
    width: 100%;
  }
  &__scores {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, auto);
    gap: 12px 24px;
    direction: ltr;
    width: 88px;
    margin: 0 auto 24px;
  }
}
</style>
