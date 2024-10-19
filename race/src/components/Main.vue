<script setup>
import Header from '@/components/common/Header.vue';
import Start from '@/components/screens/Start.vue';
import ChooseCar from '@/components/screens/ChooseCar.vue';
import Game from '@/components/screens/Game.vue';
import Guide from '@/components/screens/Guide.vue';
</script>

<template>
  <div class="main-container">
    <Header />
    <!--    <Start />-->
    <!--    <ChooseCar />-->
    <!--    <Game />-->
    <Guide />
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  background: $color-black;
}
</style>
