<template>
  <div class="iphone-app-frame" :style="{ padding: paddingValue }">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "IPhoneAppFrame",
  props: {
    verticalPadding: {
      type: Number,
      default: 0.25
    },
    horizontalPadding: {
      type: Number,
      default: 0.25
    },
  },
  computed: {
    paddingValue: function () {
      return `${this.verticalPadding + 1}vw ${this.horizontalPadding}vw ${this.verticalPadding + (this.$store.getters['phone/isHomeButtonShown'] ? 1.2 : 0)}vw`
    }
  }
}
</script>

<style lang="scss">
.iphone-app-frame {
  height: 100%;

  box-sizing: border-box;
}
</style>