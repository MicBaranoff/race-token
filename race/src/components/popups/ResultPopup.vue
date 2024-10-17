<script setup>
import GameInfoRow from "@/components/blocks/GameInfoRow.vue";
import CButton from "@/components/ui/CButton.vue";
import CButtonSimpleText from "@/components/ui/CButtonSimpleText.vue";
</script>

<template>
  <div class="result-popup">
    <GameInfoRow />

    <div class="result-popup__holder">
      <CButtonSimpleText class="result-popup__top-btn" theme="yellow" icon="rating">OPEN LEADERBOARD</CButtonSimpleText>
      <div class="result-popup__title">
        <h2 class="result-popup__font result-popup__font--title">congrats!</h2>
      </div>
      <div class="result-popup__subtitle">
        <h2 class="result-popup__font result-popup__font--subtitle">your best score 228</h2>
      </div>
      <div class="result-popup__text">
        <span class="result-popup__font result-popup__font--text">
          BECOME <span class="result-popup__font result-popup__font--accent">TOP 10</span> PLAYERS <br>
          TO WIN some $RVF
        </span>
      </div>
      <div class="result-popup__button">
        <CButton theme="yellow">WANNA PLAY MORE?</CButton>
      </div>

      <div class="result-popup__info">
        <span class="result-popup__font result-popup__font--info">
          follow rocketx & share your score to GET
          <span class="result-popup__font result-popup__font--accent">5 MORE TRIES!</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.result-popup {
  width: 100%;
  height: 100%;
  background: url("/images/shadow.png") center / 100% 100% no-repeat;
  text-align: center;


  &__font {
    &--title {
      font-size: 64px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white;
      font-family: $font-family-accent;
      font-weight: $bold;
    }

    &--subtitle {
      font-size: 32px;
      line-height: 101%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white;
    }

    &--text {
      font-weight: $bold;
      font-size: 20px;
      line-height: 140%;
      letter-spacing: 0.01em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white;
    }

    &--info {
      font-weight: $medium;
      font-size: 16px;
      line-height: 140%;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white;
    }

    &--accent {
      color: $color-primary;
    }
  }

  &__holder{ padding-top: 12px; }

  &__title {
    margin-bottom: 24px;
  }
  &__subtitle {
    margin-bottom: 35px;
  }
  &__text {
    margin-bottom: 29px;
  }
  &__button {
    margin-bottom: 48px;
    display: flex;
    justify-content: center;
  }

  &__top-btn {
    margin: 0 auto 24px;
  }
  &__info {
    margin: 0 auto;
    width: 326px;
    height: 72px;
    background: url('/images/info-bg.png') center / 100% 100% no-repeat;
    padding: 15px 20px;
  }
}
</style>
