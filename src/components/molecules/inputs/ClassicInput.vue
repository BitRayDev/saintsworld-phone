<template>
  <div class="classic-input" :class="{ 'classic-input_focused': focused }" disabled>
    <img class="classic-input__icon" :src="leftIcon" @click="$emit('left-icon-click')"/>
    <input class="classic-input__input" v-bind="$attrs" @input="$emit('input', $event.target.value)"
           @focus="focused=true" @blur="focused=false"/>
    <img class="classic-input__icon" :src="rightIcon" @click="$emit('right-icon-click')"/>
  </div>
</template>

<script>
export default {
  name: "ClassicInput",
  model: {
    prop: "value",
    event: "input"
  },
  props: {
    value: String,
    leftIcon: String,
    rightIcon: String,
  },
  data: function () {
    return {
      focused: false,
    }
  },
}
</script>

<style lang="scss">
.classic-input {
  display: flex;
  align-items: center;
  gap: .35vw;

  padding: .25vw .4vw;

  border: .1vw solid #E8E9EA;
  border-radius: .3vw;

  transition: border-color 200ms ease-out;

  &_focused {
    border-color: #37B0FF;

    .classic-input__icon {
      filter: brightness(50%);
    }
  }

  &__icon {
    flex-shrink: 0;

    height: .8vw;

    transition: filter 200ms ease-out;
  }

  &__input {
    flex-grow: 1;

    font-size: .65vw;

    border: none;
    outline: none;

    &::placeholder {
      color: rgba(20, 27, 35, 0.5);
    }
  }
}
</style>