import { computed, ref } from 'vue';

const time = ref(0);
const intervalId = ref(null);
const isPaused = ref(true);

export function useTimer() {
  const formattedTime = computed(() => {
    const milliseconds = Math.floor((time.value % 1000) / 10);
    const totalSeconds = Math.floor(time.value / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds)}`;
  });

  const padNumber = (number, digits = 2) => {
    return number.toString().padStart(digits, '0');
  };
  const startTimer = () => {
    if (intervalId.value) return;
    intervalId.value = setInterval(() => {
      if (isPaused.value) return;

      time.value += 10;
    }, 10);
    isPaused.value = false;
  };
  const stopTimer = () => {
    clearInterval(intervalId.value);
    intervalId.value = null;
  };
  const pauseTimer = () => {
    isPaused.value = true;
  };
  const resumeTimer = () => {
    isPaused.value = false;
  };

  const resetTimer = () => {
    stopTimer();
    time.value = 0;
  };

  return {
    formattedTime,
    startTimer,
    stopTimer,
    resetTimer,
    pauseTimer,
    resumeTimer,
  };
}
