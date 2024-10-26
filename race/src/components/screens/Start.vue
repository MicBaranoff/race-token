<script setup>
import CButton from '@/components/ui/CButton.vue';
import CButtonIcon from '@/components/ui/CButtonIcon.vue';
import CQuestion from '@/components/ui/CQuestion.vue';
import Timer from '@/components/blocks/Timer.vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['playMenuSound', 'stopMenuSound', 'onStartClick']);

defineProps({
  isPlayingMenu: {
    default: false,
  },
});
</script>

<template>
  <div class="start-screen">
    <div class="start-screen__holder">
      <div class="start-screen__video">
        <video autoplay loop muted>
          <source src="/videos/trailer-2.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <img src="/images/start-logo.svg" class="start-screen__logo" />
      </div>

      <div class="start-screen__main">
        <div class="start-screen__decor start-screen__decor--bottom"></div>
        <div class="start-screen__main-container">
          <div class="start-screen__col">
            <div
              v-if="isPlayingMenu"
              @click="emit('playMenuSound')"
              class="start-screen__button--row"
            >
              <CButtonIcon icon="sound-off" />
              <span class="start-screen__font start-screen__font--button"
                >sound off <br />
                (S)</span
              >
            </div>
            <div
              v-else
              @click="emit('stopMenuSound')"
              class="start-screen__button--row"
            >
              <CButtonIcon @click="pauseMenu" icon="sound-on" />
              <span class="start-screen__font start-screen__font--button"
                >sound on <br />
                (S)</span
              >
            </div>
          </div>

          <div class="start-screen__center">
            <CButton
              class="start-screen__button start-screen__button--default"
              theme="black"
              disabled
              >CONNECT WALLET</CButton
            >
            <div class="start-screen__button start-screen__button--start">
              <div class="start-screen__timer">
                <span class="start-screen__font start-screen__font--timer"
                  >0/8 tries resets in</span
                >
                <Timer theme="black" />
              </div>
              <CButton @click="emit('onStartClick')">START GAME</CButton>
            </div>
          </div>

          <div class="start-screen__col">
            <div
              class="start-screen__button--row start-screen__button--row--reverse"
            >
              <span class="start-screen__font start-screen__font--button"
                >check out leaderboard</span
              >
              <CButtonIcon icon="rating" />
            </div>
          </div>

          <div class="start-screen__footer">
            <div class="start-screen__footer-holder">
              <a
                href="#"
                class="start-screen__font start-screen__font--text start-screen__footer-link"
                >About Competition
                <CQuestion
                  position="top"
                  text="The top 3 players, along with one randomly selected player from the leaderboard, will
            win a prize from RocketX."
                />
              </a>
              <img
                class="start-screen__footer-logo"
                src="/images/rocket-logo-mini.svg"
                alt="rocket"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.start-screen {
  width: 100%;
  background: $color-primary;

  &__font {
    &--button {
      font-weight: $medium;
      font-size: 16px;
      line-height: 120%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    &--text {
      font-weight: $medium;
      font-size: 14px;
      line-height: 130%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: $color-black;
    }

    &--timer {
      color: $color-black;
      font-weight: $medium;
      font-size: 12px;
      line-height: 140%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      text-align: center;
    }
  }

  &__footer {
    padding: 0 40px 23px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &__footer-holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }

  &__footer-logo {
    display: block;
    width: 126px;
  }

  &__footer-link {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__video {
    width: 100%;
    height: 484px;
    background: url('/images/video.jpg') center / cover no-repeat;
    position: relative;

    video {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: grayscale(1);
    }
  }

  &__logo {
    width: 556px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__main {
    position: relative;
    height: 345px;
    padding: 40px 40px 100px;
  }

  &__main-container {
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__col {
    width: 260px;
  }

  &__timer {
    position: absolute;
    right: -150px;
    text-align: center;
  }

  &__button {
    &--default {
      margin-bottom: 16px;
    }

    &--start {
      position: relative;
    }

    &--row {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    &--row--reverse {
      justify-content: flex-end;
      text-align: right;
      margin-top: 24px;
    }
  }

  &__decor {
    position: absolute;

    &--bottom {
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 54px;
      background: url('/images/bottom-decor.png') center / 1280px 100% repeat-x;
    }
  }
}
</style>
