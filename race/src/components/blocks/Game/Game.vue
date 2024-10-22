<script setup>
import { onMounted, useTemplateRef } from 'vue';

import Game from './game.js';

const gameContainer = useTemplateRef('game-block');

onMounted(() => {
  console.log(gameContainer.value);

  const gameInstance = new Game({
    container: gameContainer.value,
  });

  gameInstance.init();
});
</script>

<template>
  <div ref="game-block" class="game-block"></div>
</template>

<style scoped lang="scss">
.game-block {
  background: #000;
}
</style>
