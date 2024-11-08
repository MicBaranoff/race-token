<script setup>
import { defineEmits, onBeforeUnmount, onMounted, ref } from 'vue';
import { useTimer } from '@/composables/useTimer.js';
import { useDevice } from '@/composables/useDevice.js';

import soundEvents from '@/configs/soundEvents.js';

import GameStats from '@/components/blocks/GameStats.vue';
import CButtonIconWithText from '@/components/ui/CButtonIconWithText.vue';
import ControlsPic from '@/components/blocks/ControlsPic.vue';
import Health from '@/components/blocks/Health.vue';
import Game from '@/components/blocks/Game/Game.vue';

import ResultPopup from '@/components/popups/ResultPopup.vue';
import PausePopup from '@/components/popups/PausePopup.vue';
import CrashedPopup from '@/components/popups/CrashedPopup.vue';

const { pauseTimer, resumeTimer, resetTimer } = useTimer();
const { isTouchDevice } = useDevice();

const currentComponent = ref(null);
const gameRef = ref(null);

const gameScores = ref(null);
const lives = ref(8);

const gameRerender = ref(0);

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

const showCrashed = (data) => {
  lives.value--;

  if (lives.value === 0) {
    onGameEnd();

    return;
  }

  currentComponent.value = CrashedPopup;

  window.dispatchEvent(new CustomEvent(soundEvents.GAS_STOP));

  gameScores.value = data.detail.score;
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
const onRestart = () => {
  currentComponent.value = null;

  resetTimer();

  isGameEnd.value = false;
  isPaused.value = false;

  gameRerender.value++;
};

const onGameStart = () => {
  window.dispatchEvent(new CustomEvent(soundEvents.GAS_PLAY));

  showPauseBtn.value = true;
  isPaused.value = false;
  isGameStarted.value = true;
};

const onResume = () => {
  window.dispatchEvent(new CustomEvent(soundEvents.PAUSE));
  window.dispatchEvent(new CustomEvent(soundEvents.GAS_PLAY));

  currentComponent.value = null;

  isPaused.value = false;
  showPauseBtn.value = true;

  gameRef.value.gameTogglePause();

  resumeTimer();
};

const pauseBtnClickHandler = () => {
  window.dispatchEvent(new CustomEvent(soundEvents.PAUSE));

  isPaused.value = !isPaused.value;

  if (isPaused.value) {
    currentComponent.value = PausePopup;
    pauseTimer();

    window.dispatchEvent(new CustomEvent(soundEvents.GAS_STOP));
  } else {
    currentComponent.value = null;
    resumeTimer();

    window.dispatchEvent(new CustomEvent(soundEvents.GAS_PLAY));
  }

  gameRef.value.gameTogglePause(isPaused.value);
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'p') {
    if (!showPauseBtn.value) return;

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
          :lives="lives"
          @onGameEnd="onGameEnd"
          @onGameStart="onGameStart"
          class="game-screen__main"
        />
        <component
          :score="gameScores"
          @on-restart="onRestart"
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

      <Health
        v-if="!isTouchDevice"
        :lives="lives"
        class="game-screen__health"
      />
    </div>
  </div>
  <GameStats :lives="lives" />
</template>

<style scoped lang="scss">
.game-screen {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @include is-mobile {
    height: calc(100dvh - 62px);
    padding-bottom: 0;
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

    @include is-tablet {
      height: 100%;
    }

    @include is-mobile {
      height: 100%;
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

    @include is-desktop-max-height {
      width: 722px;
      height: 492px;
    }

    @include is-tablet {
      width: 692px;
      height: 592px;
    }

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

    @include is-tablet {
      top: 32px;
      left: 34px;
    }

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

    @include is-tablet {
      top: 32px;
      right: 34px;
    }

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

    @include is-tablet {
      bottom: 30px;
      left: 0;
    }

    @include is-mobile {
      bottom: 0;
      left: 0;
    }
  }

  &__health {
    position: absolute;
    bottom: 64px;
    left: 16px;

    @include is-tablet {
      position: absolute;
      bottom: 164px;
      left: 16px;
    }

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
