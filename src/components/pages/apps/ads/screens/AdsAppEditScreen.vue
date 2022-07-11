<template>
  <div class="ads-app-edit-screen">
    <AppTopBar
        title="Weazel News"
        theme="light"
        show-back-button
        @go-back-click="$store.commit('phoneAdsApp/openScreen', 'ads')"
    />
    <p class="ads-app-edit-screen__label">Объявление</p>
    <ClassicTextarea class="ads-app-edit-screen__text" placeholder="Введите текст объявления" v-model="textInputValue"/>
    <p class="ads-app-edit-screen__label">К оплате:</p>
    <p class="ads-app-edit-screen__total-value">{{ textInputValue.length * pricePerSymbol }}$</p>
    <ClassicButton class="ads-app-edit-screen__send-button" theme="primary" text="Оплатить и отправить" :disabled="!textInputValue"/>
    <p class="ads-app-edit-screen__symbol-price-label">Цена за символ -- {{ pricePerSymbol }}$</p>
  </div>
</template>

<script>
import AppTopBar from "@/components/organisms/AppTopBar";
import ClassicTextarea from "@/components/molecules/inputs/ClassicTextarea";
import ClassicButton from "@/components/atoms/buttons/ClassicButton";
export default {
  name: "AdsAppEditScreen",
  components: {ClassicButton, ClassicTextarea, AppTopBar},
  data: function () {
    return {
      textInputValue: this.$store.state.phoneAdsApp.createdAd.text,
      pricePerSymbol: 22
    }
  }
}
</script>

<style lang="scss">
.ads-app-edit-screen {
  display: flex;
  flex-direction: column;
  gap: .2vw;

  &__text {
    margin-bottom: .3vw;
  }

  &__label {
    font-size: .55vw;
  }
  &__total-value {
    padding: .3vw;
    margin-bottom: .3vw;

    font-size: .6vw;
    text-align: center;

    border: 1px solid rgba(55, 176, 255, 0.1);
    border-radius: 6px;
  }
  &__send-button {
    justify-content: center;
    margin-bottom: .25vw;
  }
  &__symbol-price-label {
    color: #72889E;

    font-size: .55vw;
    text-align: center;
  }
}
</style>