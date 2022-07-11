<template>
  <div class="car-card" :class="{ 'car-card_disabled': disabled }">
    <img class="car-card__background" src="@/assets/images/backgrounds/car-card.png"/>
    <p class="car-card__rent-time" v-if="rentTime">{{ rentTime }}</p>
    <img class="car-card__image" :src="image"/>
    <IconButton class="car-card__menu-button" :icon="require('@/assets/images/icons/more-vertical.svg')"/>
  </div>
</template>

<script>
import IconButton from "@/components/atoms/buttons/IconButton";

export default {
  name: "CarCard",
  components: {IconButton},
  props: {
    image: String,
    menuItems: Array,
    rentTime: String,
    disabled: Boolean,
  }
}
</script>

<style lang="scss">
.car-card {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 5vw;

  position: relative;

  border: .1vw solid #172A49;
  border-radius: .5vw;

  overflow: hidden;

  transition: opacity 200ms ease-out;
  cursor: pointer;

  &_disabled {
    pointer-events: none;
    opacity: 0.25;
  }

  &:hover {
    opacity: .8;
  }

  &__background {
    position: absolute;
    width: 100%;

    pointer-events: none;
  }

  &__rent-time {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);

    padding: .25vw .4vw;

    color: #0A9CFB;

    font-size: .6vw;

    background: rgba(55, 176, 255, 0.1);
    border-radius: 0px 0px .5vw .5vw;
  }

  &__image {
    height: 100%;

    position: relative;

    pointer-events: none;
  }

  &__menu-button {
    height: 1.25vw;

    position: absolute;
    right: .2vw;
    top: .3vw;
  }
}
</style>