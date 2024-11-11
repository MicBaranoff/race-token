<script setup>
import { onMounted, ref, computed } from 'vue';

import Main from '@/components/Main.vue';
import Loader from '@/components/Loader.vue';
import Trailer from '@/components/Trailer.vue';
import Rotate from '@/components/popups/Rotate.vue';

import { useAudio } from '@/composables/useAudio.js';
import { useGame } from '@/composables/useGame.js';
import { useDevice } from '@/composables/useDevice.js';

const { playMenu, muteSounds, unmuteSounds, isMuted } = useAudio();
const { createGame, loadResources } = useGame();
const { isTouchDevice } = useDevice();

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
    :class="[{ 'is-touch': isTouchDevice }]"
  />
  <Rotate v-if="showRotatePopup" />
</template>
