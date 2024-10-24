<script setup>
import CButton from '@/components/ui/CButton.vue';
import GameInfoRow from '@/components/blocks/GameInfoRow.vue';
import CButtonSimpleText from '@/components/ui/CButtonSimpleText.vue';
import { defineEmits } from 'vue';

defineProps({
  score: {
    type: Number,
  },
});

const emit = defineEmits(['onRestart']);
</script>

<template>
  <div class="crash-popup">
    <GameInfoRow />

    <div class="crash-popup__holder">
      <div class="crash-popup__row">
        <div class="crash-popup__subtext"></div>

        <CButtonSimpleText
          class="crash-popup__top-btn"
          theme="white"
          icon="rating"
          >OPEN LEADERBOARD</CButtonSimpleText
        >
      </div>

      <div class="crash-popup__title">
        <h2 class="crash-popup__font crash-popup__font--title">you crashed!</h2>
      </div>
      <div class="crash-popup__subtitle">
        <h2 class="crash-popup__font crash-popup__font--subtitle">
          your
          <span class="crash-popup__font crash-popup__font--accent"
            >best score {{ score }}</span
          >
        </h2>
      </div>
      <CButton
        @click="emit('onRestart')"
        class="crash-popup__button"
        theme="yellow"
        >TRY AGAIN</CButton
      >
      <CButton class="crash-popup__button" theme="stroke-yellow" size="m"
        >Share and VALIDATE YOUR SCORE</CButton
      >

      <div class="crash-popup__info">
        <span class="crash-popup__font crash-popup__font--info">
          Click to share your score on X and <i>secure</i> your
          <i>spot</i> DURING THE COMPETITION!
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.crash-popup {
  width: 100%;
  height: 100%;
  background: url('/images/shadow.png') center / 100% 100% no-repeat;
  text-align: center;

  &__font {
    &--title {
      font-size: 64px;
      letter-spacing: -0.13em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white-1;
      font-family: $font-family-accent;
      font-weight: $bold;
      -webkit-text-stroke: 1px $color-black;
    }

    &--subtitle {
      font-size: 32px;
      line-height: 101%;
      letter-spacing: -0.13em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white-1;
      font-family: $font-family-accent;
      font-weight: $bold;
      -webkit-text-stroke: 1px $color-black;
    }

    &--text {
      font-weight: $medium;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white;
    }

    &--subtext {
      display: block;
      font-weight: $medium;
      font-size: 9px;
      line-height: 140%;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      text-align: left;
      color: $color-primary;
    }

    &--accent {
      color: $color-primary;
    }

    &--info {
      font-weight: $medium;
      font-size: 12px;
      line-height: 150%;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white;
    }

    &--accent {
      color: $color-primary;
    }
  }

  &__holder {
    padding: 12px 16px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  &__title {
    margin-bottom: 24px;
  }
  &__subtitle {
    margin-bottom: 35px;
  }
  &__text {
    margin-bottom: 29px;
  }

  &__subtext {
    max-width: 375px;
  }
  &__button {
    width: 326px;
    margin: 0 auto 16px;
    display: flex;
    justify-content: center;
  }
  &__info {
    margin: 0 auto;
    width: 365px;
    height: 76px;
    background: $color-black;
    padding: 15px 20px;
  }
}
</style>
