<template>
  <p class="numeric-keyboard-button">
    <slot/>
  </p>
</template>

<script>
export default {
  name: "NumericKeyboardButton"
}
</script>

<style lang="scss">
  .numeric-keyboard-button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 2vw;
    width: 2vw;

    color: #141B23;

    font-size: .9vw;
    font-weight: 500;

    background-color: #E8E9EA;
    border-radius: 100%;

    cursor: pointer;

    transition: background-color 200ms ease-out;

    &:hover {
      background-color: #DEDFE1;
    }
    &:active {
      background-color: #D3D5D7;
    }
  }
</style>