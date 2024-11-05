<script setup>
import { defineEmits, ref } from 'vue';

import CButton from '@/components/ui/CButton.vue';

const emit = defineEmits(['trailerFinished']);

const showInfo = ref(false);

setTimeout(() => {
  showInfo.value = true;
}, 1000);
</script>

<template>
  <div class="game-trailer">
    <div class="game-trailer__video">
      <video playsinline autoplay loop muted>
        <source src="/videos/trailer-2.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
    <transition name="fade">
      <div v-if="showInfo" class="game-trailer__overlay">
        <div class="game-trailer__logo">
          <img src="/images/start-logo.svg" alt="logo" />
        </div>
        <CButton
          @click="emit('trailerFinished')"
          class="game-trailer__button"
          theme="yellow"
          >PLAY</CButton
        >
        <div class="game-trailer__info">
          <img class="mobile-hide" src="/images/trailer/info.svg" alt="logo" />
          <img
            class="desktop-hide"
            src="/images/trailer/info-mob.svg"
            alt="logo"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.game-trailer {
  width: 100vw;
  height: 100dvh;
  overflow: hidden;
  position: relative;

  &__video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/trailer/trailer.jpg') center / cover no-repeat;

    video {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(
      180deg,
      rgba(16, 16, 16, 0) 0%,
      rgba(#101010, 0.8) 100%
    );
    padding-bottom: 75px;

    @include is-mobile {
      padding: 38px 32px;
      justify-content: space-between;
    }
  }

  &__info {
    display: block;
    width: 100%;
    max-width: 1045px;
    margin: 0 auto;

    @include is-mobile {
      max-width: 284px;
    }
  }

  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 100%;
    max-width: 556px;
    margin: 0 auto;

    @include is-desktop-max-height {
      top: 30%;
    }

    @include is-mobile {
      position: static;
      transform: none;
    }
  }

  &__button {
    margin: 0 auto 56px;

    @include is-mobile {
      margin: 0;
      order: 3;
    }
  }
}
</style>
