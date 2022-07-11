<template>
  <p class="gradient-avatar" :style="{ background: `linear-gradient(90deg, ${startColor} 0%, ${endColor} 100%)` }">
    {{ processedText }}
  </p>
</template>

<script>
export default {
  name: "GradientAvatar",
  props: {
    text: String,
    autoProcess: Boolean,
    startColor: String,
    endColor: String,
  },
  computed: {
    processedText: function () {
      if(!this.text)
        return "";

      if(this.autoProcess && this.text.includes(' ')) {
        const words = this.text.split(' ');
        return words[0][0] + words[1][0]
      } else {
        return this.text.substring(0, 2);
      }
    }
  }
}
</script>

<style lang="scss">
.gradient-avatar {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 1.75vw;

  aspect-ratio: 1;

  color: white;

  font-size: .8vw;
  font-weight: 500;

  box-shadow: inset 0 0 0 .05vw rgba(255, 255, 255, 0.5);
  border-radius: 100%;
}
</style>