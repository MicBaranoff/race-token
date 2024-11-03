<script setup>
import CButton from '@/components/ui/CButton.vue';
import CButtonIcon from '@/components/ui/CButtonIcon.vue';
import CQuestion from '@/components/ui/CQuestion.vue';
import Timer from '@/components/blocks/Timer.vue';
import { defineEmits } from 'vue';

const emit = defineEmits([
  'playMenuSound',
  'stopMenuSound',
  'onStartClick',
  'goToLeaders',
]);

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
        <video playsinline autoplay loop muted>
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
              <span
                class="start-screen__font start-screen__font--button mobile-hide"
                >sound off <br />
                (S)</span
              >
            </div>
            <div
              v-else
              @click="emit('stopMenuSound')"
              class="start-screen__button--row"
            >
              <CButtonIcon icon="sound-on" />
              <span
                class="start-screen__font start-screen__font--button mobile-hide"
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
              <CButton @click="emit('onStartClick')">START RACING</CButton>
              <div class="start-screen__timer">
                <span class="start-screen__font start-screen__font--timer"
                  >0/8 tries resets in</span
                >
                <br />
                <Timer class="start-screen__timer-time" theme="black" />
              </div>
            </div>
          </div>

          <div class="start-screen__col">
            <div
              @click="emit('goToLeaders')"
              class="start-screen__button--row start-screen__button--row--reverse"
            >
              <span
                class="start-screen__font start-screen__font--button mobile-hide"
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
  height: calc(100% - 85px);
  background: $color-primary;

  @include is-mobile {
    height: calc(100dvh - 62px);
  }

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

      @include is-mobile {
        font-size: 10px;
      }
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

  &__holder {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__footer {
    padding: 0 40px 23px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    @include is-mobile {
      padding: 0 14px 9px;
    }
  }

  &__footer-holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }

  &__center {
    @include is-mobile {
      height: 100%;
      padding-top: 70px;
    }
  }

  &__footer-logo {
    display: block;
    width: 126px;

    @include is-mobile {
      width: 90px;
    }
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

    @include is-mobile {
      height: calc(100dvh - 360px - 62px);
    }

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

    @include is-mobile {
      width: 255px;
    }
  }

  &__main {
    position: relative;
    height: 345px;
    padding: 40px 40px 100px;
    flex: 1;

    @include is-mobile {
      height: 360px;
      padding: 0 14px 39px;
    }
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
    bottom: 5px;
    text-align: center;

    @include is-mobile {
      position: static;
      margin-top: 8px;
    }

    &-time {
      @include is-mobile {
        margin-top: 4px;
      }
    }
  }

  &__button {
    &--default {
      margin-bottom: 16px;

      @include is-mobile {
        margin-bottom: 8px;
      }
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
      background: url('/images/bottom-decor.png') center / 3000px 100% repeat-x;
    }
  }
}
</style>
