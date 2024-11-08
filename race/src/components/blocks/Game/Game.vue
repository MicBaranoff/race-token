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
import { useDevice } from '@/composables/useDevice.js';

const { initGame, startGame, togglePause, destroyGame, onKeyDown, onKeyUp } =
  useGame();
const { isTouchDevice } = useDevice();

const gameContainer = useTemplateRef('game-block');

const emit = defineEmits(['onGameEnd', 'onGamePaused', 'onGameStart']);

const props = defineProps({
  currentCar: {
    default: false,
  },
  lives: {
    type: Number,
  },
});

const gameStarted = ref(false);
const isLeftArrowActive = ref(false);
const isRightArrowActive = ref(false);

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
  initGame(gameContainer.value, gameEndHandler, props.currentCar, props.lives);
};

const gameStart = () => {
  startGame();
  emit('onGameStart');
  gameStarted.value = true;
};

const gameDestroy = () => {
  destroyGame(gameEndHandler);
};

const onTouchArrow = (e) => {
  if (e === 'left') {
    onKeyDown({ key: 'ArrowLeft' });
    isLeftArrowActive.value = true;
  } else {
    onKeyDown({ key: 'ArrowRight' });
    isRightArrowActive.value = true;
  }
};

const onTouchArrowEnd = (e) => {
  if (e === 'left') {
    onKeyUp({ key: 'ArrowLeft' });
    isLeftArrowActive.value = false;
  } else {
    onKeyUp({ key: 'ArrowRight' });
    isRightArrowActive.value = false;
  }
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

    <div v-if="gameStarted && isTouchDevice" class="game-block__nav">
      <button
        @touchstart="onTouchArrow('left')"
        @touchend="onTouchArrowEnd('left')"
        class="game-block__arrow"
        :class="{ 'game-block__arrow--active': isLeftArrowActive }"
      >
        <img src="/images/game/nav/left.svg" alt="" />
        <img src="/images/game/nav/left-active.svg" alt="" />
      </button>
      <button
        @touchstart="onTouchArrow('right')"
        @touchend="onTouchArrowEnd('right')"
        class="game-block__arrow"
        :class="{ 'game-block__arrow--active': isRightArrowActive }"
      >
        <img src="/images/game/nav/right.svg" alt="" />
        <img src="/images/game/nav/right-active.svg" alt="" />
      </button>
    </div>
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

  &__nav {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    user-select: none;

    position: absolute;
    bottom: 0;
    left: 0;

    display: flex;
  }

  &__arrow {
    width: 52px;
    height: 86px;

    img:nth-child(2) {
      display: none;
    }

    &--active {
      img:nth-child(1) {
        display: none;
      }
      img:nth-child(2) {
        display: block;
      }
    }
  }
}
</style>
