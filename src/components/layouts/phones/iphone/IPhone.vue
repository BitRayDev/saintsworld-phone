<template>
  <div class="iphone">
    <img class="iphone__bangs" src="@/assets/images/iphone-bangs.svg"/>
    <div
        class="iphone__status-bar iphone-status-bar"
        :class="{ 'iphone-status-bar_theme_light': $store.state.phone.statusBar.theme === 'light' }"
    >
      <div class="iphone-status-bar__section">
        <p class="iphone-status-bar__time">{{ time }}</p>
      </div>
      <div class="iphone-status-bar__section">
        <img class="iphone-status-bar__icon" src="@/assets/images/icons/signal.svg"/>
        <img class="iphone-status-bar__icon" src="@/assets/images/icons/battery.svg"/>
      </div>
    </div>
    <div class="iphone__content">
      <slot/>
    </div>
    <div
        class="iphone__home-button"
        :class="{ 'iphone__home-button_theme_light': $store.state.phone.homeButton.theme === 'light' }"
        v-if="$store.getters['phone/isHomeButtonShown']"
        @click="$store.commit('phone/openApp', 'HomeApp')"
    >
      <img class="iphone__home-icon" src="@/assets/images/icons/go-home.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "IPhone",
  props: {
    time: String,
  },
}
</script>

<style lang="scss">
.iphone {
  height: 26.6vw;
  width: 13.3vw;

  box-sizing: border-box;
  padding: .8vw 1vw .9vw;

  position: relative;

  background-image: url("../../../../assets/images/iphone.svg");
  background-size: 100% 100%;

  &__bangs {
    width: 5.5vw;
    height: 1vw;

    position: absolute;

    left: 50%;

    transform: translate(-50%, -1px);
  }

  &__content {
    height: 100%;
    width: 100%;

    background-color: gray;
    border-radius: 1.2vw;

    overflow: hidden;
  }

  &__status-bar {
    position: absolute;
    left: 0;
    right: 0;

    padding: 0 1.75vw;
    padding-top: .3vw;
  }

  &__home-button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70%;
    height: 1.1vw;

    position: absolute;
    left: 50%;
    bottom: .9vw;
    transform: translateX(-50%);

    background-color: rgba(0, 0, 0, 0.05);
    border-radius: .5vw .5vw 0 0;

    cursor: pointer;

    transition: background-color 200ms ease-out;

    filter: invert(1);
    &_theme {
      &_light {
        filter: invert(0);
      }
    }

    &:hover {
      .iphone__home-icon {
        opacity: 0.85;
      }

      background-color: rgba(0, 0, 0, 0.075);
    }

    &:active {
      .iphone__home-icon {
        opacity: 1;
      }

      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  &__home-icon {
    height: .75vw;

    opacity: 0.7;

    transition: opacity 200ms ease-out;
  }
}

.iphone-status-bar {
  display: flex;
  justify-content: center;
  gap: 6vw;

  &_theme {
    &_light {
      filter: invert(1);
    }
  }

  &__section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25vw;

    width: 2.5vw;
  }

  &__time {
    color: white;

    font-weight: 500;
    font-size: .5vw;
    letter-spacing: 1px;
  }

  &__icon {
    height: .45vw;
  }

}
</style>