<script setup>
import CButton from '@/components/ui/CButton.vue';
import GameInfoRow from '@/components/blocks/GameInfoRow.vue';
import CButtonSimpleText from '@/components/ui/CButtonSimpleText.vue';
import { defineEmits, onMounted, ref } from 'vue';

const randomTitle = [
  'YOU CRASHED OUT',
  'YOU NEED TO QUIT',
  'NAH YOU JUST BAD',
  "DON'T TRY AGAIN",
  'GET A JOB',
  'END IT ALL',
  'YOU A SIMP',
  'YOU A LOSER',
];

const currentTitle = ref(randomTitle[0]);

defineProps({
  score: {
    type: Number,
  },
});

onMounted(() => {
  currentTitle.value =
    randomTitle[Math.floor(Math.random() * randomTitle.length + 1)];
});

const emit = defineEmits(['onRestart', 'goToLeaders']);
</script>

<template>
  <div class="crash-popup">
    <GameInfoRow class="mobile-hide" />

    <div class="crash-popup__holder">
      <div class="crash-popup__row">
        <div class="crash-popup__subtext mobile-hide"></div>

        <CButtonSimpleText
          @click="emit('goToLeaders')"
          class="crash-popup__top-btn"
          theme="white"
          icon="rating"
          >OPEN LEADERBOARD</CButtonSimpleText
        >
      </div>

      <div class="crash-popup__title">
        <h2 class="crash-popup__font crash-popup__font--title">
          {{ currentTitle }}
        </h2>
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
        >REDEEM YOURSELF</CButton
      >
      <CButton class="crash-popup__button" theme="stroke-yellow"
        >FLEX ON THE HATERS</CButton
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

      @include is-mobile {
        font-size: 36px;
        letter-spacing: -0.13em;
      }
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

      @include is-mobile {
        font-size: 24px;
        letter-spacing: -0.13em;
      }
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

      @include is-mobile {
        font-size: 10px;
        line-height: 150%;
        letter-spacing: 0.04em;
      }
    }

    &--accent {
      color: $color-primary;
    }
  }

  &__holder {
    padding: 12px 16px;

    @include is-mobile {
      padding-top: 16px;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    @include is-mobile {
      justify-content: center;
    }
  }

  &__title {
    margin-bottom: 24px;

    @include is-mobile {
      margin-bottom: 8px;
    }
  }
  &__subtitle {
    margin-bottom: 35px;

    @include is-mobile {
      margin-bottom: 16px;
    }
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

    @include is-mobile {
      width: 222px;
      margin: 0 auto 8px;
    }
  }
  &__info {
    margin: 0 auto;
    width: 365px;
    height: 76px;
    background: $color-black;
    padding: 15px 20px;

    @include is-mobile {
      padding: 8px 18px;
      width: 100%;
      height: auto;
      margin-top: 16px;
    }
  }
}
</style>
