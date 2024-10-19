<script setup></script>

<template>
  <div class="game-trailer">
    <div class="game-trailer__video"></div>
    <div class="game-trailer__overlay">
      <div class="game-trailer__logo">
        <img src="/images/start-logo.svg" alt="logo" />
      </div>

      <div class="game-trailer__info">
        <img src="/images/trailer/info.svg" alt="logo" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-trailer {
  width: 100vw;
  height: 100dvh;

  position: relative;

  &__video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/trailer/trailer.jpg') center / cover no-repeat;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(
      180deg,
      rgba(16, 16, 16, 0) 0%,
      rgba(#101010, 0.8) 100%
    );
    padding-bottom: 75px;
  }

  &__info {
    display: block;
    width: 100%;
    max-width: 1045px;
    margin: 0 auto;
  }

  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 100%;
    max-width: 556px;
    margin: 0 auto;
  }
}
</style>
