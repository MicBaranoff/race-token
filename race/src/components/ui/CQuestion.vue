<script setup>
import QuestionIco from '@/assets/svg/question.svg';

defineProps({
  text: {
    default: 'tooltip content',
  },

  position: {
    default: 'bottom',
    validator(value) {
      return ['top', 'bottom'].includes(value);
    },
  },
});
</script>

<template>
  <button
    v-tooltip="{
      content: text,
      placement: position,
      distance: 10,
    }"
    type="button"
    class="c-question"
  >
    <QuestionIco class="c-question__icon" />
  </button>
</template>

<style scoped lang="scss">
.c-question {
  width: 14px;
  height: 14px;

  &__icon {
    width: 100%;
    height: 100%;
  }
}
</style>
