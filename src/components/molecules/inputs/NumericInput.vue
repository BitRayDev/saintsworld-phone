<template>
  <input class="numeric-input"/>
</template>

<script>
export default {
  name: "NumericInput",
  props: {
    value: String,
  }
}
</script>

<style lang="scss">
.numeric-input {

  border: none;
  outline: none;

  border-bottom: .1vw solid gray;
}
</style>