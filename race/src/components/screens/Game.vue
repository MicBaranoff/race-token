<script setup>
import Footer from '@/components/common/Footer.vue';
import GameStats from '@/components/blocks/GameStats.vue';
import CButtonIconWithText from '@/components/ui/CButtonIconWithText.vue';
import ResultPopup from '@/components/popups/ResultPopup.vue';
import PausePopup from '@/components/popups/PausePopup.vue';
import CrashedPopup from '@/components/popups/CrashedPopup.vue';
import ControlsPic from '@/components/blocks/ControlsPic.vue';
import Health from '@/components/blocks/Health.vue';
</script>

<template>
  <div class="game-screen">
    <div class="game-screen__holder">
      <div class="game-screen__container">
        <!--        <ResultPopup />-->
        <!--        <PausePopup />-->
        <CrashedPopup />
      </div>

      <CButtonIconWithText class="game-screen__sound-btn" icon="sound-on">
        sound on <br />
        (S)
      </CButtonIconWithText>

      <CButtonIconWithText class="game-screen__play-btn" icon="pause">
        pause <br />
        (p)
      </CButtonIconWithText>

      <ControlsPic class="game-screen__controls-info" />
      <Health class="game-screen__health" />
    </div>
    <GameStats />
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
  }

  &__sound-btn {
    position: absolute;
    top: 32px;
    left: 42px;
  }

  &__play-btn {
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
</style>
