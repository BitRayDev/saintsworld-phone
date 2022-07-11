<template>
  <div class="gps-route-screen">
    <AppTopBar
        class="gps-route-screen__top-bar"
        title="GPS"
        show-back-button
        @go-back-click="goBack"
    />
    <div class="gps-route-screen__general-info">
      <img class="gps-route-screen__pointer-icon" src="@/assets/images/icons/transparent-gps-pointer.svg"/>
      <p class="gps-route-screen__point-name">{{ $store.state.phoneGpsApp.activePoint?.name }}</p>
      <p class="gps-route-screen__point-description">{{ $store.state.phoneGpsApp.activePoint?.description }}</p>
    </div>
    <div class="gps-route-screen__tracker">
      <p class="gps-route-screen__distance-label">Осталось</p>
      <p class="gps-route-screen__distance">
        {{ $store.state.phoneGpsApp.activePoint?.distance }} км
      </p>
      <ClassicButton
          class="gps-route-screen__disable-button"
          :icon="require('@/assets/images/icons/cancel.svg')"
          text="Отключить"
          @click.native="$store.commit('phoneGpsApp/setActivePoint', null)"
      />
    </div>
  </div>
</template>

<script>
import ClassicButton from "@/components/atoms/buttons/ClassicButton";
import AppTopBar from "@/components/organisms/AppTopBar";
export default {
  name: "GpsRouteScreen",
  components: {AppTopBar, ClassicButton},
  methods: {
    goBack: function () {
      this.$store.commit('phoneGpsApp/setActivePoint', this.$store.state.phoneGpsApp.activePoint.parent);
    }
  }
}
</script>

<style lang="scss">
.gps-route-screen {
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  //height: 100%;
  height: available;

  &__general-info {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .25vw;

  }

  &__pointer-icon {
    width: 3vw;
  }

  &__point-name {
    color: white;

    font-size: .75vw;
    font-weight: 500;
  }
  &__point-description {
    color: white;
    opacity: 0.5;

    font-size: .65vw;
    font-weight: 500;

  }

  &__tracker {
    display: flex;
    flex-direction: column;
    gap: .25vw;

    padding: .5vw;

    background: linear-gradient(180deg, rgba(20, 27, 35, 0.98) 0%, rgba(20, 34, 47, 0.98) 100%);
    border-radius: 1vw;
  }

  &__distance-label {
    color: white;

    font-size: .55vw;
    text-align: center;
  }

  &__distance {
    padding: .35vw;

    color: white;

    font-size: .6vw;
    text-align: center;

    border: .1vw solid rgba(55, 176, 255, 0.1);
    border-radius: .3vw;
  }

  &__disable-button {
    justify-content: center;
  }
}
</style>