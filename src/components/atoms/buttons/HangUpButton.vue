<template>
  <div class="hang-up-button" :class="{ 'call-button_disabled': disabled }">
    <img class="hang-up-button__icon" src="@/assets/images/icons/decline.svg"/>
  </div>
</template>

<script>
export default {
  name: "HangUpButton",
  props: {
    disabled: Boolean
  }
}
</script>

<style lang="scss">
.hang-up-button {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.2vw;
  aspect-ratio: 1;

  position: relative;

  background: linear-gradient(180deg, #F66565 0%, #C31227 100%);
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
    width: 75%;

    position: relative;
    z-index: 1;

    transition: transform 200ms ease-out;
  }

  &:hover {
    .hang-up-button__icon {
      transform: translateY(.05vw);
    }
  }
  &:active {
    &::after {
      opacity: 0.05;
    }
  }
}
</style>