<template>
  <div class="message-bubble" :class="{'message-bubble_outbound' : outbound}">
    <svg class="message-bubble__arrow" viewBox="0 0 8 10" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0L1.41421 6.58579C0.15428 7.84572 1.04662 10 2.82843 10H8V0Z" :fill="backgroundColor"/>
    </svg>
    <p class="message-bubble__text" :style="{ backgroundColor }">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "MessageBubble",
  props: {
    outbound: Boolean,
    text: String,
    backgroundColor: {
      type: String,
      default() {
        return this.outbound ? 'rgba(55, 176, 255, 0.1)' : 'white'
      }
    },
  }
}
</script>

<style lang="scss">
.message-bubble {
  display: flex;
  align-items: flex-end;

  &__arrow {
    height: .5vw;
  }

  &__text {
    padding: .35vw;

    font-size: .65vw;

    border-radius: .4vw .4vw .4vw 0;
  }

  &_outbound {
    justify-content: end;
    flex-direction: row-reverse;

    .message-bubble {
      &__arrow {
        transform: scaleX(-1);
      }
    }
  }
}
</style>