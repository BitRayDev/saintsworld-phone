<template>
  <div class="forbes-app">
    <IPhoneAppFrame>
      <div class="forbes-app__content">
        <AppTopBar class="forbes-app__top-bar" title="Forbes"/>
        <img class="forbes-app__logo" src="@/assets/images/forbes-logo.svg"/>
        <div class="forbes-app__rating">
          <ForbesCard
              v-for="(player, index) in sortedPlayers"
              :key="index"
              :value="player.value"
              :name="player.name"
              :place="index+1"
          />
        </div>
      </div>
    </IPhoneAppFrame>
  </div>
</template>

<script>
import IPhoneAppFrame from "@/components/layouts/phones/iphone/IPhoneAppFrame";
import AppTopBar from "@/components/organisms/AppTopBar";
import ForbesCard from "@/components/molecules/ForbesCard";

const testPlayer1 = {
  name: "Test Name",
  value: 1
}
const testPlayer2 = {
  name: "Test Name",
  value: 2
}

export default {
  name: "ForbesApp",
  components: {ForbesCard, AppTopBar, IPhoneAppFrame},
  data: function () {
    return {
      players: [
        testPlayer1,
        testPlayer2,
        testPlayer1,
        testPlayer2,
        testPlayer1,
        testPlayer2,
        testPlayer1,
        testPlayer2,
        testPlayer1,
      ]
    }
  },
  computed: {
    sortedPlayers: function () {
      return [...this.players].sort((a, b) => b.value - a.value)
    }
  }
}
</script>

<style lang="scss">
.forbes-app {
  height: 100%;

  background-color: black;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: .5vw;

    height: 100%;

    overflow: hidden;
  }

  &__top-bar {
    color: white;
  }

  &__logo {
    align-self: center;

    width: 2vw;
  }

  &__rating {
    display: flex;
    flex-direction: column;
    gap: .25vw;

    overflow: auto;
  }

}
</style>