<script setup>
  import RacerLogoIcon from '@/assets/svg/racer-legends-main-yellow.svg';
  import CButton from "@/components/ui/CButton.vue";
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

        </div>

        <div class="start-screen__center">
          <CButton class="start-screen__button start-screen__button--default" theme="black">start</CButton>
          <CButton>rating</CButton>
        </div>

        <div class="start-screen__col">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.start-screen {
  width: 100%;

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
