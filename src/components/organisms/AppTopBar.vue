<template>
  <div :class="`app-top-bar app-top-bar_theme_${theme}`">
    <div class="app-top-bar__icon-container">
      <IconButton class="app-top-bar__icon" v-if="showBackButton"
                  :icon="require('@/assets/images/icons/go-back.svg')" @click.native="$emit('go-back-click')" :theme="theme"/>
    </div>
    <p class="app-top-bar__title">{{ title }}</p>
    <div class="app-top-bar__icon-container">
      <IconButton class="app-top-bar__icon" :icon="rightIcon" @click.native="$emit('right-icon-click')" v-if="rightIcon" :theme="theme"/>
    </div>
  </div>
</template>

<script>
import IconButton from "@/components/atoms/buttons/IconButton";

export default {
  name: "AppTopBar",
  components: {IconButton},
  props: {
    rightIcon: String,
    title: String,
    showBackButton: Boolean,
    theme: {
      type: String,
      default: "dark"
    }
  }
}
</script>

<style lang="scss">
.app-top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: .25vw 0;

  &_theme {
    &_dark {
      color: white;
    }
    &_light {
      color: black;
    }
  }

  &__icon-container {
    width: 1.25vw;
  }

  &__icon {
    height: 1.25vw;
  }

  &__title {
    font-weight: 500;
    font-size: .58vw;
  }
}
</style>