<template>
  <div class="call-app">
    <CallAppCallingScreen v-if="isActiveTabAndScreen('keyboard', 'call')"/>
    <IPhoneAppFrame v-else>
      <div class="call-app__content">
        <div class="call-app__screen-view">
          <CallAppKeyboardScreen v-if="isActiveTabAndScreen('keyboard', 'keyboard')"/>
          <CallAppAddContactScreen v-if="isActiveTabAndScreen('contacts', 'add-contact')"/>
          <CallAppContactsScreen v-if="isActiveTabAndScreen('contacts', 'contacts')"/>
          <CallAppContactInfoScreen v-if="isActiveTabAndScreen('contacts', 'contact')"/>
          <CallAppCallsScreen v-if="isActiveTabAndScreen('calls', 'calls')"/>
        </div>
        <CallAppMenu/>
      </div>
    </IPhoneAppFrame>
  </div>
</template>

<script>
import IPhoneAppFrame from "@/components/layouts/phones/iphone/IPhoneAppFrame";
import NumericKeyboardButton from "@/components/atoms/buttons/NumericKeyboardButton";
import CallAppMenu from "@/components/organisms/CallAppMenu";
import CallAppKeyboardScreen from "@/components/pages/apps/call/screens/CallAppKeyboardScreen";
import CallAppCallingScreen from "@/components/pages/apps/call/screens/CallAppCallingScreen";
import CallAppAddContactScreen from "@/components/pages/apps/call/screens/CallAppAddContactScreen";
import CallAppContactsScreen from "@/components/pages/apps/call/screens/CallAppContactsScreen";
import CallAppContactInfoScreen from "@/components/pages/apps/call/screens/CallAppContactInfoScreen";
import CallAppCallsScreen from "@/components/pages/apps/call/screens/CallAppCallsScreen";

export default {
  name: "CallApp",
  components: {
    CallAppCallsScreen,
    CallAppContactInfoScreen,
    CallAppContactsScreen,
    CallAppAddContactScreen,
    CallAppCallingScreen, CallAppKeyboardScreen, CallAppMenu, NumericKeyboardButton, IPhoneAppFrame},
  data: function () {
    return {
      currentScreen: "keyboard",
      isCalling: false,
    }
  },
  mounted() {
    this.$store.commit('phone/setStatusBarTheme', "light");
    this.$store.commit('phone/setHomeButtonTheme', "light");

    this.$store.commit('phoneCallApp/openTab', 'contacts')
  },
  methods: {
    isActiveTabAndScreen: function (tab, screen) {
      return this.$store.state.phoneCallApp.screen === screen && this.$store.state.phoneCallApp.tab === tab;
    }
  }
}
</script>

<style lang="scss">
.call-app {
  height: 100%;

  background-color: white;

  &__content {
    display: flex;
    flex-direction: column;

    height: 100%;
  }

  &__screen-view {
    flex-grow: 1;

    overflow: hidden;
  }
}
</style>