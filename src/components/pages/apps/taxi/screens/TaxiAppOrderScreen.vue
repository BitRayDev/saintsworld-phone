<template>
  <div class="taxi-app-order-screen">
    <div class="taxi-app-order-screen__centered">
      <div class="taxi-app-order-screen__order-properties">
        <div class="taxi-app-order-screen__order-property taxi-order-property" v-for="property in properties">
          <p class="taxi-order-property__label">{{ property.label }}</p>
          <div class="taxi-order-property__body">
            <p class="taxi-order-property__value">{{ property.value }}</p>
            <img class="taxi-order-property__icon" :src="property.icon"/>
          </div>
        </div>
      </div>
    </div>
    <ClassicButton
        class="taxi-app-order-screen__cancel-button"
        :icon="require('@/assets/images/icons/cancel.svg')"
        text="Отменить"
        @click.native="$store.commit('phoneTaxiApp/setStatus', '')"
    />
  </div>
</template>

<script>
import taxiDriverIcon from '@/assets/images/icons/taxi-driver.svg';
import numberIcon from '@/assets/images/icons/number.svg';
import ClassicButton from "@/components/atoms/buttons/ClassicButton";

export default {
  name: "TaxiAppOrderScreen",
  components: {ClassicButton},
  data: function () {
    return {
      properties: [
        {
          label: "Расстояние до машины",
          value: this.$store.state.phoneTaxiApp.car.distance + "м",
        },
        {
          label: "Водитель",
          value: this.$store.state.phoneTaxiApp.car.driver,
          icon: taxiDriverIcon
        },
        {
          label: "Номер",
          value: this.$store.state.phoneTaxiApp.car.number,
          icon: numberIcon
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.taxi-app-order-screen {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &__centered {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .25vw;
  }

  &__order-properties {
    display: flex;
    flex-direction: column;
    gap: .4vw;

    width: 80%;

    padding: .5vw;

    background: rgba(241, 138, 16, 0.1);
    border-radius: .3vw;
  }

  &__cancel-button {
    justify-content: center;
  }
}
.taxi-order-property {
  &__label {
    margin-bottom: .1vw;

    color: #F18A10;

    font-size: .55vw;
  }
  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: .25vw;

    padding: .3vw;

    background-color: white;
    border-radius: .3vw;
  }
  &__value {
    color: #5F3908;

    font-size: .6vw;
  }
  &__icon {
    height: .75vw;
  }
}
</style>