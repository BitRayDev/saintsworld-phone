<template>
  <div :class="`icon-button icon-button_theme_${theme}`">
    <img class="icon-button__icon"  :src="icon" />
  </div>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    icon: String,
    theme: {
      type: String,
      default: "dark"
    }
  }
}
</script>

<style lang="scss">
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 1.25vw;
  aspect-ratio: 1;

  transition: background-color 200ms ease-out;

  cursor: pointer;

  border-radius: .3vw;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &__icon {
    height: 70%;
    max-width: 70%;
  }
}
.icon-button_theme_dark {
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  &:active {
    background-color: rgba(255, 255, 255, 0.25);
  }
}
</style>