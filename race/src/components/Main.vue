<script setup>
import { ref } from 'vue';

import Header from '@/components/common/Header.vue';
import Start from '@/components/screens/Start.vue';
import ChooseCar from '@/components/screens/ChooseCar.vue';
import Game from '@/components/screens/Game.vue';
import Guide from '@/components/screens/Guide.vue';
import Leaderboard from '@/components/screens/Leaderboard.vue';

const currentComponent = ref(Start);
</script>

<template>
  <div class="main-container">
    <Header />
    <component :is="currentComponent" />
    <!--    <Start />-->
    <!--    <ChooseCar />-->
    <!--    <Game />-->
    <!--    <Guide />-->
    <!--    <Leaderboard />-->
  </div>

  <div class="app-nav">
    <button @click="currentComponent = Start">Start</button>
    <button @click="currentComponent = ChooseCar">ChooseCar</button>
    <button @click="currentComponent = Game">Game</button>
    <button @click="currentComponent = Guide">Guide</button>
    <button @click="currentComponent = Leaderboard">Leaderboard</button>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  background: $color-black;
}

.app-nav {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 5px;
  background: rgba(#fff, 0.4);

  button {
    padding: 5px;
    border: 1px solid black;
    margin: 2px;
  }
}
</style>
