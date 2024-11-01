<script setup>
import { defineEmits, onBeforeUnmount, onMounted, ref } from 'vue';

import soundEvents from '@/configs/soundEvents.js';

import GameStats from '@/components/blocks/GameStats.vue';
import CButtonIconWithText from '@/components/ui/CButtonIconWithText.vue';
import ControlsPic from '@/components/blocks/ControlsPic.vue';
import Health from '@/components/blocks/Health.vue';
import Game from '@/components/blocks/Game/Game.vue';

import ResultPopup from '@/components/popups/ResultPopup.vue';
import PausePopup from '@/components/popups/PausePopup.vue';
import CrashedPopup from '@/components/popups/CrashedPopup.vue';

import { useTimer } from '@/composables/useTimer.js';

const { pauseTimer, resumeTimer } = useTimer();

const currentComponent = ref(null);
const gameScores = ref(null);
const gameRerender = ref(0);
const gameRef = ref(null);
const isPaused = ref(false);
const isGameEnd = ref(false);
const isGameStarted = ref(false);
const showPauseBtn = ref(false);

const emit = defineEmits(['playMenuSound', 'stopMenuSound', 'goToLeaders']);

defineProps({
  isPlayingMenu: {
    default: false,
  },
  currentCar: {
    default: null,
  },
});

onMounted(() => {
  window.addEventListener('update-lives', showCrashed);
});

onBeforeUnmount(() => {
  window.removeEventListener('update-lives', showCrashed);
});

const showCrashed = () => {
  currentComponent.value = CrashedPopup;

  // window.dispatchEvent(new CustomEvent(soundEvents.PAUSE));
  window.dispatchEvent(new CustomEvent(soundEvents.GAS_STOP));

  isPaused.value = !isPaused.value;
  showPauseBtn.value = false;
  gameRef.value.gameTogglePause(isPaused.value);

  pauseTimer();
};

const onGameEnd = (data) => {
  currentComponent.value = ResultPopup;
  gameScores.value = data.score;
  isGameEnd.value = true;
  isGameStarted.value = false;
  showPauseBtn.value = false;

  window.dispatchEvent(new CustomEvent(soundEvents.GAS_STOP));
  window.dispatchEvent(new CustomEvent(soundEvents.WIN));
};
//
// const onRestart = () => {
//   currentComponent.value = null;
//   resetTimer();
//   isGameEnd.value = false;
//
//   gameRerender.value++;
// };

const onGameStart = () => {
  window.dispatchEvent(new CustomEvent(soundEvents.GAS_PLAY));
  showPauseBtn.value = true;
  isGameStarted.value = true;
};

const onResume = () => {
  window.dispatchEvent(new CustomEvent(soundEvents.PAUSE));
  window.dispatchEvent(new CustomEvent(soundEvents.GAS_PLAY));

  currentComponent.value = null;
  gameRef.value.gameTogglePause();
  isPaused.value = false;
  showPauseBtn.value = true;
  resumeTimer();
};

const pauseBtnClickHandler = () => {
  window.dispatchEvent(new CustomEvent(soundEvents.PAUSE));

  isPaused.value = !isPaused.value;
  gameRef.value.gameTogglePause(isPaused.value);

  if (isPaused.value) {
    currentComponent.value = PausePopup;
    pauseTimer();
    window.dispatchEvent(new CustomEvent(soundEvents.GAS_STOP));
  } else {
    currentComponent.value = null;
    resumeTimer();
    window.dispatchEvent(new CustomEvent(soundEvents.GAS_PLAY));
  }
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'p') {
    pauseBtnClickHandler();
  }
});
</script>

<template>
  <div class="game-screen">
    <div class="game-screen__holder">
      <div class="game-screen__container">
        <Game
          ref="gameRef"
          :key="gameRerender"
          :currentCar="currentCar"
          @onGameEnd="onGameEnd"
          @onGameStart="onGameStart"
          class="game-screen__main"
        />
        <component
          :score="gameScores"
          @on-restart="onResume"
          @on-resume="onResume"
          @goToLeaders="emit('goToLeaders')"
          class="game-screen__popup"
          :is="currentComponent"
        />
      </div>

      <CButtonIconWithText
        v-if="isPlayingMenu"
        @click="emit('playMenuSound')"
        class="game-screen__sound-btn"
        icon="sound-off"
      >
        sound off <br />
        (S)
      </CButtonIconWithText>
      <CButtonIconWithText
        v-else
        @click="emit('stopMenuSound')"
        class="game-screen__sound-btn"
        icon="sound-on"
      >
        sound on <br />
        (S)
      </CButtonIconWithText>

      <CButtonIconWithText
        v-if="!isPaused && !isGameEnd && showPauseBtn"
        @click="pauseBtnClickHandler"
        class="game-screen__play-btn"
        icon="pause"
      >
        pause <br />
        (p)
      </CButtonIconWithText>
      <CButtonIconWithText
        v-if="isPaused && !isGameEnd && showPauseBtn"
        @click="pauseBtnClickHandler"
        class="game-screen__play-btn"
        icon="play"
      >
        continue <br />
        (p)
      </CButtonIconWithText>

      <transition name="fade">
        <ControlsPic v-if="!isGameStarted" class="game-screen__controls-info" />
      </transition>

      <Health class="game-screen__health mobile-hide" />
    </div>
    <GameStats />
  </div>

  <!--  <div class="app-nav">-->
  <!--    <button @click="currentComponent = ResultPopup">ResultPopup</button>-->
  <!--    <button @click="currentComponent = PausePopup">PausePopup</button>-->
  <!--    <button @click="currentComponent = CrashedPopup">CrashedPopup</button>-->
  <!--  </div>-->
</template>

<style scoped lang="scss">
.game-screen {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  //padding-bottom: 90px;
  overflow: hidden;

  @include is-mobile {
    height: calc(100dvh - 62px);
    padding-bottom: 0;
  }

  &__font {
  }

  &__popup {
    position: relative;
    z-index: 2;
  }

  &__main {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  &__holder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 756px;
    background: $color-black;
    position: relative;

    @include is-mobile {
      height: calc(100% - 102px);
      overflow: hidden;
    }
  }

  &__container {
    width: 922px;
    height: 692px;
    background:
      url('/images/game.jpg') center / cover no-repeat,
      $color-grey;
    position: relative;

    @include is-mobile {
      height: 100%;
    }
  }

  &__sound-btn {
    width: 100px;
    position: absolute;
    z-index: 11;
    top: 32px;
    left: 42px;

    @include is-mobile {
      width: auto;
      top: 16px;
      left: 14px;
    }
  }

  &__play-btn {
    width: 100px;
    position: absolute;
    top: 32px;
    right: 64px;
    z-index: 11;

    @include is-mobile {
      width: auto;
      top: 16px;
      right: 14px;
    }
  }

  &__controls-info {
    position: absolute;
    bottom: 64px;
    right: 46px;

    @include is-mobile {
      bottom: 0;
      left: 0;
    }
  }

  &__health {
    position: absolute;
    bottom: 64px;
    left: 16px;

    @include is-mobile {
      position: absolute;
      bottom: 64px;
      left: 16px;
    }
  }
}

.app-nav {
  position: fixed;
  z-index: 100;
  bottom: 60px;
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
