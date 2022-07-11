<template>
  <div class="home-app-icon">
    <img class="home-app-icon__image" :src="icon"/>
    <p v-if="isLabelShown" class="home-app-icon__label">{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: "HomeAppIcon",
  props: {
    icon: String,
    label: String,
    isLabelShown: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
.home-app-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .25vw;

  cursor: pointer;

  &__image {
    width: 2.2vw;
    aspect-ratio: 1;
  }
  &__label {
    color: white;

    font-size: .6vw;
  }
}
</style>