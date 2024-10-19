<script setup>
import Footer from '@/components/common/Footer.vue';
import CButtonIconWithText from '@/components/ui/CButtonIconWithText.vue';
import GuidePopup from '@/components/popups/GuidePopup.vue';
</script>

<template>
  <div class="guide-screen">
    <div class="guide-screen__holder">
      <div class="guide-screen__container">
        <GuidePopup class="guide-screen__popup" />
      </div>

      <CButtonIconWithText class="guide-screen__sound-btn" icon="sound-on">
        sound on <br />
        (S)
      </CButtonIconWithText>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.guide-screen {
  width: 100%;

  overflow: hidden;

  &__font {
  }

  &__holder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 756px;
    max-width: 1280px;
    margin: 0 auto;
    background: $color-black;
    position: relative;
  }

  &__container {
    width: 922px;
    height: 692px;
    position: relative;
    background:
      url('/images/game.jpg') center / cover no-repeat,
      $color-grey;
  }

  &__popup {
    position: absolute;
    bottom: 24px;
    left: 24px;
    right: 24px;
  }

  &__sound-btn {
    position: absolute;
    top: 32px;
    left: 42px;
  }
}
</style>
