<script setup>
  import RacerLogoIcon from '@/assets/svg/racer-legends-main-yellow.svg';

  import CButton from "@/components/ui/CButton.vue";
  import CButtonIcon from "@/components/ui/CButtonIcon.vue";
</script>

<template>
  <div class="start-screen">
    <div class="start-screen__holder">
      <div class="start-screen__video">
        <RacerLogoIcon class="start-screen__logo" />
      </div>

      <div class="start-screen__main">
        <div class="start-screen__decor start-screen__decor--bottom"></div>
        <div class="start-screen__col">
          <div class="start-screen__button--row">
            <CButtonIcon icon="sound-on" />
            <span class="start-screen__font start-screen__font--button">sound off <br> (S)</span>
          </div>
        </div>

        <div class="start-screen__center">
          <CButton class="start-screen__button start-screen__button--default" theme="black">start</CButton>
          <CButton>rating</CButton>
        </div>

        <div class="start-screen__col">
          <div class="start-screen__button--row start-screen__button--row--reverse">
            <span class="start-screen__font start-screen__font--button">check out leaderboard</span>
            <CButtonIcon icon="rating" />
          </div>
          <div class="start-screen__button--row start-screen__button--row--reverse">
            <span class="start-screen__font start-screen__font--button">follow <br> us on x</span>
            <CButtonIcon icon="x" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.start-screen {
  width: 100%;

  &__font {
    &--button {
      font-weight: $medium;
      font-size: 16px;
      line-height: 120%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
  }

  &__video {
    width: 100%;
    height: 484px;
    background: url('/images/video.jpg') center / cover no-repeat;
    position: relative;
  }

  &__logo {
    width: 556px;
    height: 210px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__main {
    background: $color-primary;
    position: relative;
    height: 345px;
    padding: 40px;

    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__col {
    width: 260px;
  }

  &__center {
    width: 326px;
    padding-bottom: 60px;
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
      background: url("/images/bottom-decor.png") center / 1280px 100% repeat-x;
    }
  }
}
</style>
