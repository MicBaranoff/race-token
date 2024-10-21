<script setup>
import { onBeforeMount, ref } from 'vue';

import Main from '@/components/Main.vue';
import Loader from '@/components/Loader.vue';
import Trailer from '@/components/Trailer.vue';

import { usePreloadVideo } from '@/composables/preloadVideo.js';

const { preloadVideos } = usePreloadVideo();

onBeforeMount(() => {
  preloadVideos(['/videos/trailer.mp4', '/videos/trailer-2.mp4']).then(
    (res) => {
      console.log(res);
    }
  );
});

const currentComponent = ref(Loader);
</script>

<template>
  <component
    @onLoad="currentComponent = Trailer"
    @trailerFinished="currentComponent = Main"
    :is="currentComponent"
  />
  <!--  <Main />-->
  <!--  <Loader />-->
  <!--  <Trailer />-->

  <div class="app-nav">
    <button @click="currentComponent = Main">Main</button>
    <button @click="currentComponent = Loader">Loader</button>
    <button @click="currentComponent = Trailer">Trailer</button>
  </div>
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
