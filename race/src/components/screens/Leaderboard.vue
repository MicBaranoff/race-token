<script setup>
import Footer from '@/components/common/Footer.vue';
import CButtonIconWithText from '@/components/ui/CButtonIconWithText.vue';
import Close from '@/assets/svg/close.svg';
import RatingTable from '@/components/blocks/RatingTable.vue';
</script>

<template>
  <div class="leaderboard-screen">
    <div class="leaderboard-screen__holder">
      <div class="leaderboard-screen__container">
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
            <Close class="leaderboard-screen__close-ico" />
            <span
              class="leaderboard-screen__font leaderboard-screen__font--close"
              >Close</span
            >
          </button>
        </div>

        <div class="leaderboard-screen__table">
          <RatingTable />
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

  &__font {
    &--title {
      font-weight: $bold;
      font-size: 48px;
      line-height: 90%;
      letter-spacing: -0.13em;
      text-align: center;
      font-family: $font-family-accent;
      color: $color-primary;
    }

    &--info {
      display: block;
      font-weight: $medium;
      font-size: 10px;
      line-height: 140%;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: $color-black;
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
  }

  &__container {
    width: 922px;
    height: 692px;
    position: relative;
    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%),
      url('/images/game.jpg') center / cover no-repeat;
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
  }

  &__close-ico {
    display: block;
    width: 44px;
    height: 44px;
    margin: 0 auto 19px;
  }

  &__info {
    margin: 0 auto;
    width: 330px;
    height: 58px;
    background: $color-primary;
    padding: 8px 16px;
  }

  &__table {
    width: 640px;
    height: 529px;
    background: $color-black;
    margin: 0 auto;
  }
}
</style>
