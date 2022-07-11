<template>
  <div class="messenger-app-chat-screen">
    <IPhoneAppFrame :horizontal-padding="0">
      <div class="messenger-app-chat-screen__content">
        <AppTopBar
            :right-icon="require('@/assets/images/icons/plus.svg')"
            :title="chat?.name"
            show-back-button
            @go-back-click="$emit('go-back-click')"
            @right-icon-click="addToContacts"
            theme="light"
        />
        <div class="messenger-app-chat-screen__messages">
          <p v-if="!chat?.messages?.length" class="messenger-app-chat-screen__no-messages-label">
            Отправьте первое<br>
            сообщение
          </p>
          <MessageBubble v-else v-for="(message, index) in chat?.messages" :key="index" :text="message.text"
                         :outbound="message.type === 'outbound'"/>
        </div>
        <div class="messenger-app-chat-screen__send-container">
          <ClassicInput class="messenger-app-chat-screen__send-input" v-model="sendInputValue"/>
          <SendButton :disabled="!sendInputValue"/>
        </div>
      </div>
    </IPhoneAppFrame>
  </div>
</template>

<script>
import AppTopBar from "@/components/organisms/AppTopBar";
import MessageBubble from "@/components/atoms/MessageBubble";
import ClassicInput from "@/components/molecules/inputs/ClassicInput";
import SendButton from "@/components/atoms/buttons/SendButton";
import IPhoneAppFrame from "@/components/layouts/phones/iphone/IPhoneAppFrame";

export default {
  name: "MessengerAppChatScreen",
  components: {IPhoneAppFrame, SendButton, ClassicInput, MessageBubble, AppTopBar},
  props: {
    chat: Object
  },
  data: function () {
    return {
      sendInputValue: ""
    }
  },
  methods: {
    addToContacts: function () {
      this.$store.commit('phoneCallApp/addContact', { phoneNumber: this.chat.name })
      this.$store.commit('phone/openApp', 'CallApp')
    }
  }
}
</script>

<style lang="scss">
.messenger-app-chat-screen {
  height: 100%;

  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__messages {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: .5vw;

    padding: .5vw;

    background: linear-gradient(180deg, rgba(20, 27, 35, 0.05) 0%, rgba(20, 34, 47, 0.05) 100%);
    box-shadow: inset 0px -4px 16px rgba(20, 27, 35, 0.1), inset 0px 4px 16px rgba(20, 27, 35, 0.1);
  }

  &__send-container {
    display: flex;
    gap: .25vw;

    padding: .25vw;
  }

  &__no-messages-label {
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    color: #72889E;

    font-size: .65vw;
    text-align: center;
  }

  &__send-input {
    flex-grow: 1;
  }
}

</style>