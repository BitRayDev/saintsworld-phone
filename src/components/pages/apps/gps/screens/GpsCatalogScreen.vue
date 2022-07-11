<template>
  <div class="gps-catalog-screen">
    <AppTopBar
        class="gps-catalog-screen__top-bar"
        title="GPS"
        :show-back-button="$store.state.phoneGpsApp.activePoint.parent"
        @go-back-click="goBack"
    />
    <img class="gps-catalog-screen__map-image" src="@/assets/images/icons/transparent-map.svg"/>
    <div class="gps-catalog-screen__catalog">
      <div class="gps-catalog-screen__hot-points">
        <ClassicButton
            class="gps-catalog-screen__hot-point"
            v-for="(point, index) in ($store.state.phoneGpsApp.activePoint?.hotPoints ?? [{ name: 'Ближайший', icon: require('@/assets/images/icons/chevrons-up.svg') }])"
            :key="index"
            :text="point.name"
            :icon="point.icon"
            @click.native="selectItem(point)"
        />
      </div>
      <div class="gps-catalog-screen__points">
        <ClassicButton
            class="gps-catalog-screen__point"
            v-for="(point, index) in $store.state.phoneGpsApp.activePoint?.points"
            :key="index"
            :text="point.name"
            :icon="point.icon"
            :append-icon="point.points?.length ? require('@/assets/images/icons/chevron-right.svg') : require('@/assets/images/icons/corner-right-up.svg')"
            border-color="rgba(55, 176, 255, 0.1)"
            @click.native="selectItem(point)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import homeIcon from '@/assets/images/icons/home.svg'
import creditCardIcon from '@/assets/images/icons/credit-card.svg'
import infoIcon from '@/assets/images/icons/info.svg'
import loaderIcon from '@/assets/images/icons/loader.svg'
import shoppingCartIcon from '@/assets/images/icons/shopping-cart.svg'
import clothesHangerIcon from '@/assets/images/icons/clothes-hanger.svg'
import scissorsIcon from '@/assets/images/icons/scissors.svg'
import gasIcon from '@/assets/images/icons/gas.svg'
import tatooIcon from '@/assets/images/icons/tatoo.svg'
import gunIcon from '@/assets/images/icons/gun.svg'
import ClassicButton from "@/components/atoms/buttons/ClassicButton";
import AppTopBar from "@/components/organisms/AppTopBar";

export default {
  name: "GpsCatalogScreen",
  components: {AppTopBar, ClassicButton},
  data: function () {
    return {
      root: {
        hotPoints: [
          {
            name: "Дом",
            icon: homeIcon,
          },
          {
            name: "Банкомат",
            icon: creditCardIcon,
          },
        ],
        points: [
          {
            name: "Важное",
            icon: infoIcon,
            points: [
              {
                name: "Магазин 1",
              },
              {
                name: "Магазин 1",
              },
              {
                name: "Магазин 1",
              },
              {
                name: "Магазин 1",
              },
            ]
          },
          {
            name: "Разное",
            icon: loaderIcon,
          },
          {
            name: "Магазины",
            icon: shoppingCartIcon,
          },
          {
            name: "Магазины одежды",
            icon: clothesHangerIcon,
          },
          {
            name: "Барбершопы",
            icon: scissorsIcon,
          },
          {
            name: "Заправки",
            icon: gasIcon,
          },
          {
            name: "Тату-салоны",
            icon: tatooIcon,
          },
          {
            name: "Магазины оружия",
            icon: gunIcon,
          },
        ]
      }
    }
  },
  mounted() {
    if(!this.$store.state.phoneGpsApp.activePoint)
      this.$store.commit('phoneGpsApp/setActivePoint', this.root);
  },
  methods: {
    selectItem: function (item) {
      const activePoint = this.$store.state.phoneGpsApp.activePoint;
      this.$store.commit('phoneGpsApp/setActivePoint', {
        ...item,
        parent: activePoint
      });
    },
    goBack: function () {
      this.$store.commit('phoneGpsApp/setActivePoint', this.$store.state.phoneGpsApp.activePoint.parent);
    }
  }
}
</script>

<style lang="scss">
.gps-catalog-screen {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  &__top-bar {
    align-self: stretch;
  }

  &__map-image {
    height: 2.5vw;

    margin-top: 1.25vw;
    margin-bottom: 1vw;

    filter: drop-shadow(0px 0px 1vw rgba(255, 255, 255, 1));
    //box-shadow: 0px 0px 33px rgba(255, 255, 255, 0.67);
  }

  &__catalog {
    flex-grow: 1;
    width: 100%;

    box-sizing: border-box;
    padding: .6vw;

    background: linear-gradient(180deg, rgba(20, 27, 35, 0.98) 0%, rgba(20, 34, 47, 0.98) 100%);
    border-radius: 1vw;

    overflow: auto;
  }

  &__hot-points {
    display: flex;
    gap: .5vw;

    margin-bottom: .5vw;
  }

  &__hot-point {
    flex-grow: 1;
  }

  &__points {
    display: flex;
    flex-direction: column;
    gap: .25vw;
  }
  &__point {
    color: white;
    border-color: rgba(55, 176, 255, 0.1);
  }
}
</style>