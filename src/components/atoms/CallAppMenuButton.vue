<template>
  <div class="call-app-menu-button" :class="{ 'call-app-menu-button_inactive': inactive }">
    <img class="call-app-menu-button__icon" :src="icon"/>
    <p class="call-app-menu-button__label">{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: "CallAppMenuButton",
  props: {
    icon: String,
    label: String,
    inactive: Boolean
  }
}
</script>

<style lang="scss">
.call-app-menu-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .25vw;

  cursor: pointer;

  &_inactive {
    .call-app-menu-button__icon {
      opacity: .1;
    }
  }

  &__icon {
    width: 1.2vw;
  }

  &__label {
    font-size: .58vw;

    color: rgba(0, 0, 0, 0.6);
  }
}
</style>