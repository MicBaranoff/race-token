<script setup>
import { defineEmits, ref } from 'vue';

import Header from '@/components/common/Header.vue';
import Start from '@/components/screens/Start.vue';
import ChooseCar from '@/components/screens/ChooseCar.vue';
import Game from '@/components/screens/Game.vue';
import Guide from '@/components/screens/Guide.vue';
import Leaderboard from '@/components/screens/Leaderboard.vue';
import Validate from '@/components/screens/Validate.vue';

const currentComponent = ref(Start);
const currentCar = ref(null);

defineProps({
  isPlayingMenu: {
    default: false,
  },
});

const emit = defineEmits(['playMenuSound', 'stopMenuSound']);

const onChooseCarHandler = (car) => {
  currentCar.value = car;
  currentComponent.value = Guide;
};
</script>

<template>
  <div class="main-container">
    <Header />
    <component
      @playMenuSound="emit('playMenuSound')"
      @stopMenuSound="emit('stopMenuSound')"
      @onStartClick="currentComponent = ChooseCar"
      @skipTutorial="currentComponent = Game"
      @goToLeaders="currentComponent = Leaderboard"
      @onCloseLeaders="currentComponent = Start"
      @onCarChoose="onChooseCarHandler"
      :isPlayingMenu="isPlayingMenu"
      :currentCar="currentCar"
      :is="currentComponent"
    />
  </div>

  <!--  <div class="app-nav">-->
  <!--    <button @click="currentComponent = Start">Start</button>-->
  <!--    <button @click="currentComponent = ChooseCar">ChooseCar</button>-->
  <!--    <button @click="currentComponent = Game">Game</button>-->
  <!--    <button @click="currentComponent = Guide">Guide</button>-->
  <!--    <button @click="currentComponent = Leaderboard">Leaderboard</button>-->
  <!--    <button @click="currentComponent = Validate">Validate</button>-->
  <!--  </div>-->
</template>

<style lang="scss" scoped>
.main-container {
  background: $color-black;
  height: 100%;
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
