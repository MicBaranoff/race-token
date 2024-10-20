<script setup>
import CQuestion from '@/components/ui/CQuestion.vue';
</script>

<template>
  <footer class="footer-base">
    <div class="footer-base__decor"></div>

    <div class="footer-base__holder">
      <a href="#" class="footer-base__font footer-base__link"
        >About Competition
        <CQuestion
          position="top"
          text="The top 3 players, along with one randomly selected player from the leaderboard, will
            win a prize from RocketX."
      /></a>
      <img
        class="footer-base__logo"
        src="/images/rocket-logo-mini.svg"
        alt="rocket"
      />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer-base {
  background: $color-primary;
  width: 100%;
  height: 85px;
  position: relative;

  &__font {
    font-weight: $medium;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: $color-black;
  }

  &__decor {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 18px;
    background:
      url('/images/header-decor.png') center / 1280px 100% repeat-x,
      #000000;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 10px 40px 0;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }

  &__logo {
    display: block;
    width: 126px;
  }
}
</style>
