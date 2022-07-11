<template>
  <div class="call-button" :class="{ 'call-button_disabled': disabled }">
    <img class="call-button__icon" src="@/assets/images/icons/call.svg"/>
  </div>
</template>

<script>
export default {
  name: "CallButton",
  props: {
    disabled: Boolean
  }
}
</script>

<style lang="scss">
.call-button {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.2vw;
  aspect-ratio: 1;

  position: relative;

  background-image: linear-gradient(180deg, #65F681 0%, #12C339 100%);
  border-radius: 100%;

  cursor: pointer;

  transition: filter 200ms ease-out;

  &_disabled {
    filter: grayscale(100%);

    pointer-events: none;
  }

  &::after {
    content: "";

    position: absolute;

    height: 100%;
    width: 100%;

    background-color: black;
    border-radius: 100%;
    opacity: 0;

    transition: opacity 200ms ease-out;
  }

  &__icon {
    height: 50%;

    position: relative;
    z-index: 1;

    transition: transform 200ms ease-out;
  }

  &:hover {
    .call-button__icon {
      transform: rotate(-8deg);
    }
  }
  &:active {
    &::after {
      opacity: 0.05;
    }
  }
}
</style>