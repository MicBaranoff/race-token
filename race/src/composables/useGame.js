import { ref } from 'vue';
import Game from '@/components/blocks/Game/game.js';

const gameInstance = ref(null);

export function useGame() {
  const createGame = () => {
    gameInstance.value = new Game();
  };

  const initGame = (container, gameEndCallback, currentCar, lives) => {
    gameInstance.value.init(container, currentCar, lives);

    window.addEventListener('game-end', gameEndCallback);
  };

  const startGame = () => {
    gameInstance.value.start();
  };

  const destroyGame = (gameEndCallback) => {
    gameInstance.value.destroy();
    window.removeEventListener('game-end', gameEndCallback);
  };

  const togglePause = () => {
    gameInstance.value.togglePause();
  };

  const loadResources = () => {
    gameInstance.value.loadResources();
  };

  const onKeyDown = (e) => {
    gameInstance.value.onKeyDown(e);
  };

  const onKeyUp = (e) => {
    gameInstance.value.onKeyUp(e);
  };

  return {
    createGame,
    initGame,
    startGame,
    togglePause,
    destroyGame,
    onKeyDown,
    onKeyUp,
    loadResources,
    gameInstance,
  };
}
