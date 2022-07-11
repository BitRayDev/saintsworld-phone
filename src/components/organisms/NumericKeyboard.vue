<template>
  <div class="numeric-keyboard">
    <NumericKeyboardButton v-for="key in keys" @click.native="$emit('key-click', key)">
      {{ key }}
    </NumericKeyboardButton>
  </div>
</template>

<script>
import NumericKeyboardButton from "@/components/atoms/buttons/NumericKeyboardButton";
export default {
  name: "NumericKeyboard",
  components: {NumericKeyboardButton},
  props: {
    value: String
  },
  data: function () {
    return {
      keys: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "*",
        "0",
        "#",
      ]
    }
  }
}
</script>

<style lang="scss">
.numeric-keyboard {
  display: grid;
  grid-template-columns: min-content min-content min-content;
  justify-content: center;
  gap: 1vw 1.5vw;
  justify-items: center;
  align-items: center;
}
</style>