<template>
  <div class="send-button" :class="{ 'send-button_disabled': disabled }">
    <img class="send-button__icon" src="@/assets/images/icons/send.svg"/>
  </div>
</template>

<script>
export default {
  name: "SendButton",
  props: {
    disabled: Boolean
  }
}
</script>

<style lang="scss">
.send-button {
  display: flex;
  justify-content: center;
  align-items: center;

  aspect-ratio: 1;

  background-color: #37B0FF;
  border-radius: .3vw;

  cursor: pointer;

  transition: background-color 200ms ease-out, filter 200ms ease-out;

  &_disabled {
    pointer-events: none;

    background-color: rgba(0, 0, 0, 0.2);
    filter: grayscale(100%);
  }

  &__icon {
    height: 50%;
  }
}
</style>