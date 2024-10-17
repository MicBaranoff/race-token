<script setup>

</script>

<template>
  <footer class="footer-base">
    <div class="footer-base__decor"></div>
  </footer>
</template>

<style scoped lang="scss">
.footer-base  {
  background: $color-primary;
  width: 100%;
  height: 85px;
  position: relative;

  &__decor {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 18px;
    background: url("/images/header-decor.png") center / 1280px 100% repeat-x, #000000;
  }
}
</style>
