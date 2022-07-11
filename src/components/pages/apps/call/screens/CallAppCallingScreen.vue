<template>
  <div class="call-app-calling-screen">
    <div class="call-app-calling-screen__text">
      <p class="call-app-calling-screen__phone-number">{{ $store.state.phoneCallApp?.call.name }}</p>
      <p class="call-app-calling-screen__duration">{{ $store.state.phoneCallApp?.call.duration }}</p>
    </div>
    <HangUpButton @click.native="$store.commit('phoneCallApp/openScreen', 'keyboard')"/>
  </div>
</template>

<script>
import HangUpButton from "@/components/atoms/buttons/HangUpButton";
export default {
  name: "CallAppCallingScreen",
  components: {HangUpButton},
  mounted() {
    this.$store.commit('phone/setStatusBarTheme', "dark");
    this.$store.commit('phone/setHomeButtonTheme', "dark");
  },
}
</script>

<style lang="scss">
.call-app-calling-screen {
  display: flex;
  justify-content: space-between;

  height: 100%;

  padding: 4vw 1vw;

  background-image: url("../../../../../assets/images/backgrounds/call.png");

  &__phone-number {
    margin-bottom: .1vw;

    color: white;

    font-size: 1.25vw;
  }
  &__duration {
    color: white;

    font-size: .55vw;
  }
}
</style>