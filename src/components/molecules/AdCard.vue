<template>
  <div class="ad-card">
    <div class="ad-card__data">
      <p class="ad-card__title" :style="{ ...titleStyle }">{{ title }}</p>
      <p class="ad-card__text">{{ text }}</p>
      <p class="ad-card__time">{{ time }}</p>
      <div class="ad-card__contacts" v-if="isContactsShown">
        <CallButton class="ad-card__contact"/>
        <MessageButton class="ad-card__contact"/>
      </div>
    </div>
    <div class="ad-card__actions">
      <IconButton
          :icon=" isFavourite ? require('@/assets/images/icons/star-filled.svg') : require('@/assets/images/icons/star.svg')"
          v-if="isFavouriteShown"
          theme="light"
          @click.native="$emit('favourite-icon-click', $event)"
      />
      <IconButton
          :icon="require('@/assets/images/icons/more-vertical.svg')"
          v-if="isMenuShown"
          theme="light"
          @click.native="$emit('menu-icon-click', $event)"
      />
    </div>
  </div>
</template>

<script>
import CallButton from "@/components/atoms/buttons/CallButton";
import MessageButton from "@/components/atoms/buttons/MessageButton";
import IconButton from "@/components/atoms/buttons/IconButton";
export default {
  name: "AdCard",
  components: {IconButton, MessageButton, CallButton},
  props: {
    title: String,
    text: String,
    time: String,
    isFavourite: Boolean,
    phoneNumber: String,
    isContactsShown: Boolean,
    isFavouriteShown: Boolean,
    isMenuShown: Boolean,
    titleStyle: Object,
  }
}
</script>

<style lang="scss">
.ad-card {
  display: flex;
  gap: .25vw;

  padding: .25vw 0;
  border-bottom: .1vw solid rgba(55, 176, 255, 0.1);

  &__data {
    display: flex;
    flex-direction: column;
    gap: .2vw;
  }

  &__title {
    font-size: .6vw;
    color: #0A9CFB;
  }
  &__text {
    font-size: .6vw;
  }
  &__time {
    font-size: .6vw;
    opacity: 0.4;
  }

  &__contacts {
    display: flex;
    gap: .15vw;
  }
  &__contact {
    height: 1vw;
  }
}
</style>