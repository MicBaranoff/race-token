<script setup>
import { useDevice } from '@/composables/useDevice.js';

const { isTouchDevice } = useDevice();
</script>

<template>
  <div class="controls-pic">
    <template v-if="!isTouchDevice">
      <img
        src="/images/ui/arrows.svg"
        alt="arr"
        class="controls-pic__img mobile-hide"
      />
      <span class="controls-pic__font controls-pic__font--text mobile-hide">
        use arrows to move
      </span>
    </template>

    <template v-else>
      <div class="controls-pic__holder">
        <img
          src="/images/ui/arrow-mob.svg"
          alt="arr"
          class="controls-pic__img"
        />
        <span class="controls-pic__font controls-pic__font--text">
          use arrows to move
        </span>
        <img
          src="/images/ui/arrow-mob.svg"
          alt="arr"
          class="controls-pic__img controls-pic__img--left"
        />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.controls-pic {
  width: 100px;

  @include is-tablet {
    width: 100%;
  }

  @include is-mobile {
    width: 100%;
    height: 168px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: url('/images/ui/shadow-mob-1.png') center / 100% 100% no-repeat;
    padding: 15px;
  }

  &__font {
    &--text {
      font-weight: $medium;
      font-size: 12px;
      line-height: 130%;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white-1;
      display: block;

      @include is-tablet {
        font-size: 18px;
      }
    }
  }

  &__holder {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  &__img {
    width: 100%;
    margin-bottom: 16px;

    @include is-tablet {
      width: 58px;
      margin: 0;
    }

    @include is-mobile {
      width: 28px;
      margin: 0;
    }

    &--left {
      scale: -1;
    }
  }
}
</style>
