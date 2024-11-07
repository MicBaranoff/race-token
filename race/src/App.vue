<script setup>
import { onMounted, ref, computed } from 'vue';

import Main from '@/components/Main.vue';
import Loader from '@/components/Loader.vue';
import Trailer from '@/components/Trailer.vue';
import Rotate from '@/components/popups/Rotate.vue';

import { useAudio } from '@/composables/useAudio.js';
import { useGame } from '@/composables/useGame.js';

const { playMenu, muteSounds, unmuteSounds, isMuted } = useAudio();
const { createGame, loadResources } = useGame();

const isMobile = ref(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
const currentComponent = ref(Loader);
const isLandscapeOrientation = ref(
  !window.matchMedia('(orientation: portrait)').matches
);

const showRotatePopup = computed(() => {
  return isMobile.value && isLandscapeOrientation.value;
});

onMounted(() => {
  createGame();
  loadResources();

  window
    .matchMedia('(orientation: portrait)')
    .addEventListener('change', (e) => {
      const portrait = e.matches;

      isLandscapeOrientation.value = !portrait;
    });
});

const trailerFinishedHandler = () => {
  currentComponent.value = Main;
  playMenu();
};
</script>

<template>
  <component
    v-show="!showRotatePopup"
    @onLoad="currentComponent = Trailer"
    @trailerFinished="trailerFinishedHandler"
    @playMenuSound="unmuteSounds"
    @stopMenuSound="muteSounds"
    :isPlayingMenu="isMuted"
    :is="currentComponent"
  />
  <Rotate v-if="showRotatePopup" />
</template>

<style lang="scss" scoped>
.app-nav {
  position: fixed;
  z-index: 100;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px;
  background: rgba(#fff, 0.4);

  button {
    padding: 5px;
    border: 1px solid black;
    margin: 2px;
  }
}
</style>
