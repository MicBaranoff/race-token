<script setup>
import leaders from '@/configs/leaders.js';

defineProps({
  data: { type: Object, required: true },
});
</script>

<template>
  <div class="rating-table">
    <div class="rating-table__holder">
      <div class="rating-table__row rating-table__row-head">
        <span>#</span>
        <span>PLAYER</span>
        <span>SCORE</span>
        <span>TIME</span>
      </div>

      <div
        v-for="(item, index) in leaders.top"
        :key="item.id"
        class="rating-table__row rating-table__row-first"
      >
        <span>{{ index + 1 }}</span>
        <span>{{ item.id }}</span>
        <span>{{ item.score }}</span>
        <span>{{ item.time }}</span>
      </div>

      <img class="rating-table__line" src="/images/line.png" alt="" />

      <div
        v-for="(item, index) in leaders.regular"
        :key="item.id"
        :class="[
          'rating-table__row',
          { 'rating-table__row--active': item.needsValidation },
        ]"
      >
        <span>{{ index + 1 }}</span>
        <span>{{ item.id }}</span>
        <span
          ><span
            v-if="item.needsValidation"
            style="margin-right: 13px"
            class="rating-table__font rating-table__font--accent mobile-hide"
            >NEEDS VALIDATION </span
          >{{ item.score }}</span
        >
        <span>{{ item.time }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rating-table {
  height: 100%;
  border: 2px solid #4a4b48;
  padding: 10px 12px;

  &__font {
    &--accent {
      color: $color-primary;
    }
  }

  &__holder {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding-right: 12px;

    @include is-mobile {
      padding-right: 6px;
    }

    &::-webkit-scrollbar {
      width: 16px;

      @include is-mobile {
        width: 4px;
      }
    }

    &::-webkit-scrollbar-track {
      background: $color-grey-light;
    }

    &::-webkit-scrollbar-thumb {
      background: $color-primary;
    }
  }

  &__line {
    display: block;
    width: 100%;
    margin-bottom: 6px;
    height: 1px;
  }

  &__table-line {
    display: block;
    width: 100%;
    margin-bottom: 6px;
    height: 1px;
  }

  &__row {
    display: flex;
    margin-bottom: 6px;
    color: $color-grey-light;
    padding: 0 21px;

    @include is-mobile {
      padding: 0 5px;
    }

    span {
      font-weight: $medium;
      font-size: 14px;
      line-height: 140%;
      text-transform: uppercase;

      @include is-mobile {
        font-size: 11px;
        line-height: 140%;
      }
    }

    span:nth-child(1) {
      width: 10%;
      text-align: left;
    }
    span:nth-child(2) {
      width: 35%;
      text-align: left;
    }
    span:nth-child(3) {
      width: 40%;
      text-align: right;

      @include is-mobile {
        width: 35%;
      }
    }
    span:nth-child(4) {
      width: 15%;
      text-align: right;

      @include is-mobile {
        width: 25%;
      }
    }

    &--main {
      span {
        color: $color-white;
      }
    }

    &--active {
      background: $color-grey-light;
      color: $color-white-1;

      span {
        font-weight: $bold;
      }
    }
  }

  &__row-head {
    position: sticky;
    top: 0;
    background: $color-primary;
    color: $color-black;
    margin-bottom: 2px;

    span {
      font-weight: $bold;
    }
  }

  &__row-first {
    span {
      color: $color-primary;
    }
  }
}
</style>
