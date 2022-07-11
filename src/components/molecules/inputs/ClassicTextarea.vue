<template>
  <textarea class="classic-textarea" @input="$emit('input', $event.target.value)" :value="value"/>
</template>

<script>
export default {
  name: "ClassicTextarea",
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: String
  }
}
</script>

<style lang="scss">
.classic-textarea {
  height: 2.75vw;
  resize: none;

  padding: .25vw .4vw;

  font-size: .65vw;

  border: none;
  outline: none;

  border: .1vw solid #E8E9EA;
  border-radius: .3vw;

  &::placeholder {
    color: rgba(20, 27, 35, 0.5);
  }
}
</style>