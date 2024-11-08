<script setup>
import Footer from '@/components/common/Footer.vue';
import CButtonIconWithText from '@/components/ui/CButtonIconWithText.vue';
import GuidePopup from '@/components/popups/GuidePopup.vue';

import { defineEmits } from 'vue';

const emit = defineEmits(['playMenuSound', 'stopMenuSound', 'skipTutorial']);

defineProps({
  isPlayingMenu: {
    default: false,
  },
});
</script>

<template>
  <div class="guide-screen">
    <div class="guide-screen__holder">
      <div class="guide-screen__wrapper">
        <div class="guide-screen__container">
          <video playsinline autoplay loop muted>
            <source src="/videos/trailer.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <GuidePopup
            @skipTutorial="emit('skipTutorial')"
            class="guide-screen__popup"
          />
        </div>

        <CButtonIconWithText
          v-if="isPlayingMenu"
          @click="emit('playMenuSound')"
          class="guide-screen__sound-btn"
          icon="sound-off"
        >
          sound off <br />
          (S)
        </CButtonIconWithText>
        <CButtonIconWithText
          v-else
          @click="emit('stopMenuSound')"
          class="guide-screen__sound-btn"
          icon="sound-on"
        >
          sound on <br />
          (S)
        </CButtonIconWithText>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.guide-screen {
  width: 100%;
  overflow: hidden;

  height: calc(100% - 85px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include is-mobile {
    height: calc(100dvh - 62px);
  }

  &__wrapper {
    position: relative;
    width: 100%;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: center;

    @include is-mobile {
      height: 100%;
    }
  }

  &__holder {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    background: $color-black;
    position: relative;

    @include is-mobile {
      height: calc(100dvh - 62px - 50px);
      padding: 16px 14px;
    }
  }

  &__container {
    width: 922px;
    height: 692px;
    position: relative;
    background:
      url('/images/game.jpg') center / cover no-repeat,
      $color-grey;

    @include is-desktop-max-height {
      width: 822px;
      height: 592px;
    }

    @include is-tablet {
      width: 722px;
      height: 592px;
    }

    @include is-mobile {
      height: 100%;
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__popup {
    position: absolute;
    bottom: 24px;
    left: 24px;
    right: 24px;

    @include is-mobile {
      bottom: 14px;
      left: 14px;
      right: 14px;
    }
  }

  &__sound-btn {
    width: 100px;
    position: absolute;
    top: 32px;
    left: 42px;

    @include is-mobile {
      width: auto;
      top: 16px;
      left: 14px;
    }
  }
}
</style>
