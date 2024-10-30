import { ref } from 'vue';
import { useSound } from '@vueuse/sound';

import soundEvents from '@/configs/soundEvents.js';

import MenuSound from '@/assets/audio/MENU.mp3';
import PauseSound from '@/assets/audio/PAUSE.mp3';
import RaceSound from '@/assets/audio/RACE_SOUND.mp3';
import CarSound from '@/assets/audio/ENGINE.mp3';
import CrashCar from '@/assets/audio/CRASH.mp3';
import Crash from '@/assets/audio/GAS_FEES_CRASH.mp3';
import Win from '@/assets/audio/WIN.mp3';
import Coin from '@/assets/audio/COIN.mp3';
import LighterRed from '@/assets/audio/lighter/RED.mp3';
import LighterGreen from '@/assets/audio/lighter/GREEN.mp3';

const isMuted = ref(false);

export const useAudio = () => {
  const mainMenuSound = useSound(MenuSound, { volume: 0.7, loop: true });
  const pauseSound = useSound(PauseSound, { volume: 1 });
  const raceSound = useSound(RaceSound, { volume: 0.6, loop: true });
  const carSound = useSound(CarSound, { volume: 0.7, loop: true });
  const carCrash = useSound(CrashCar, { volume: 1 });
  const carCrashNpc = useSound(Crash, { volume: 1 });
  const winSound = useSound(Win, { volume: 1 });
  const coinSound = useSound(Coin, { volume: 1 });
  const lighterRedSound = useSound(LighterRed, { volume: 1 });
  const lighterGreenSound = useSound(LighterGreen, { volume: 1 });

  const muteSounds = () => {
    isMuted.value = true;
    mainMenuSound.sound.value.mute(true);
    pauseSound.sound.value.mute(true);
    raceSound.sound.value.mute(true);
    carSound.sound.value.mute(true);
    carCrash.sound.value.mute(true);
    carCrashNpc.sound.value.mute(true);
    winSound.sound.value.mute(true);
    coinSound.sound.value.mute(true);
    lighterRedSound.sound.value.mute(true);
    lighterGreenSound.sound.value.mute(true);
  };
  const unmuteSounds = () => {
    isMuted.value = false;
    mainMenuSound.sound.value.mute(false);
    pauseSound.sound.value.mute(false);
    raceSound.sound.value.mute(false);
    carSound.sound.value.mute(false);
    carCrash.sound.value.mute(false);
    carCrashNpc.sound.value.mute(false);
    winSound.sound.value.mute(false);
    coinSound.sound.value.mute(false);
    lighterRedSound.sound.value.mute(false);
    lighterGreenSound.sound.value.mute(false);
  };

  const playMenu = () => {
    mainMenuSound.play();
  };

  const stopMenu = () => {
    mainMenuSound.stop();
  };

  const playRace = () => {
    raceSound.play();
  };

  const stopRace = () => {
    mainMenuSound.stop();
  };

  const playGas = () => {
    carSound.play();
  };

  const stopGas = () => {
    carSound.stop();
  };

  const playPause = () => {
    pauseSound.play();
  };

  const playCarCrash = () => {
    carCrash.play();
  };

  const playCarCrashNpc = () => {
    carCrashNpc.play();
  };

  const playWinSound = () => {
    winSound.play();
  };

  const playCoinSound = () => {
    coinSound.play();
  };

  const playLighterRedSound = () => {
    lighterRedSound.play();
  };

  const playLighterGreenSound = () => {
    lighterGreenSound.play();
  };

  window.addEventListener(soundEvents.PAUSE, playPause);
  window.addEventListener(soundEvents.RACE_PLAY, playRace);
  window.addEventListener(soundEvents.RACE_STOP, stopRace);
  window.addEventListener(soundEvents.MENU_STOP, stopMenu);
  window.addEventListener(soundEvents.MENU_PLAY, playMenu);
  window.addEventListener(soundEvents.GAS_PLAY, playGas);
  window.addEventListener(soundEvents.GAS_STOP, stopGas);
  window.addEventListener(soundEvents.CAR_CRASH, playCarCrash);
  window.addEventListener(soundEvents.CAR_CRASH_NPC, playCarCrashNpc);
  window.addEventListener(soundEvents.WIN, playWinSound);
  window.addEventListener(soundEvents.COIN, playCoinSound);
  window.addEventListener(soundEvents.LIGHTER_RED, playLighterRedSound);
  window.addEventListener(soundEvents.LIGHTER_GREEN, playLighterGreenSound);

  return {
    isMuted,
    muteSounds,
    unmuteSounds,
    playMenu,
  };
};
