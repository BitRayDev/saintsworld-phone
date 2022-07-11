<template>
  <div class="taxi-app-driver-found-screen">
    <TaxiButton class="taxi-app-driver-found-screen__button" text="Водитель найден!" :icon="require('@/assets/images/icons/check-circle.svg')"/>
  </div>
</template>

<script>
import TaxiButton from "@/components/atoms/buttons/TaxiButton";
export default {
  name: "TaxiAppDriverFoundScreen",
  components: {TaxiButton},
  mounted() {
    // TODO: Убрать это, только для теста.
    setTimeout(() => {
      this.$store.commit('phoneTaxiApp/setStatus', 'car-info')
      this.$store.commit('phoneTaxiApp/setCar', {
        distance: 500,
        driver: "Водила",
        number: "1488"
      })
    }, 2000)
  }
}
</script>

<style lang="scss">
.taxi-app-driver-found-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;

  &__button {
    width: 80%;
  }
}
</style>