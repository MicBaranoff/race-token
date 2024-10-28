<script setup>
import { ref, computed } from 'vue';

import Footer from '@/components/common/Footer.vue';
import CButton from '@/components/ui/CButton.vue';
import CButtonIconWithText from '@/components/ui/CButtonIconWithText.vue';

import cars from '@/configs/cars.js';

const currentCarIndex = ref(0);

const emit = defineEmits(['playMenuSound', 'stopMenuSound', 'onChooseCar']);

defineProps({
  isPlayingMenu: {
    default: false,
  },
});

const currentCarImage = computed(() => {
  return cars[currentCarIndex.value].image;
});

const goNext = () => {
  if (currentCarIndex.value === cars.length - 1) return;

  currentCarIndex.value++;
};

const goPrev = () => {
  if (currentCarIndex.value === 0) return;

  currentCarIndex.value--;
};
</script>

<template>
  <div class="choose-car">
    <div class="choose-car__holder">
      <div class="choose-car__container">
        <div class="choose-car__title">
          <h2 class="choose-car__font choose-car__font--title">
            CHOOSE YOUR <br class="desktop-hide" />
            RACE CAR
          </h2>
        </div>

        <div>
          <div class="choose-car__picker">
            <button
              @click="goPrev"
              class="choose-car__arrow choose-car__arrow--prev"
            >
              <img src="/images/nav/prev.svg" alt="" />
              <img src="/images/nav/prev-active.svg" alt="" />
            </button>
            <div class="choose-car__picker-picture">
              <img :src="currentCarImage" alt="" />
            </div>
            <button
              @click="goNext"
              class="choose-car__arrow choose-car__arrow--next"
            >
              <img src="/images/nav/next.svg" alt="" />
              <img src="/images/nav/next-active.svg" alt="" />
            </button>
          </div>

          <div class="choose-car__dots">
            <button
              v-for="(item, index) in cars"
              :key="item.id + 'dot'"
              :class="[
                'choose-car__dot',
                { 'choose-car__dot--active': index === currentCarIndex },
              ]"
              @click="currentCarIndex = index"
            ></button>
          </div>
        </div>

        <div class="choose-car__button choose-car__button--main">
          <CButton
            @click="emit('onCarChoose', cars[currentCarIndex].id)"
            theme="yellow"
            >START RACE</CButton
          >
        </div>
      </div>

      <CButtonIconWithText
        v-if="isPlayingMenu"
        @click="emit('playMenuSound')"
        class="choose-car__sound-btn"
        icon="sound-off"
      >
        sound off <br />
        (S)
      </CButtonIconWithText>
      <CButtonIconWithText
        v-else
        @click="emit('stopMenuSound')"
        class="choose-car__sound-btn"
        icon="sound-on"
      >
        sound on <br />
        (S)
      </CButtonIconWithText>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.choose-car {
  width: 100%;

  &__font {
    &--title {
      font-family: $font-family-accent;
      font-weight: $bold;
      font-size: 48px;
      line-height: 90%;
      letter-spacing: -0.13em;
      color: $color-primary;

      @include is-mobile {
        font-size: 24px;
        line-height: 1;
        letter-spacing: -0.13em;
      }
    }
  }

  &__dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 42px;

    @include is-mobile {
      gap: 8px;
    }
  }

  &__dot {
    -webkit-appearance: none;
    background: none;
    border: 2px solid #d9d9d9;
    width: 12px;
    height: 12px;

    @include is-mobile {
      width: 8px;
      height: 8px;
      border: 1px solid #d9d9d9;
    }

    &--active {
      background: #d9d9d9;
    }
  }

  &__sound-btn {
    width: 100px;
    position: absolute;
    top: 32px;
    left: 42px;

    @include is-mobile {
      display: none;
    }
  }

  &__title {
    text-align: center;
    margin-bottom: 158px;

    @include is-mobile {
      margin: 0;
    }
  }

  &__holder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 756px;
    max-width: 1280px;
    margin: 0 auto;
    background: $color-black;
    position: relative;

    @include is-mobile {
      height: calc(100dvh - 62px - 50px);
      padding: 16px 14px;
    }
  }

  &__picker {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__picker-picture {
    width: 444px;
    height: 256px;

    @include is-mobile {
      width: 202px;
      height: 119px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    margin-top: 40px;

    @include is-mobile {
      margin: 0;
    }
  }

  &__arrow {
    width: 48px;
    height: 256px;

    @include is-mobile {
      width: 24px;
      height: 80px;
    }

    &:active {
      scale: 0.95;
    }

    img:last-child {
      display: none;
    }

    &:hover {
      img:first-child {
        display: none;
      }
      img:last-child {
        display: block;
      }
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__container {
    width: 922px;
    height: 692px;
    background: $color-grey;
    padding: 32px 79px;

    @include is-mobile {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      padding: 8px 0 40px 0;
    }
  }
}
</style>
