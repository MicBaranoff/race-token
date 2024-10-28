<script setup>
import {
  onBeforeUnmount,
  onMounted,
  useTemplateRef,
  defineEmits,
  defineProps,
  ref,
} from 'vue';

import GameLighter from '@/components/blocks/GameLighter.vue';

import { useGame } from '@/composables/useGame.js';

const { initGame, startGame, togglePause, destroyGame } = useGame();

const gameContainer = useTemplateRef('game-block');

const emit = defineEmits(['onGameEnd', 'onGamePaused', 'onGameStart']);

const props = defineProps({
  currentCar: {
    default: false,
  },
});

const gameStarted = ref(false);

onMounted(() => {
  gameInit();
});

onBeforeUnmount(() => {
  gameDestroy();
});

const gameEndHandler = (event) => {
  emit('onGameEnd', {
    score: event.detail.score,
  });
};

const gameTogglePause = () => {
  togglePause();
};

const gameInit = () => {
  initGame(gameContainer.value, gameEndHandler, props.currentCar);
};

const gameStart = () => {
  startGame();
  emit('onGameStart');
  gameStarted.value = true;
};

const gameDestroy = () => {
  destroyGame(gameEndHandler);
};

defineExpose({ gameTogglePause });
</script>

<template>
  <div ref="game-block" class="game-block">
    <transition name="fade">
      <GameLighter
        v-if="!gameStarted"
        class="game-block__lighter"
        @startGame="gameStart"
      ></GameLighter>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.game-block {
  background: #fff;
  position: relative;

  &__lighter {
    position: absolute;
    top: 0;
  }
}
</style>
