<script setup>
import CButton from '@/components/ui/CButton.vue';
import CButtonIcon from '@/components/ui/CButtonIcon.vue';
</script>

<template>
  <div class="start-screen">
    <div class="start-screen__holder">
      <div class="start-screen__video">
        <img src="/images/start-logo.svg" class="start-screen__logo" />
      </div>

      <div class="start-screen__main">
        <div class="start-screen__decor start-screen__decor--bottom"></div>
        <div class="start-screen__main-container">
          <div class="start-screen__col">
            <div class="start-screen__button--row">
              <CButtonIcon icon="sound-on" />
              <span class="start-screen__font start-screen__font--button"
                >sound off <br />
                (S)</span
              >
            </div>
          </div>

          <div class="start-screen__center">
            <CButton
              class="start-screen__button start-screen__button--default"
              theme="black"
              >CONNECT WALLET</CButton
            >
            <CButton>START GAME</CButton>
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
              <a href="#" class="start-screen__font start-screen__font--text"
                >About Competition
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

  &__video {
    width: 100%;
    height: 484px;
    background: url('/images/video.jpg') center / cover no-repeat;
    position: relative;
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

  &__center {
    width: 326px;
  }

  &__button {
    &--default {
      margin-bottom: 16px;
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
