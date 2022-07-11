<template>
  <img class="loading-spinner" src="@/assets/images/loader-taxi.png"/>
</template>

<script>
export default {
  name: "LoadingSpinner"
}
</script>

<style lang="scss">
.loading-spinner {
  width: 2vw;

  animation: 2s loading-spinner infinite linear;
}

@keyframes loading-spinner {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>