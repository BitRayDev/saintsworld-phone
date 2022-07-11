<template>
  <div class="taxi-button">
    <img class="taxi-button__icon" :src="icon"/>
    <p class="taxi-button__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "TaxiButton",
  props: {
    text: String,
    icon: String
  }
}
</script>

<style lang="scss">
.taxi-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .4vw;

  position: relative;

  padding: .25vw .75vw;

  background: radial-gradient(100% 100% at 50% 0%, #D2AD29 0%, #FC7C06 100%);
  border: .1vw solid #F2C94C;
  border-radius: .3vw;

  cursor: pointer;

  &::after {
    content: "";

    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;

    background-color: black;
    opacity: 0;

    transition: opacity 200ms ease-out;
  }

  &:hover {
    &::after {
      opacity: .05;
    }
  }
  &:active {
    &::after {
      opacity: .1;
    }
  }

  &__icon {
    height: .9vw;
  }
  &__text {
    color: white;

    font-size: .6vw;
  }
}
</style>