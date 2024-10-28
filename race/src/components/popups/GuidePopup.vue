<script setup>
import CButtonSimpleText from '@/components/ui/CButtonSimpleText.vue';

import { defineEmits } from 'vue';

const emit = defineEmits(['playMenuSound', 'stopMenuSound', 'skipTutorial']);
</script>

<template>
  <div class="guide-popup">
    <div class="guide-popup__header">
      <div class="guide-popup__title">
        <span class="guide-popup__font guide-popup__font--title">
          RACE GUIDE
        </span>
      </div>
      <CButtonSimpleText @click="emit('skipTutorial')" icon="skip"
        >SKIP</CButtonSimpleText
      >
    </div>
    <div class="guide-popup__row">
      <div class="guide-popup__item">
        <img
          class="guide-popup__item-pic mobile-hide"
          src="/images/guide/guide-1.svg"
          alt=""
        />
        <img
          class="guide-popup__item-pic desktop-hide"
          src="/images/guide/guide-1-mob.svg"
          alt=""
        />
        <span class="guide-popup__font guide-popup__font--text">
          COLLECT all <br />
          the COINS
        </span>
      </div>
      <div class="guide-popup__item">
        <img
          class="guide-popup__item-pic"
          src="/images/guide/guide-2.svg"
          alt=""
        />
        <span class="guide-popup__font guide-popup__font--text">
          awoid gas fees & other cars
        </span>
      </div>
      <div class="guide-popup__item">
        <img
          class="guide-popup__item-pic mobile-hide"
          src="/images/guide/guide-3.svg"
          alt=""
        />
        <img
          class="guide-popup__item-pic desktop-hide"
          src="/images/guide/guide-3-mob.svg"
          alt=""
        />
        <span class="guide-popup__font guide-popup__font--text">
          use arrows <br />
          to move car
        </span>
      </div>
      <div class="guide-popup__item">
        <img
          class="guide-popup__item-pic"
          src="/images/guide/guide-4.svg"
          alt=""
        />
        <span class="guide-popup__font guide-popup__font--text">
          You have 8 tries (resets in 24h)
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.guide-popup {
  background: $color-black;

  &__font {
    &--title {
      display: block;
      font-weight: $bold;
      font-size: 32px;
      line-height: 75%;
      letter-spacing: -0.13em;
      font-family: $font-family-accent;

      @include is-mobile {
        font-size: 24px;
        line-height: 100%;
        letter-spacing: -0.13em;
      }
    }

    &--text {
      font-weight: $medium;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white-1;

      @include is-mobile {
        display: block;
        font-size: 12px;
        line-height: 140%;
        letter-spacing: -0.02em;
      }
    }
  }

  &__header {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $color-primary;
    padding: 0 16px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    padding: 16px 14px;

    @include is-mobile {
      flex-wrap: wrap;
      margin-bottom: 8px;
    }
  }

  &__item {
    width: 210px;
    text-align: center;
    @include is-mobile {
      width: 50%;
    }
  }

  &__item-pic {
    width: 100%;
    margin-bottom: 6px;

    @include is-mobile {
      margin: 0;
      height: 56px;
    }
  }
}
</style>
