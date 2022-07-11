<template>
  <div class="forbes-card">
    <p class="forbes-card__place">{{ place }}</p>
    <div class="forbes-card__body-container">
      <p class="forbes-card__name">{{ name }}</p>
      <p class="forbes-card__value">{{ value }}$</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForbesCard",
  props: {
    place: Number,
    name: String,
    value: Number,
  }
}
</script>

<style lang="scss">
.forbes-card {
  display: flex;
  align-items: center;
  gap: .5vw;

  padding: .5vw 1vw;

  background: rgba(55, 176, 255, 0.1);
  border-radius: .3vw;

  &__place {
    color: white;

    font-size: 2vw;
    font-style: italic;
    font-weight: 200;
  }

  &__name {
    margin-bottom: .3vw;

    color: white;

    font-size: .6vw;
    font-weight: 500;
  }

  &__value {
    color: white;

    font-size: .6vw;
    font-weight: 700;

    text-shadow: 0px 0px .5vw rgba(255, 255, 255, 1);
  }
}
</style>