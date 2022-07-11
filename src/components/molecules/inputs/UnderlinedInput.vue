<template>
  <div class="underlined-input">
    <input
        class="underlined-input__input"
        :class="{'underlined-input__input_disabled': disabled, 'underlined-input__input_invalid': invalid}"
        v-bind="$attrs"
        @input="$emit('input', $event.target.value)"
        :value="value"
    />
    <p class="underlined-input__invalid-text" v-if="invalid && invalidText">{{ invalidText }}</p>
  </div>
</template>

<script>
export default {
  name: "UnderlinedInput",
  inheritAttrs: false,
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: String,
    disabled: Boolean,
    invalid: Boolean,
    invalidText: String
  }
}
</script>

<style lang="scss">
.underlined-input {
  &__input {
    display: block;
    width: 100%;

    padding-bottom: .25vw;

    font-size: .6vw;
    text-align: center;

    border: none;
    outline: none;

    border-bottom: .1vw solid #E8E9EA;

    transition: border-color 200ms ease-out;

    &_disabled {
      color: rgba(0, 0, 0, 0.9);

      pointer-events: none;
    }

    &_invalid {
      color: #D60D1F;

      border-bottom: .1vw solid #D60D1F;
    }

    &:focus {
      border-color: #37B0FF;
    }

    &::placeholder {
      font-size: .65vw;
    }
  }

  &__invalid-text {
    margin-top: .25vw;

    color: #8F4D53;

    font-size: .55vw;
    text-align: center;
  }
}
</style>