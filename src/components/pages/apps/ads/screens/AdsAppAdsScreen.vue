<template>
  <div class="ads-app-ads-screen">
    <AppTopBar
        title="Weazel News"
        :right-icon="require('@/assets/images/icons/plus.svg')"
        theme="light"
        @right-icon-click="$store.commit('phoneAdsApp/createAd')"
    />
    <ClassicButton
        class="ads-app-ads-screen__my-ads-button"
        :icon="require('@/assets/images/icons/home.svg')"
        text="Мои объявления"
        @click.native="$store.commit('phoneAdsApp/openScreen', 'my-ads')"
    />
    <div class="ads-app-ads-screen__ads">
      <p class="ads-app-ads-screen__last-ads-label">Последние объявления</p>
      <AdCard
          v-for="(ad, index) in ads"
          :key="index"
          :title="ad.title"
          :text="ad.text"
          :time="ad.time"
          :phone-number="ad.phoneNumber"
          is-contacts-shown
      />
    </div>
    <div class="ads-app-ads-screen__fade"/>
  </div>
</template>

<script>
import AppTopBar from "@/components/organisms/AppTopBar";
import ClassicButton from "@/components/atoms/buttons/ClassicButton";
import AdCard from "@/components/molecules/AdCard";

const testAd = {
  title: "John",
  text: "Do you ever think we should just stop doing this? Would you come to my funeral?",
  time: "00:03",
  phoneNumber: '22222222',
}

export default {
  name: "AdsAppAdsScreen",
  components: {AdCard, ClassicButton, AppTopBar},
  data: function () {
    return {
      ads: [
        testAd,
        testAd,
        testAd,
        testAd,
        testAd,
        testAd,
      ]
    }
  }
}
</script>

<style lang="scss">
.ads-app-ads-screen {
  display: flex;
  flex-direction: column;
  gap: .25vw;

  height: 100%;

  position: relative;

  &__my-ads-button {
    color: black;
  }

  &__last-ads-label {
    margin-top: .3vw;

    color: #D2D2D6;

    font-size: .6vw;
  }

  &__ads {
    display: flex;
    flex-direction: column;
    gap: .25vw;

    overflow: auto;
  }

  &__fade {
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3vw;

    pointer-events: none;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
  }
}
</style>