<script setup>
import { ref, useTemplateRef } from 'vue';

import Footer from '@/components/common/Footer.vue';
import GameStats from '@/components/blocks/GameStats.vue';
import CButtonIconWithText from '@/components/ui/CButtonIconWithText.vue';
import ControlsPic from '@/components/blocks/ControlsPic.vue';
import Health from '@/components/blocks/Health.vue';
import Game from '@/components/blocks/Game/Game.vue';

import ResultPopup from '@/components/popups/ResultPopup.vue';
import PausePopup from '@/components/popups/PausePopup.vue';
import CrashedPopup from '@/components/popups/CrashedPopup.vue';

import { useAudio } from '@/composables/useAudio.js';
import { useTimer } from '@/composables/useTimer.js';

const { resetTimer, pauseTimer, resumeTimer } = useTimer();

const { isPlayingMenu, playMenu, pauseMenu, playPause } = useAudio();

const currentComponent = ref(null);
const gameScores = ref(null);
const gameRerender = ref(0);
const gameRef = ref(null);
const isPaused = ref(false);

const onGameEnd = (data) => {
  currentComponent.value = CrashedPopup;
  gameScores.value = data.score;
};

const onRestart = () => {
  currentComponent.value = null;
  gameRerender.value++;
  resetTimer();
};

const onResume = () => {
  playPause();
  currentComponent.value = null;
  gameRef.value.gameTogglePause();
  isPaused.value = false;
  resumeTimer();
};

const pauseBtnClickHandler = () => {
  playPause();

  isPaused.value = !isPaused.value;
  gameRef.value.gameTogglePause(isPaused.value);

  if (isPaused.value) {
    currentComponent.value = PausePopup;
    pauseTimer();
  } else {
    currentComponent.value = null;
    resumeTimer();
  }
};
</script>

<template>
  <div class="game-screen">
    <div class="game-screen__holder">
      <div class="game-screen__container">
        <Game
          ref="gameRef"
          :key="gameRerender"
          @on-game-end="onGameEnd"
          class="game-screen__main"
        />
        <component
          :score="gameScores"
          @on-restart="onRestart"
          @on-resume="onResume"
          class="game-screen__popup"
          :is="currentComponent"
        />
      </div>

      <CButtonIconWithText
        v-if="isPlayingMenu"
        @click="playMenu"
        class="game-screen__sound-btn"
        icon="sound-off"
      >
        sound off <br />
        (S)
      </CButtonIconWithText>
      <CButtonIconWithText
        v-else
        @click="pauseMenu"
        class="game-screen__sound-btn"
        icon="sound-on"
      >
        sound on <br />
        (S)
      </CButtonIconWithText>

      <CButtonIconWithText
        v-if="!isPaused"
        @click="pauseBtnClickHandler"
        class="game-screen__play-btn"
        icon="pause"
      >
        pause <br />
        (p)
      </CButtonIconWithText>
      <CButtonIconWithText
        v-else
        @click="pauseBtnClickHandler"
        class="game-screen__play-btn"
        icon="play"
      >
        continue <br />
        (p)
      </CButtonIconWithText>

      <ControlsPic class="game-screen__controls-info" />
      <Health class="game-screen__health" />
    </div>
    <GameStats />
  </div>

  <div class="app-nav">
    <button @click="currentComponent = ResultPopup">ResultPopup</button>
    <button @click="currentComponent = PausePopup">PausePopup</button>
    <button @click="currentComponent = CrashedPopup">CrashedPopup</button>
  </div>
</template>

<style scoped lang="scss">
.game-screen {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 90px;
  overflow: hidden;

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
  }

  &__container {
    width: 922px;
    height: 692px;
    background:
      url('/images/game.jpg') center / cover no-repeat,
      $color-grey;
    position: relative;
  }

  &__sound-btn {
    width: 100px;
    position: absolute;
    top: 32px;
    left: 42px;
  }

  &__play-btn {
    width: 100px;
    position: absolute;
    top: 32px;
    right: 64px;
  }

  &__controls-info {
    position: absolute;
    bottom: 64px;
    right: 46px;
  }

  &__health {
    position: absolute;
    bottom: 64px;
    left: 16px;
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
