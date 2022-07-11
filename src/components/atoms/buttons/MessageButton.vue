<template>
  <div class="message-button" :class="{ 'call-button_disabled': disabled }">
    <img class="message-button__icon" src="@/assets/images/icons/message-bubble.svg"/>
  </div>
</template>

<script>
export default {
  name: "MessageButton",
  props: {
    disabled: Boolean
  }
}
</script>

<style lang="scss">
.message-button {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.2vw;
  aspect-ratio: 1;

  position: relative;

  background: radial-gradient(50% 50% at 50% 50%, #37B0FF 0%, #0A9CFB 100%);
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
    width: 60%;

    position: relative;
    z-index: 1;

    filter: drop-shadow(0px .25vw .25vw rgba(0, 0, 0, 0.15));

    transition: transform 200ms ease-out;
  }

  &:hover {
    .message-button__icon {
      transform: rotate(5deg);
    }
  }
  &:active {
    &::after {
      opacity: 0.05;
    }
  }
}
</style>