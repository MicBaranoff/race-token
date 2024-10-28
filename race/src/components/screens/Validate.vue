<script setup>
import Footer from '@/components/common/Footer.vue';
import CButtonExtra from '@/components/ui/CButtonExtra.vue';

import X from '@/assets/svg/x.svg';
</script>

<template>
  <div class="validate-screen">
    <div class="validate-screen__holder">
      <div class="validate-screen__container">
        <div class="validate-screen__overlay">
          <div class="validate-screen__title">
            <h2 class="validate-screen__font validate-screen__font--title">
              VALIDATE YOUR BEST SCORE
            </h2>
            <div class="validate-screen__block">
              <div class="validate-screen__block-view">
                <div class="validate-screen__block-video">
                  <video playsinline loop muted src=""></video>
                </div>
                <div class="validate-screen__block-content">
                  <div class="validate-screen__block-ico">
                    <X />
                  </div>
                  <div class="validate-screen__block-title">
                    <span
                      class="validate-screen__font validate-screen__font--subtitle"
                    >
                      I scored 450 in Racer Legends Game! Try to beat me!
                    </span>
                  </div>

                  <div class="validate-screen__block-footer">
                    <span
                      class="validate-screen__font validate-screen__font--firm"
                    >
                      @unepickid
                    </span>
                  </div>
                </div>
              </div>

              <CButtonExtra class="validate-screen__btn"
                >SHARE AND VALIDATE <X class="validate-screen__btn-ico"
              /></CButtonExtra>

              <div class="validate-screen__block-btn-text">
                <span
                  class="validate-screen__font validate-screen__font--btn-text"
                >
                  Click to share your score on X and secure your spot DURING THE
                  COMPETITION!
                </span>
              </div>
              <div class="validate-screen__block-text">
                <span class="validate-screen__font validate-screen__font--text">
                  Validation on the leaderboard may take a few minutes after
                  you've shared your post.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.validate-screen {
  &__font {
    &--title {
      font-size: 48px;
      line-height: 90%;
      letter-spacing: -0.13em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white-1;
      font-family: $font-family-accent;
      font-weight: $bold;
      -webkit-text-stroke: 1px $color-black;
    }

    &--subtitle {
      font-size: 27px;
      line-height: 140%;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      text-align: center;
      color: $color-white-1;
      font-weight: $bold;
    }

    &--firm {
      font-size: 14px;
      line-height: 140%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      color: $color-white-1;
      font-weight: $bold;
    }

    &--text {
      font-weight: $bold;
      font-size: 12px;
      line-height: 150%;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      text-align: center;
      color: $color-white-1;
    }

    &--btn-text {
      display: block;
      font-weight: $bold;
      font-size: 9px;
      line-height: 130%;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-align: left;
      color: #787878;
    }
  }
  &__holder {
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
    background:
      url('/images/game.jpg') center / cover no-repeat,
      $color-grey;
    position: relative;
  }

  &__overlay {
    width: 100%;
    height: 100%;
    background: url('/images/shadow.png') center / 100% 100% no-repeat;
    text-align: center;
    padding: 31px;
  }

  &__block {
    width: 792px;
    height: 566px;
    border: 2px solid #4a4b48;
    background: $color-black;
    margin: 17px auto 0;
    padding: 21px 24px;
    position: relative;
  }

  &__block-view {
    border: 2px solid $color-primary;
    display: flex;
  }

  &__block-video {
    width: 50%;
    height: 374px;
    background: #4a4b48;
  }

  &__block-content {
    width: 50%;
    text-align: center;
    padding: 27px;
  }

  &__block-ico {
    width: 30px;
    margin: 0 auto;
    color: $color-primary;
  }

  &__block-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__block-text {
    max-width: 346px;
    margin: 24px auto 0;
  }

  &__btn {
    width: 322px;
    height: 60px;
    margin: 24px auto 0;
    padding-left: 41px;
    text-align: left;
  }

  &__block-btn-text {
    width: 185px;
    position: absolute;
    bottom: 90px;
    right: 21px;
  }

  &__btn-ico {
    position: absolute;
    top: 16px;
    width: 29px;
    right: 41px;
  }
}
</style>
