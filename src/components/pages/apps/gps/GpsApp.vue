<template>
  <div class="gps-app">
    <IPhoneAppFrame :vertical-padding=".6">
      <div class="gps-app__content">
        <GpsCatalogScreen v-if="!$store.state.phoneGpsApp.activePoint || $store.state.phoneGpsApp.activePoint.points?.length"/>
        <GpsRouteScreen v-else/>
      </div>
    </IPhoneAppFrame>
  </div>
</template>

<script>
import IPhoneAppFrame from "@/components/layouts/phones/iphone/IPhoneAppFrame";
import AppTopBar from "@/components/organisms/AppTopBar";
import GpsCatalogScreen from "@/components/pages/apps/gps/screens/GpsCatalogScreen";
import GpsRouteScreen from "@/components/pages/apps/gps/screens/GpsRouteScreen";

export default {
  name: "GpsApp",
  components: {GpsRouteScreen, GpsCatalogScreen, AppTopBar, IPhoneAppFrame},
}
</script>

<style lang="scss">
.gps-app {
  height: 100%;

  background-image: url("../../../../assets/images/backgrounds/road.png");
  background-size: cover;

  &__content {
    display: flex;
    flex-direction: column;

    height: 100%;

    overflow: hidden;
  }
}
</style>