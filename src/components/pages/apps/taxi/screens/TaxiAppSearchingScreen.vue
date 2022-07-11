<template>
  <div class="taxi-app-searching-screen">
    <div class="taxi-app-searching-screen__centered">
      <LoadingSpinner/>
      <p class="taxi-app-searching-screen__searching-label">Поиск водителя</p>
    </div>
    <ClassicButton
        class="taxi-app-searching-screen__cancel-button"
        :icon="require('@/assets/images/icons/cancel.svg')"
        text="Отменить"
        @click.native="$store.commit('phoneTaxiApp/setStatus', '')"
    />
  </div>
</template>

<script>
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import ClassicButton from "@/components/atoms/buttons/ClassicButton";

export default {
  name: "TaxiAppSearchingScreen",
  components: {ClassicButton, LoadingSpinner},
  mounted() {
    // TODO: Убрать это, только для теста.
    setTimeout(() => {
      this.$store.commit('phoneTaxiApp/setStatus', 'found')
    }, 2000)
  }
}
</script>

<style lang="scss">
.taxi-app-searching-screen {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &__centered {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5vw;
  }
  &__searching-label {
    padding: .35vw .75vw;

    width: 80%;

    color: #F18A10;

    font-size: .6vw;
    text-align: center;

    background: rgba(241, 138, 16, 0.1);
    border-radius: .3vw;
  }

  &__cancel-button {
    justify-content: center;
  }
}
</style>