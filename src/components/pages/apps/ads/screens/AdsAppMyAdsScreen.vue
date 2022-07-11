<template>
  <div class="ads-app-my-ads-screen">
    <AppTopBar
        title="Мои объявления"
        :right-icon="require('@/assets/images/icons/plus.svg')"
        theme="light"
        show-back-button
        @right-icon-click="$store.commit('phoneAdsApp/createAd')"
        @go-back-click="$store.commit('phoneAdsApp/openScreen', 'ads')"
    />
    <div class="ads-app-my-ads-screen__buttons">
      <ClassicButton
          class="ads-app-my-ads-screen__button"
          :class="{'ads-app-my-ads-screen__button_inactive': showFavourites}"
          text="Все"
          @click.native="showFavourites = false"
      />
      <ClassicButton
          class="ads-app-my-ads-screen__button"
          :class="{'ads-app-my-ads-screen__button_inactive': !showFavourites}"
          text="Избранные"
          @click.native="showFavourites = true"
      />
    </div>
    <div class="ads-app-my-ads-screen__ads">
      <p class="ads-app-my-ads-screen__my-ads-label">Ваши объявления</p>
      <AdCard
          class="ads-app-my-ads-screen__ad-card"
          :class="{ 'ads-app-my-ads-screen__ad-card_disabled': adMenu.isActive && adMenu.ad != ad }"
          v-for="(ad, index) in (showFavourites ? favouriteAds : ads)"
          :key="index"
          :title="ad.status"
          :text="ad.text"
          :time="ad.time"
          is-favourite-shown
          is-menu-shown
          :is-favourite="ad.isFavourite"
          :title-style="{ color: ad.statusColor }"
          @menu-icon-click="openAdMenu(ad, $event)"
          @favourite-icon-click="ad.isFavourite = !ad.isFavourite"
      />
    </div>
    <div class="ads-app-my-ads-screen__fade"/>
    <PopUpMenu
        class="my-car-app__car-menu"
        v-if="adMenu.isActive"
        :items="adMenu.items"
        :position="adMenu.position"
        @close="adMenu.isActive = false"
        @item-click="onAdMenuItemClick"
        theme="light"
    />
  </div>
</template>

<script>
import AppTopBar from "@/components/organisms/AppTopBar";
import ClassicButton from "@/components/atoms/buttons/ClassicButton";
import AdCard from "@/components/molecules/AdCard";

const testAd1 = {
  status: "Отклонено: не продашь",
  statusColor: "red",
  text: "Do you ever think we should just stop doing this? Would you come to my funeral?",
  time: "00:03",
  isFavourite: false,
}
const testAd2 = {
  status: "Опубликовано",
  statusColor: "#02CE0A",
  text: "Do you ever think we should just stop doing this? Would you come to my funeral?",
  time: "00:03",
  isFavourite: true,
}
const testAd3 = {
  status: "На проверке",
  text: "Do you ever think we should just stop doing this? Would you come to my funeral?",
  time: "00:03",
  isFavourite: false,
}

import trashIcon from '@/assets/images/icons/trash.svg';
import sendIcon from '@/assets/images/icons/send-white.svg';
import PopUpMenu from "@/components/organisms/PopUpMenu";

export default {
  name: "AdsAppMyAdsScreen",
  components: {PopUpMenu, AdCard, ClassicButton, AppTopBar},
  data: function () {
    return {
      showFavourites: false,
      ads: [
        testAd1,
        testAd2,
        testAd3,
      ],
      adMenu: {
        isActive: false,
        ad: null,
        items: [
          {
            text: "Отправить повторно",
            name: "resend",
            icon: sendIcon,
          },
          {
            text: "Удалить",
            icon: trashIcon,
          },
        ],
        position: {}
      },
    }
  },
  methods: {
    openAdMenu: function (ad, event) {
      this.adMenu = {
        ...this.adMenu,
        isActive: true,
        ad,
        position: {
          x: event.clientX,
          y: event.clientY,
        }
      }
    },
    onAdMenuItemClick: function (item) {
      this.adMenu.isActive = false;

      if(item.name === 'resend') {
        this.$store.commit('phoneAdsApp/createAd', this.adMenu.ad.text)
      }
    }
  },
  computed: {
    favouriteAds: function () {
      return this.ads.filter(ad => ad.isFavourite);
    }
  }
}
</script>

<style lang="scss">
.ads-app-my-ads-screen {
  display: flex;
  flex-direction: column;
  gap: .25vw;

  height: 100%;

  position: relative;

  &__ad-card {
    transition: opacity 200ms ease-out;

    &_disabled {
      opacity: .3;
    }
  }

  &__buttons {
    display: flex;
    gap: .25vw;
  }
  &__button {
    flex: 1 0 0;
    justify-content: center;

    &_inactive {
      border-color: rgba(55, 176, 255, 0.1);

      color: #72889E;
    }
  }

  &__my-ads-label {
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