<script setup>
import Rotate from '@/assets/svg/rotate.svg';
</script>

<template>
  <div class="rotate-popup">
    <div class="rotate-popup__handler">
      <div class="rotate-popup__logo">
        <img src="/images/start-logo.svg" alt="logo" />
      </div>
      <div>
        <Rotate class="rotate-popup__ico" />
        <div class="rotate-popup__text">
          <span class="rotate-popup__font rotate-popup__font--text"
            >Rotate your screen to start the race</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rotate-popup {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: url('/images/rotate.jpg') center / cover no-repeat;
  border: 4px solid $color-primary;

  &__font {
    &--text {
      font-weight: $medium;
      font-size: 16px;
      line-height: 120%;
      color: $color-primary;
      text-transform: uppercase;
    }
  }

  &__handler {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 48px 20px;
    text-align: center;
  }

  &__ico {
    margin: 0 auto 16px;
    display: block;
    width: 35px;
  }

  &__logo {
    width: 256px;
    margin: 0 auto;
  }
}
</style>
