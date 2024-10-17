<script setup>
import {ref, computed} from "vue";

import Footer from "@/components/common/Footer.vue";
import CButton from "@/components/ui/CButton.vue";
import CButtonIconWithText from "@/components/ui/CButtonIconWithText.vue";

import cars from "@/configs/cars.js";

const currentCarIndex = ref(0);

const currentCarImage = computed(() => {
  return cars[currentCarIndex.value].image;
})

const goNext = () => {
  if (currentCarIndex.value === cars.length - 1) return;

  currentCarIndex.value++;
}

const goPrev = () => {
  if (currentCarIndex.value === 0) return;

  currentCarIndex.value--;
}
</script>

<template>
  <div class="choose-car">
    <div class="choose-car__holder">
      <div class="choose-car__container">
        <div class="choose-car__title">
          <h2 class="choose-car__font choose-car__font--title">CHOOSE YOUR RACE CAR</h2>
        </div>

        <div class="choose-car__picker">
          <button @click="goPrev" class="choose-car__arrow choose-car__arrow--prev">
            <img src="/images/nav/prev.svg" alt="">
            <img src="/images/nav/prev-active.svg" alt="">
          </button>
          <div class="choose-car__picker-picture">
            <img :src="currentCarImage" alt="">
          </div>
          <button @click="goNext" class="choose-car__arrow choose-car__arrow--next">
            <img src="/images/nav/next.svg" alt="">
            <img src="/images/nav/next-active.svg" alt="">
          </button>
        </div>

        <div class="choose-car__button choose-car__button--main">
          <CButton theme="yellow">START RACE</CButton>
        </div>
      </div>

      <CButtonIconWithText class="choose-car__sound-btn" icon="sound-on">
        sound on <br> (S)
      </CButtonIconWithText>
    </div>
    <Footer/>
  </div>
</template>

<style scoped lang="scss">
.choose-car {
  width: 100%;

  &__font {
    &--title {
      font-weight: 400;
      font-size: 40px;
      line-height: 60%;
      letter-spacing: 0.01em;
      color: $color-primary;
    }
  }

  &__sound-btn {
    position: absolute;
    top: 32px;
    left: 42px;
  }

  &__title {
    text-align: center;
    margin-bottom: 158px;
  }

  &__holder{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 756px;
    background: $color-black;
    position: relative;
  }

  &__picker {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__picker-picture {
    width: 444px;
    height: 256px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    margin-top: 96px;
  }

  &__arrow {
    width: 48px;
    height: 256px;

    &:active{
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
  }
}
</style>
