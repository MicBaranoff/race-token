import { ref } from 'vue';
import Game from '@/components/blocks/Game/game.js';

const gameInstance = ref(null);

export function useGame() {
  const createGame = () => {
    gameInstance.value = new Game();
  };

  const initGame = (container, gameEndCallback, currentCar) => {
    gameInstance.value.init(container, currentCar);

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

  return {
    createGame,
    initGame,
    startGame,
    togglePause,
    destroyGame,
    loadResources,
    gameInstance,
  };
}
