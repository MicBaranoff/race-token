<script setup>
import GameInfoRow from '@/components/blocks/GameInfoRow.vue';
import CButtonExtra from '@/components/ui/CButtonExtra.vue';
import CButtonSimpleText from '@/components/ui/CButtonSimpleText.vue';

defineProps({
  score: {
    type: Number,
  },
});
</script>

<template>
  <div class="result-popup">
    <GameInfoRow class="mobile-hide" />

    <div class="result-popup__holder">
      <div class="result-popup__row">
        <div class="result-popup__subtext mobile-hide">
          <span class="result-popup__font result-popup__font--subtext">
            The top 3 players, along with one randomly selected player from the
            leaderboard, will win a prize from <b>RocketX</b>.
          </span>
        </div>

        <CButtonSimpleText
          class="result-popup__top-btn"
          theme="white"
          icon="rating"
          >OPEN LEADERBOARD</CButtonSimpleText
        >
      </div>

      <div class="result-popup__title">
        <h2 class="result-popup__font result-popup__font--title">congrats!</h2>
      </div>
      <div class="result-popup__subtitle">
        <h2 class="result-popup__font result-popup__font--subtitle">
          your
          <span class="result-popup__font result-popup__font--accent"
            >best score {{ score }}</span
          >
        </h2>
      </div>
      <div class="result-popup__text">
        <span class="result-popup__font result-popup__font--text">
          You’re one step closer to winning!
        </span>
      </div>
      <div class="result-popup__button">
        <CButtonExtra theme="yellow"
          >Validate your <br class="desktop-hide" />
          best score</CButtonExtra
        >
      </div>

      <div class="result-popup__info">
        <span class="result-popup__font result-popup__font--info">
          Click to share your score on X and <i>secure</i> your
          <i>spot</i> DURING THE COMPETITION!
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.result-popup {
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
      -webkit-text-stroke: 1px $color-black;

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

      @include is-mobile {
        font-size: 12px;
        line-height: 140%;
        letter-spacing: 0.04em;
      }
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
    margin-bottom: 24px;
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
