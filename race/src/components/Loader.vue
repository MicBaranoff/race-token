<script setup>
import { ref, computed, onMounted, defineEmits, watch } from 'vue';
import { usePreloadVideo } from '@/composables/preloadVideo.js';

const videos = ['/videos/trailer.mp4', '/videos/trailer-2.mp4'];

const { preloadVideos } = usePreloadVideo();

const emit = defineEmits(['onLoad']);

const progress = ref(0);
const isLoading = ref(false);
const videoLoaded = ref(false);
const gameLoaded = ref(false);

const blocksCount = 20;

const filledBlocks = computed(() =>
  Math.floor((progress.value / 100) * blocksCount)
);
const allLoaded = computed(() => {
  return videoLoaded.value && gameLoaded.value;
});

onMounted(() => {
  startLoading();

  preloadVideos(videos).then(() => {
    videoLoaded.value = true;
  });
});

watch(allLoaded, () => {
  emit('onLoad');
});

const startLoading = () => {
  if (isLoading.value) return;

  isLoading.value = true;
  progress.value = 0;

  window.addEventListener('game-loading', (event) => {
    progress.value = Math.round(event.detail.progress * 100);

    if (progress.value === 100) {
      gameLoaded.value = true;
    }
  });
};
</script>

<template>
  <div class="game-loader">
    <img
      src="/images/loader/loader-logo.svg"
      class="game-loader__logo mobile-hide"
      alt="logo"
    />
    <img
      src="/images/start-logo.svg"
      class="game-loader__logo desktop-hide"
      alt="logo"
    />
    <img src="/images/loader/giga.svg" class="game-loader__giga" alt="giga" />

    <div class="game-loader__block">
      <div class="game-loader__progress">
        <span
          v-for="block in blocksCount"
          :key="block + 'load'"
          :class="[
            'game-loader__progress-item',
            { 'game-loader__progress-item--active': block < filledBlocks },
          ]"
        ></span>
      </div>
      <div class="game-loader__block-row">
        <span class="game-loader__font">Loading...</span>
        <span class="game-loader__font">{{ progress }}%</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-loader {
  width: 100vw;
  height: 100dvh;
  border: 4px solid $color-primary;
  background: url('/images/loader/loader-bg.jpg') center / cover no-repeat;
  padding: 22px 22px 42px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @include is-mobile {
    background: url('/images/loader/loader-bg-mob.jpg') center / cover no-repeat;
    padding: 28px 22px;
  }

  &__font {
    font-weight: $bold;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0.01em;
    color: $color-primary;

    @include is-mobile {
      font-size: 20px;
    }
  }

  &__logo {
    display: block;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;

    @include is-mobile {
      max-width: 255px;
    }
  }

  &__giga {
    display: block;
    width: 100px;
    position: absolute;
    right: 42px;
    bottom: 42px;

    @include is-tablet {
      bottom: 242px;
    }

    @include is-mobile {
      width: 52px;
      right: 26px;
      bottom: 114px;
    }
  }

  &__progress {
    display: inline-flex;
    padding: 10px 0;
    position: relative;
    gap: 8px;
    height: 64px;
    background: $color-black;

    @include is-mobile {
      padding: 7px 0;
      position: relative;
      gap: 4px;
      height: 34px;
    }

    &:before {
      content: '';
      display: block;
      width: 12px;
      height: 64px;
      background: url('/images/loader/loader-border.png') center / 100% 100%
        no-repeat;
      position: absolute;
      top: 0;
      left: -12px;
      scale: -1;
    }

    &:after {
      content: '';
      display: block;
      width: 12px;
      height: 64px;
      background: url('/images/loader/loader-border.png') center / 100% 100%
        no-repeat;
      position: absolute;
      top: 0;
      right: -12px;
    }
  }

  &__progress-item {
    display: block;
    width: 22px;
    height: 44px;
    background: rgba(236, 243, 53, 0.1);

    @include is-mobile {
      width: 10px;
      height: 20px;
    }

    &--active {
      background: $color-primary;
    }
  }

  &__block-row {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
