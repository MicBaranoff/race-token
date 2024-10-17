<script setup>
import CButtonIcon from "@/components/ui/CButtonIcon.vue";

defineProps({
  theme: {
    default: 'yellow',
    validator(value) {
      return ['black', 'yellow', 'stroke'].includes(value)
    }
  },
  icon: {
    type: String,
  }
})
</script>

<template>
  <div class="button-icon-text">
    <CButtonIcon class="button-icon-text__btn" :theme="theme" :icon="icon"/>

    <span class="button-icon-text__font">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped lang="scss">
.button-icon-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &__font {
    font-weight: $medium;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: $color-primary;
  }

  &__btn {
    margin-bottom: 16px;
  }
}
</style>
