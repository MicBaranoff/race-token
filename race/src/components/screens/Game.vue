<script setup>
import Footer from "@/components/common/Footer.vue";
import CButton from "@/components/ui/CButton.vue";
import CButtonIconWithText from "@/components/ui/CButtonIconWithText.vue";
import ResultPopup from "@/components/popups/ResultPopup.vue";
</script>

<template>
  <div class="game-screen">
    <div class="game-screen__holder">
      <div class="game-screen__container">
        <ResultPopup />
      </div>

      <CButtonIconWithText class="game-screen__sound-btn" icon="sound-on">
        sound on <br> (S)
      </CButtonIconWithText>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.game-screen {

  &__font {}

  &__holder{
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
    background: $color-grey;
  }

  &__sound-btn {
    position: absolute;
    top: 32px;
    left: 42px;
  }
}
</style>
