import { ref } from 'vue';
import { useSound } from '@vueuse/sound';

import MenuSound from '@/assets/audio/MENU.mp3';
import PauseSound from '@/assets/audio/PAUSE.mp3';

const isPlayingMenu = ref(false);

export const useAudio = () => {
  const mainMenuSound = useSound(MenuSound, { volume: 1 });
  const pauseSound = useSound(PauseSound, { volume: 1 });

  const playMenu = () => {
    mainMenuSound.stop();

    mainMenuSound.play();
    isPlayingMenu.value = false;
  };

  const pauseMenu = () => {
    mainMenuSound.pause();
    isPlayingMenu.value = true;
  };

  const playPause = () => {
    pauseSound.play();
  };

  return {
    isPlayingMenu,
    playMenu,
    pauseMenu,
    playPause,
  };
};
