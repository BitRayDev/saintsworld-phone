<template>
  <div class="taxi-app-start-screen">
    <img class="taxi-app-start-screen__logo" src="@/assets/images/taxi-logo.svg"/>
    <TaxiButton
        class="taxi-app-start-screen__button"
        :icon="require('@/assets/images/icons/corner-up-right-white.svg')"
        text="Заказать такси"
        @click.native="$store.commit('phoneTaxiApp/setStatus', 'searching')"
    />
  </div>
</template>

<script>
import TaxiButton from "@/components/atoms/buttons/TaxiButton";
export default {
  name: "TaxiAppStartScreen",
  components: {TaxiButton}
}
</script>

<style lang="scss">
.taxi-app-start-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 1vw;

  &__logo {
    height: 2.3vw;
  }

  &__button {
    width: 80%;
  }
}
</style>