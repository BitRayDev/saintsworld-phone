<template>
  <div class="messenger-app">
    <MessengerAppChatScreen v-if="activeChat" :chat="activeChat" @go-back-click="activeChat = null"/>
    <MessengerAppChatsScreen v-else :chats="chats" @chat-click="openChat"/>
  </div>
</template>

<script>
import AppTopBar from "@/components/organisms/AppTopBar";
import IPhoneAppFrame from "@/components/layouts/phones/iphone/IPhoneAppFrame";
import ClassicInput from "@/components/molecules/inputs/ClassicInput";
import ContactPreview from "@/components/molecules/ContactPreview";
import MessengerAppChatsScreen from "@/components/pages/apps/messenger/screens/MessengerAppChatsScreen";
import MessengerAppChatScreen from "@/components/pages/apps/messenger/screens/MessengerAppChatScreen";

const testChat = {
  name: "Валентин Копатович",
  messages: [
    {
      type: 'inbound',
      text: 'Приезжай сюда',
      isRead: true,
    },
    {
      type: 'outbound',
      text: 'Приезжай сюда',
      isRead: false
    },
    {
      type: 'inbound',
      text: 'Приезжай сюда',
      isRead: false,
    },
  ]
}

export default {
  name: "MessengerApp",
  components: {
    MessengerAppChatScreen,
    MessengerAppChatsScreen,
    ContactPreview,
    ClassicInput,
    IPhoneAppFrame,
    AppTopBar
  },
  data: function () {
    return {
      activeChat: null,
      chats: [
        testChat,
        testChat,
        testChat,
      ]
    }
  },
  mounted() {
    this.$store.commit('phone/setStatusBarTheme', "light");
    this.$store.commit('phone/setHomeButtonTheme', "light");
  },
  methods: {
    openChat: function (chat) {
      this.activeChat = chat;
    }
  }
}
</script>

<style lang="scss">
.messenger-app {
  height: 100%;

  background-color: white;
}
</style>