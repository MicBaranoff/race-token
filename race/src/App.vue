<script setup>
import { onMounted, ref } from 'vue';

import Main from '@/components/Main.vue';
import Loader from '@/components/Loader.vue';
import Trailer from '@/components/Trailer.vue';

import { useAudio } from '@/composables/useAudio.js';
import { useGame } from '@/composables/useGame.js';

const { playMenu, muteSounds, unmuteSounds, isMuted } = useAudio();
const { createGame, loadResources } = useGame();

const currentComponent = ref(Loader);

onMounted(() => {
  createGame();
  loadResources();
});

const trailerFinishedHandler = () => {
  currentComponent.value = Main;
  playMenu();
};
</script>

<template>
  <component
    @onLoad="currentComponent = Trailer"
    @trailerFinished="trailerFinishedHandler"
    @playMenuSound="unmuteSounds"
    @stopMenuSound="muteSounds"
    :isPlayingMenu="isMuted"
    :is="currentComponent"
  />
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
