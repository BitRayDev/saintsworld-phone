<template>
  <div class="home-general-widget">
    <p class="home-general-widget__balance-label">Ваш баланс</p>
    <p class="home-general-widget__balance-value">{{ balance }}$</p>
    <p class="home-general-widget__phone-number-label">
      Ваш номер
      <img class="home-general-widget__phone-icon" src="@/assets/images/icons/phone.svg"/>
    </p>
    <p class="home-general-widget__phone-number-value">{{ phoneNumber }}</p>
    <div class="home-general-widget__logout-button">
      <img class="home-general-widget__logout-icon" src="@/assets/images/icons/log-out.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeGeneralWidget",
  props: {
    balance: Number,
    phoneNumber: String
  }
}
</script>

<style lang="scss">
.home-general-widget {
  padding: .75vw;

  background: linear-gradient(180deg, rgba(7, 7, 20, 0.9) 0%, rgba(36, 35, 74, 0.9) 100%);
  border-radius: 1vw;
  backdrop-filter: blur(.5vw);

  &__balance-label {
    color: white;

    font-size: .7vw;
  }
  &__balance-value {
    margin-bottom: 1vw;

    color: white;

    font-size: 2vw;
    font-weight: 300;
  }
  &__phone-number-label {
    color: white;

    font-size: .7vw;
  }
  &__phone-icon {
    height: .5vw;
  }
  &__phone-number-value {
    color: white;

    font-size: 1vw;
  }

  &__logout-button {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: .75vw;
    bottom: .75vw;

    height: 1.3vw;
    aspect-ratio: 1;

    background: radial-gradient(50% 50% at 50% 50%, #37B0FF 0%, #0A9CFB 100%);
    border-radius: 100%;
    box-shadow: 0px .1vw .5vw rgba(9, 76, 248, 0.36);

    cursor: pointer;
  }
  &__logout-icon {
    height: 50%;
  }
}
</style>