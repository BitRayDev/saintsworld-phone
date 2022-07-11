<template>
  <div :class="`pop-up-menu pop-up-menu_theme_${theme}`">
    <div class="pop-up-menu__screen" @click="$emit('close')"/>
    <div class="pop-up-menu__window" :style="{ right: `${adjustedPosition.x}px`, top: `${adjustedPosition.y}px` }">
      <ClassicButton class="pop-up-menu__button" :class="item.class" v-for="(item, index) in items" :key="index" :icon="item.icon" :text="item.text"
                     @click.native="$emit('item-click', item)"/>
    </div>
  </div>
</template>

<script>
import ClassicButton from "@/components/atoms/buttons/ClassicButton";

export default {
  name: "PopUpMenu",
  components: {ClassicButton},
  props: {
    items: Array,
    position: Object,
    theme: {
      type: String,
      default: "dark"
    }
  },
  computed: {
    adjustedPosition: function () {
      return {
        x: document.body.clientWidth - this.position.x,
        y: this.position.y
      }
    }
  }
}
</script>

<style lang="scss">
.pop-up-menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  z-index: 100;

  &_theme {
    &_dark {
      .pop-up-menu__button {
        color: white;
      }
    }

    &_light {
      .pop-up-menu__window {
        background-image: none;
        background-color: white;
      }
      .pop-up-menu__button {
        color: black;
      }
    }
  }

  &__screen {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }

  &__window {
    display: flex;
    flex-direction: column;
    gap: .25vw;

    padding: .4vw;

    position: absolute;

    background: linear-gradient(180deg, rgba(5, 17, 117, 0.2) 0%, rgba(0, 26, 255, 0.054) 100%), #141B23;

    border: .1vw solid rgba(55, 176, 255, 0.15);
    border-radius: .55vw;
    box-shadow: 0px 4px 16px rgba(10, 156, 251, 0.1);
  }
}
</style>