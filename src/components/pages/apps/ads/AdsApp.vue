<template>
  <div class="ads-app">
    <IPhoneAppFrame>
      <AdsAppMyAdsScreen v-if="$store.state.phoneAdsApp.screen === 'my-ads'"/>
      <AdsAppEditScreen v-else-if="$store.state.phoneAdsApp.screen === 'edit-ad'"/>
      <AdsAppAdsScreen v-else/>
    </IPhoneAppFrame>
  </div>
</template>

<script>
import IPhoneAppFrame from "@/components/layouts/phones/iphone/IPhoneAppFrame";
import AdsAppAdsScreen from "@/components/pages/apps/ads/screens/AdsAppAdsScreen";
import AdsAppEditScreen from "@/components/pages/apps/ads/screens/AdsAppEditScreen";
import AdsAppMyAdsScreen from "@/components/pages/apps/ads/screens/AdsAppMyAdsScreen";
export default {
  name: "AdsApp",
  components: {AdsAppMyAdsScreen, AdsAppEditScreen, AdsAppAdsScreen, IPhoneAppFrame},
  mounted() {
    this.$store.commit('phone/setStatusBarTheme', "light");
    this.$store.commit('phone/setHomeButtonTheme', "light");

    this.$store.commit('phoneAdsApp/openScreen', 'ads');
  },
}
</script>

<style lang="scss">
.ads-app {
  height: 100%;

  background-color: white;
}
</style>