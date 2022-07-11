<template>
  <div class="contact-preview">
    <GradientAvatar :text="title" :auto-process="true" :start-color="avatarStartColor" :end-color="avatarEndColor"/>
    <div class="contact-preview__body-container">
      <div class="contact-preview__text-container">
        <p class="contact-preview__title" :style="{ ...titleStyle }" @click="$emit('title-click')">{{ title }}</p>
        <p class="contact-preview__description" :style="{ ...descriptionStyle }">{{ description }}</p>
      </div>
      <img class="contact-preview__icon" :style="{ ...iconStyle }" :src="icon" @click="$emit('icon-click')"/>
    </div>
  </div>
</template>

<script>
import GradientAvatar from "@/components/atoms/GradientAvatar";

export default {
  name: "ContactPreview",
  components: {GradientAvatar},
  props: {
    title: String,
    description: String,
    icon: String,
    titleStyle: Object,
    descriptionStyle: Object,
    iconStyle: Object,
    avatarStartColor: {
      type: String,
      default: '#FF512F',
    },
    avatarEndColor: {
      type: String,
      default: '#DD2476',
    },
  }
}
</script>

<style lang="scss">
.contact-preview {
  display: flex;
  align-items: center;
  gap: .3vw;

  padding-right: .3vw;

  &__title {
    font-weight: 500;
    font-size: .65vw;
    line-height: 1;

    margin-bottom: .1vw;

    cursor: pointer;
  }

  &__description {
    font-size: .6vw;

    opacity: 0.7;
  }

  &__body-container {
    display: flex;
    align-items: center;
    flex-grow: 1;

    height: 2.25vw;

    border-bottom: .1vw solid #E8E9EA;
  }

  &__text-container {
    flex-grow: 1;
  }

  &__icon {
    flex-shrink: 0;

    height: .8vw;
  }
}
</style>