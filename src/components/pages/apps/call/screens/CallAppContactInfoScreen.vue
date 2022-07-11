<template>
  <div class="call-app-contact-info-screen">
    <AppTopBar
        :title="contact?.name"
        show-back-button
        :right-icon="require('@/assets/images/icons/edit.svg')"
        @go-back-click="goBack"
        @right-icon-click="toggleEditMode"
        theme="light"
    />
    <div
        class="call-app-contact-info-screen__avatar-container"
        :style="{ backgroundImage: `linear-gradient(90deg, ${contact.startColor} 0%, ${contact.endColor} 100%)` }"
    >
      <GradientAvatar
          class="call-app-contact-info-screen__avatar"
          :text="contact.name"
      />
      <img
          class="call-app-contact-info-screen__avatar-favourite-icon"
          :src="contact.isFavourite ? require('@/assets/images/icons/star-filled.svg') : require('@/assets/images/icons/star.svg')"
          @click="toggleContactFavourite"
      />
    </div>
    <div class="call-app-contact-info-screen__hot-actions">
      <CallButton :disabled="isEditMode"/>
      <MessageButton :disabled="isEditMode"/>
    </div>
    <div class="call-app-contact-info-screen__form">
      <UnderlinedInput :placeholder="isEditMode ? contact.name : 'Имя'" v-model="nameInputValue"
                       :disabled="!isEditMode"/>
      <UnderlinedInput
          :placeholder="isEditMode ? contact.phoneNumber : 'Номер телефона'"
          v-model="phoneNumberInputValue"
          :disabled="!isEditMode"
      />
      <div class="call-app-contact-info-screen__form-buttons" v-if="isEditMode">
        <ClassicButton
            class="call-app-contact-info-screen__form-button"
            text="Отмена"
            @click.native="cancelChanges"
        />
        <ClassicButton
            theme="primary"
            class="call-app-contact-info-screen__form-button"
            text="Сохранить"
            @click.native="saveChanges"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

import AppTopBar from "@/components/organisms/AppTopBar";
import GradientAvatar from "@/components/atoms/GradientAvatar";
import CallButton from "@/components/atoms/buttons/CallButton";
import MessageButton from "@/components/atoms/buttons/MessageButton";
import UnderlinedInput from "@/components/molecules/inputs/UnderlinedInput";
import ClassicButton from "@/components/atoms/buttons/ClassicButton";

export default {
  name: "CallAppContactInfoScreen",
  components: {ClassicButton, UnderlinedInput, MessageButton, CallButton, GradientAvatar, AppTopBar},
  data: function () {
    return {
      isEditMode: false,
      nameInputValue: "",
      phoneNumberInputValue: ""
    }
  },
  computed: mapState('phoneCallApp', {
    contact: 'openedContact'
  }),
  mounted() {
    console.log(this.$store.state.phoneCallApp.openedContact);

    this.nameInputValue = this.contact.name;
    this.phoneNumberInputValue = this.contact.phoneNumber;
  },
  methods: {
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    },
    saveChanges() {
      this.toggleEditMode();
    },
    cancelChanges() {
      this.toggleEditMode();
    },
    toggleContactFavourite() {
      // TODO: Тут логика
    },
    goBack: function () {
      this.$store.commit('phoneCallApp/openTab', this.$store.state.phoneCallApp.previousScreen.tab)
      this.$store.commit('phoneCallApp/openScreen', this.$store.state.phoneCallApp.previousScreen.screen)
    }
  }
}
</script>

<style lang="scss">
.call-app-contact-info-screen {
  display: flex;
  flex-direction: column;
  gap: .5vw;

  &__avatar-container {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 8vw;

    position: relative;

    border-radius: .8vw;
  }
  &__avatar-favourite-icon {
    position: absolute;
    right: .5vw;
    top: .5vw;

    height: .75vw;

    cursor: pointer;

    filter: brightness(200%) grayscale(100%);
  }

  &__avatar {
    height: 4vw;

    font-size: 1.7vw;

    box-shadow: 0px .25vw .9vw rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  &__hot-actions {
    display: flex;
    justify-content: center;
    gap: .25vw;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: .75vw;

    margin-top: .5vw;

    padding: 0 .5vw;
  }

  &__form-buttons {
    display: flex;
    gap: .25vw;
  }

  &__form-button {
    flex: 1 0 0;
    justify-content: center;
  }
}
</style>