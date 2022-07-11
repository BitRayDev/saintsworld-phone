<template>
  <div class="taxi-app">
    <IPhoneAppFrame>
      <div class="taxi-app__content">
        <AppTopBar title="Такси"/>
        <TaxiAppStartScreen v-if="!$store.state.phoneTaxiApp.status"/>
        <TaxiAppSearchingScreen v-else-if="$store.state.phoneTaxiApp.status === 'searching'"/>
        <TaxiAppDriverFoundScreen v-else-if="$store.state.phoneTaxiApp.status === 'found'"/>
        <TaxiAppOrderScreen v-else/>
      </div>
    </IPhoneAppFrame>
  </div>
</template>

<script>
import IPhoneAppFrame from "@/components/layouts/phones/iphone/IPhoneAppFrame";
import AppTopBar from "@/components/organisms/AppTopBar";
import TaxiAppStartScreen from "@/components/pages/apps/taxi/screens/TaxiAppStartScreen";
import TaxiAppSearchingScreen from "@/components/pages/apps/taxi/screens/TaxiAppSearchingScreen";
import TaxiAppDriverFoundScreen from "@/components/pages/apps/taxi/screens/TaxiAppDriverFoundScreen";
import TaxiAppOrderScreen from "@/components/pages/apps/taxi/screens/TaxiAppOrderScreen";

export default {
  name: "TaxiApp",
  components: {
    TaxiAppOrderScreen,
    TaxiAppDriverFoundScreen, TaxiAppSearchingScreen, TaxiAppStartScreen, AppTopBar, IPhoneAppFrame},
  mounted() {
    this.$store.commit('phone/setStatusBarTheme', "light");
    this.$store.commit('phone/setHomeButtonTheme', "light");
  },
}
</script>

<style lang="scss">
.taxi-app {
  height: 100%;

  background-image: url("../../../../assets/images/backgrounds/map.png");
  background-size: cover;

  &__content {
    display: flex;
    flex-direction: column;

    height: 100%;
  }
}
</style>