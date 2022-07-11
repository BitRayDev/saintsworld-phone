<template>
  <div class="confirm-dialog">
    <div
        class="confirm-dialog__background"
         @click="$emit('cancel-click')"
    />
    <div class="confirm-dialog__window">
      <p class="confirm-dialog__text"> {{ text }} </p>
      <div class="confirm-dialog__buttons">
        <ClassicButton
            class="confirm-dialog__button confirm-dialog__button_cancel"
            text="Отмена"
            @click.native="$emit('confirm-click')"
        />
        <ClassicButton
            class="confirm-dialog__button confirm-dialog__button_submit"
            text="ОК"
            theme="primary"
            @click.native="$emit('cancel-click')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ClassicButton from "@/components/atoms/buttons/ClassicButton";

export default {
  name: "ConfirmDialog",
  components: {ClassicButton},
  props: {
    text: String
  }
}
</script>

<style lang="scss">
.confirm-dialog {
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 1vw;
  top: 1vw;
  bottom: 1vw;
  right: 1vw;

  border-radius: 1vw;
  overflow: hidden;

  &__background {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;

    backdrop-filter: blur(1vw);
  }

  &__window {
    width: 80%;

    padding: .5vw;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: linear-gradient(180deg, rgba(5, 17, 117, 0.2) 0%, rgba(0, 26, 255, 0.054) 100%), #141B23;
    border-radius: .5vw;
  }

  &__text {
    margin-bottom: .5vw;

    color: white;

    font-size: .7vw;
    font-weight: 500;
    text-align: center;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25vw;
  }
  &__button {
    flex: 1 0 0;
    justify-content: center;

    &_cancel {
      color: white;
    }
  }
}
</style>