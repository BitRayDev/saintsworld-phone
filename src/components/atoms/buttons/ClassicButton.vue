<template>
  <div :class="`classic-button classic-button_theme_${theme} ${disabled ? `classic-button_disabled` : ``}`">
    <div class="classic-button__section">
      <img class="classic-button__icon" :src="icon"/>
      <p
          class="classic-button__text"
      >
        {{ text }}
      </p>
    </div>
    <img class="classic-button__icon" :src="appendIcon"/>
  </div>
</template>

<script>
export default {
  name: "ClassicButton",
  props: {
    icon: String,
    text: String,
    appendIcon: String,
    theme: {
      type: String,
      default: "secondary"
    },
    disabled: Boolean,
  }
}
</script>

<style lang="scss">
.classic-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .25vw;

  box-sizing: border-box;
  padding: .25vw .35vw;

  border-radius: .3vw;

  cursor: pointer;

  transition: background-color 200ms ease-out, border-color 200ms ease-out;
  border: .1vw solid transparent;

  &_theme {
    &_secondary {
      color: #0A9CFB;
      border-color: #37B0FF;

      &:hover {
        background-color: #37B0FF22;
      }
      &:active {
        background-color: #37B0FF44;
      }
    }
    &_primary {
      color: white;
      background-color: #37B0FF;

      &:hover {
        background-color: #0D8FE3;
      }
      &:active {
        background-color: #087DC9;
      }
    }
  }
  &_disabled {
    color: rgba(0, 0, 0, 0.5);
    background: rgba(55, 176, 255, 0.1);

    pointer-events: none;
  }

  &__section {
    display: flex;
    align-items: center;
    gap: .35vw;
  }

  &__icon {
    height: .85vw;
  }

  &__text {
    font-size: .6vw;
  }
}
</style>