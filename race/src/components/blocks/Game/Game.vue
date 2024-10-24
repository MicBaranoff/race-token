<script setup>
import {
  onBeforeUnmount,
  onMounted,
  useTemplateRef,
  ref,
  defineEmits,
} from 'vue';

import Game from './game.js';

const gameContainer = useTemplateRef('game-block');
const gameInstance = ref(null);
const emit = defineEmits(['onGameEnd', 'onGamePaused']);

onMounted(() => {
  gameInstance.value = new Game({
    container: gameContainer.value,
  });

  gameInstance.value.init();

  window.addEventListener('game-end', gameEndHandler);

  setTimeout(() => {
    gameInstance.value.start();
  }, 1000);
});

onBeforeUnmount(() => {
  gameInstance.value.destroy();
  gameInstance.value = null;

  window.removeEventListener('game-end', gameEndHandler);
});

const gameEndHandler = (event) => {
  emit('onGameEnd', {
    score: event.detail.score,
  });
};

const gameTogglePause = () => {
  gameInstance.value.togglePause();
};

defineExpose({ gameTogglePause });
</script>

<template>
  <div ref="game-block" class="game-block"></div>
</template>

<style scoped lang="scss">
.game-block {
  background: #000;
}
</style>
