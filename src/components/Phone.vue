<template>
  <div class="phone">
    <component :is="$store.getters['phone/phoneModel'] || 'IPhone'" time="20:22">
      <component :is="$store.getters['phone/activeApp'] || 'HomeApp'"/>
    </component>
  </div>
</template>

<script>
import IPhone from "@/components/layouts/phones/iphone/IPhone";
import HomeApp from "@/components/pages/apps/HomeApp";
import CallApp from "@/components/pages/apps/call/CallApp";
import MessengerApp from "@/components/pages/apps/messenger/MessengerApp";
import GpsApp from "@/components/pages/apps/gps/GpsApp";
import MyCarApp from "@/components/pages/apps/my-car/MyCarApp";
import TaxiApp from "@/components/pages/apps/taxi/TaxiApp";
import ForbesApp from "@/components/pages/apps/forbes/ForbesApp";
import AdsApp from "@/components/pages/apps/ads/AdsApp";

export default {
  name: "Phone",
  components: {
    AdsApp,
    ForbesApp,
    TaxiApp,
    MyCarApp,
    GpsApp,
    IPhone,
    HomeApp,
    CallApp,
    MessengerApp,
  },
}
</script>

<style lang="scss">
.phone {
  position: absolute;
  right: 2.5vw;
  bottom: 2.5vw;
}
</style>