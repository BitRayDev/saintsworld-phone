<template>
  <div class="call-app-add-contact-screen">
    <AppTopBar
        title="Новый контакт"
        show-back-button
        @go-back-click="goBack"
        theme="light"
    />
    <img class="call-app-add-contact-screen__user-icon" src="@/assets/images/icons/user.svg"/>
    <div class="call-app-add-contact-screen__form">
      <UnderlinedInput placeholder="Имя" v-model="name"/>
      <UnderlinedInput
          placeholder="Номер телефона"
          v-model="phoneNumber"
          invalid-text="Номер введён некорректно"
          :invalid="!phoneNumber.match(/^[0-9]*$/g)"
      />
      <ClassicButton
          class="call-app-add-contact-screen__add-button"
          theme="primary"
          text="Добавить в контакты"
          :disabled="!name || !phoneNumber"
      />
    </div>
  </div>
</template>

<script>
import IPhoneAppFrame from "@/components/layouts/phones/iphone/IPhoneAppFrame";
import AppTopBar from "@/components/organisms/AppTopBar";
import UnderlinedInput from "@/components/molecules/inputs/UnderlinedInput";
import ClassicButton from "@/components/atoms/buttons/ClassicButton";

export default {
  name: "CallAppAddContactScreen",
  components: {ClassicButton, UnderlinedInput, AppTopBar, IPhoneAppFrame},
  data: function () {
    return {
      name: "",
      phoneNumber: ""
    }
  },
  mounted() {
    this.name = this.$store.state.phoneCallApp.addedContact.name;
    this.phoneNumber = this.$store.state.phoneCallApp.addedContact.phoneNumber;
  },
  methods: {
    goBack: function () {
      this.$store.commit('phoneCallApp/openTab', this.$store.state.phoneCallApp.previousScreen.tab)
      this.$store.commit('phoneCallApp/openScreen', this.$store.state.phoneCallApp.previousScreen.screen)
    }
  }
}
</script>

<style lang="scss">
.call-app-add-contact-screen {
  display: flex;
  flex-direction: column;
  gap: .5vw;

  height: 100%;

  box-sizing: border-box;
  padding: 0 .4vw 1.5vw;

  //&__icon-container {
  //  display: flex;
  //  flex-grow: 1;
  //  justify-content: center;
  //  align-items: center;
  //}

  &__user-icon {
    margin: 2.25vw 0 2.8vw;

    height: 3.5vw;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1vw;
  }

  &__add-button {
    justify-content: center;
  }
}
</style>