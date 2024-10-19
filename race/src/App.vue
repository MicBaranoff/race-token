<script setup>
import { ref } from 'vue';

import Main from '@/components/Main.vue';
import Loader from '@/components/Loader.vue';
import Trailer from '@/components/Trailer.vue';

const currentComponent = ref(Main);
</script>

<template>
  <component :is="currentComponent" />
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
