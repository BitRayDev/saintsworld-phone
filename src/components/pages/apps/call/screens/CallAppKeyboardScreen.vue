<template>
  <div class="call-app-keyboard-screen">
    <p class="call-app-keyboard-screen__keyboard-value">{{ keyboardValue }}</p>
    <p
        class="call-app-keyboard-screen__keyboard-add-to-contacts"
        :style="{opacity: keyboardValue ? 1 : 0}"
        @click="addContact"
    >
      + Добавить в контакты
    </p>
    <NumericKeyboard @key-click="onKeyPressed"/>
    <div class="call-app-keyboard-screen__additional-buttons">
      <CallButton @click.native="call"/>
      <img class="call-app-keyboard-screen__backspace-button" src="@/assets/images/icons/backspace.svg"
           @click="onBackspaceClick" v-if="keyboardValue"/>
    </div>
  </div>
</template>

<script>
import NumericKeyboardButton from "@/components/atoms/buttons/NumericKeyboardButton";
import NumericKeyboard from "@/components/organisms/NumericKeyboard";
import NumericInput from "@/components/molecules/inputs/NumericInput";
import CallButton from "@/components/atoms/buttons/CallButton";

export default {
  name: "CallAppKeyboardScreen",
  components: {CallButton, NumericInput, NumericKeyboard, NumericKeyboardButton},
  data: function () {
    return {
      keyboardValue: "",
    }
  },
  mounted() {
    this.keyboardValue = this.$store.state.phoneCallApp.keyboardInitialValue;
  },
  methods: {
    onKeyPressed: function (key) {
      this.keyboardValue += key;
    },
    onBackspaceClick: function () {
      this.keyboardValue = this.keyboardValue.slice(0, -1)
    },
    addContact: function () {
      this.$store.commit('phoneCallApp/setPreviousScreen', {screen: 'keyboard', tab: 'keyboard'})
      this.$store.commit('phoneCallApp/addContact', {phoneNumber: this.keyboardValue})
    },
    call: function () {
      if (!this.keyboardValue)
        return;

      this.$store.commit('phoneCallApp/call', {name: this.keyboardValue})
    },
  }
}
</script>

<style lang="scss">
.call-app-keyboard-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;

  position: relative;

  &__keyboard-value {
    height: 1.25vw;

    margin-top: 1vw;

    font-size: 1.25vw;
    text-align: center;
    white-space: nowrap;
  }

  &__keyboard-add-to-contacts {
    height: .6vw;

    padding: .2vw .35vw;

    color: #7C8691;

    font-size: .6vw;
    text-align: center;

    border: .1vw solid transparent;
    border-radius: .3vw;
    cursor: pointer;

    transition: opacity 500ms ease-out, border-color 200ms ease-out, color 200ms ease-out, background-color 200ms ease-out;

    &:hover {
      color: #37B0FF;

      border-color: #37B0FF;
    }

    &:active {
      background-color: rgba(0, 0, 0, 0.025);
    }
  }

  &__backspace-button {
    width: 1.25vw;

    position: absolute;
    right: 1.4vw;
    bottom: .5vw;

    opacity: 0.7;

    transition: opacity 200ms ease-out;

    cursor: pointer;

    &:hover {
      opacity: 0.85;
    }

    &:active {
      opacity: 1;
    }
  }
}
</style>