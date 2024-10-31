<script setup>
import Footer from '@/components/common/Footer.vue';
import CButtonIconWithText from '@/components/ui/CButtonIconWithText.vue';
import Close from '@/assets/svg/close.svg';
import RatingTable from '@/components/blocks/RatingTable.vue';
import CButtonExtra from '@/components/ui/CButtonExtra.vue';
import soundEvents from '@/configs/soundEvents.js';

const emit = defineEmits(['onCloseLeaders']);

const closeHandler = () => {
  emit('onCloseLeaders');

  window.dispatchEvent(new CustomEvent(soundEvents.RACE_STOP));
  window.dispatchEvent(new CustomEvent(soundEvents.MENU_PLAY));
};
</script>

<template>
  <div class="leaderboard-screen">
    <div class="leaderboard-screen__holder">
      <div class="leaderboard-screen__container">
        <video playsinline autoplay loop muted>
          <source src="/videos/trailer.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div class="leaderboard-screen__head">
          <div class="leaderboard-screen__title">
            <span
              class="leaderboard-screen__font leaderboard-screen__font--title"
              >leaderboard</span
            >
          </div>
          <div class="leaderboard-screen__info">
            <span
              class="leaderboard-screen__font leaderboard-screen__font--info"
            >
              The top 3 players, along with one randomly selected player from
              the leaderboard, will win a prize from <b>RocketX</b>.
            </span>
          </div>

          <button class="leaderboard-screen__close">
            <Close
              @click="closeHandler"
              class="leaderboard-screen__close-ico"
            />
            <span
              class="leaderboard-screen__font leaderboard-screen__font--close mobile-hide"
              >Close</span
            >
          </button>
        </div>

        <div class="leaderboard-screen__table">
          <RatingTable />
          <CButtonExtra class="leaderboard-screen__button"
            >Validate your best score</CButtonExtra
          >
        </div>
      </div>

      <CButtonIconWithText
        class="leaderboard-screen__sound-btn"
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
.leaderboard-screen {
  width: 100%;

  overflow: hidden;

  height: calc(100% - 85px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @include is-mobile {
    height: calc(100dvh - 62px);
  }

  &__font {
    &--title {
      font-weight: $bold;
      font-size: 48px;
      line-height: 90%;
      letter-spacing: -0.13em;
      text-align: center;
      font-family: $font-family-accent;
      color: $color-primary;

      @include is-mobile {
        font-size: 36px;
        letter-spacing: -0.13em;
      }
    }

    &--info {
      display: block;
      font-weight: $medium;
      font-size: 10px;
      line-height: 140%;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: $color-black;

      @include is-mobile {
        font-size: 8px;
        line-height: 140%;
        letter-spacing: 0.04em;
      }
    }

    &--close {
      font-weight: $medium;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      text-align: center;
      color: $color-primary;
    }
  }

  &__button {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
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
    }
  }

  &__container {
    width: 922px;
    height: 692px;
    position: relative;
    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%),
      url('/images/game.jpg') center / cover no-repeat;

    @include is-mobile {
      width: 100%;
      height: 100%;
    }

    &:before {
      position: absolute;
      content: '';
      display: block;
      z-index: 2;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.8) 100%
      );
      width: 100%;
      height: 100%;
    }

    video {
      object-fit: cover;
      width: 100%;
      height: 100%;
      position: absolute;
    }

    > div {
      position: relative;
      z-index: 3;
    }
  }

  &__sound-btn {
    position: absolute;
    top: 32px;
    left: 42px;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    padding: 22px 20px 0;

    @include is-mobile {
      flex-wrap: wrap;
    }
  }

  &__title {
    @include is-mobile {
      order: 3;
      margin-top: 16px;
      text-align: center;
      width: 100%;
    }
  }

  &__close-ico {
    display: block;
    width: 44px;
    height: 44px;
    margin: 0 auto 19px;

    @include is-mobile {
      width: 32px;
      height: 32px;
      margin: 0;
    }
  }

  &__info {
    margin: 0 auto;
    width: 330px;
    height: 58px;
    background: $color-primary;
    padding: 8px 16px;

    @include is-mobile {
      width: 264px;
      padding: 8px 16px;
      height: auto;
      margin: 0;
    }
  }

  &__table {
    width: 640px;
    height: 529px;
    background: $color-black;
    margin: 0 auto;
    position: relative;

    @include is-mobile {
      width: 332px;
      height: 360px;
      margin-top: 24px;
    }
  }
}
</style>
