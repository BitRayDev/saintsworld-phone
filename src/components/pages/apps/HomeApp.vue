<template>
  <div class="home-app">
    <IPhoneAppFrame>
      <div class="home-app__content">
        <HomeGeneralWidget :balance="balance" :phone-number="phoneNumber"/>
        <div class="home-app__apps">
          <HomeAppIcon v-for="(app, index) in apps" :key="index" :icon="app.icon" :label="app.label" @click.native="openApp(app)"/>
        </div>
        <div class="home-app__hotbar">
          <HomeAppIcon v-for="(app, index) in hotbarApps" :key="index" :icon="app.icon" :is-label-shown="false" @click.native="openApp(app)"/>
        </div>
      </div>
    </IPhoneAppFrame>
  </div>
</template>

<script>
import HomeGeneralWidget from "@/components/molecules/HomeGeneralWidget";
import IPhoneAppFrame from "@/components/layouts/phones/iphone/IPhoneAppFrame";

import taxiIcon from '@/assets/images/icons/apps/taxi.svg';
import adsIcon from '@/assets/images/icons/apps/ads.svg';
import forbesIcon from '@/assets/images/icons/apps/forbes.svg';
import myCarIcon from '@/assets/images/icons/apps/my-car.svg';
import callIcon from '@/assets/images/icons/apps/call.svg';
import gpsIcon from '@/assets/images/icons/apps/gps.svg';
import messengerIcon from '@/assets/images/icons/apps/messenger.svg';
import HomeAppIcon from "@/components/atoms/HomeAppIcon";

export default {
  name: "HomeApp",
  components: {HomeAppIcon, IPhoneAppFrame, HomeGeneralWidget},
  data: function () {
    return {
      balance: 1200,
      phoneNumber: '545-24-24',
      apps: [
        {
          icon: taxiIcon,
          label: "Такси",
          componentName: "TaxiApp",
        },
        {
          icon: adsIcon,
          label: "Объявления",
          componentName: "AdsApp",
        },
        {
          icon: forbesIcon,
          label: "Forbes",
          componentName: "ForbesApp",
        },
        {
          icon: myCarIcon,
          label: "MyCAR",
          componentName: "MyCarApp",
        },
      ],
      hotbarApps: [
        {
          icon: callIcon,
          componentName: "CallApp",
        },
        {
          icon: gpsIcon,
          componentName: "GpsApp",
        },
        {
          icon: messengerIcon,
          componentName: "MessengerApp",
        },
      ]
    }
  },
  methods: {
    openApp: function (app) {
      this.$store.commit('phone/openApp', app.componentName);
    }
  },
  mounted() {
    this.$store.commit('phone/setStatusBarTheme', 'dark');
    this.$store.commit('phone/setHomeButtonTheme', 'dark');
  }
}
</script>

<style lang="scss">
.home-app {
  width: 100%;
  height: 100%;

  background-image: url("../../../assets/images/backgrounds/home.png");
  background-size: cover;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 1vw;

    height: 100%;
  }

  &__apps {
    display: grid;
    flex-grow: 1;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: min-content;
    gap: .5vw
  }

  &__hotbar {
    display: flex;
    justify-content: space-between;
    gap: 1vw;

    padding: .6vw;

    background: rgba(255, 255, 255, 0.2);
    border-radius: 2.5vw;
    backdrop-filter: blur(4vw);
  }
}
</style>