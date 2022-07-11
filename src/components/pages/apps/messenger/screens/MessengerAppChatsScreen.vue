<template>
  <div class="messenger-app-chats-screen">
    <IPhoneAppFrame>
      <div class="messenger-app-chats-screen__content">
        <AppTopBar title="Сообщения" theme="light"/>
        <ClassicInput
            placeholder="Введите имя или номер"
            :right-icon="require('@/assets/images/icons/chevron-right.svg')"
            v-model="searchInputValue"
        />
        <div class="messenger-app-chats-screen__chats-list">
          <ContactPreview
              v-if="filteredChats?.length"
              v-for="(chat, index) in filteredChats"
              :key="index"
              :title="chat.name"
              :description="chat.description"
              :icon="chat.icon"
              :description-style="{ color: chat.isUnknown ? '#0A9CFB' : '' }"
              @click.native="$emit('chat-click', chat)"
          />
          <p class="messenger-app-chats-screen__no-chats-label" v-if="!filteredChats?.length">Номер или контакт не найден, проверьте правильность</p>
        </div>
      </div>
    </IPhoneAppFrame>
  </div>
</template>

<script>
import onlineIndicatorIcon from '@/assets/images/icons/online-indicator.svg';

import AppTopBar from "@/components/organisms/AppTopBar";
import ClassicInput from "@/components/molecules/inputs/ClassicInput";
import ContactPreview from "@/components/molecules/ContactPreview";
import IPhoneAppFrame from "@/components/layouts/phones/iphone/IPhoneAppFrame";

export default {
  name: "MessengerAppChatsScreen",
  components: {IPhoneAppFrame, ContactPreview, ClassicInput, AppTopBar},
  props: {
    chats: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data: function () {
    return {
      searchInputValue: ""
    }
  },
  computed: {
    filteredChats() {
      const filteredChats = this.chats.filter(chat => chat.name.includes(this.searchInputValue)).map(chat => ({
        name: chat.name,
        description: this.getLastChatMessage(chat).text,
        icon: this.isReadIndicatorActiveForChat(chat) ? onlineIndicatorIcon : ''
      }));
      if(filteredChats?.length)
          return filteredChats

      if(this.searchInputValue.match(/^[0-9]+$/g))
        return [
          {
            name: this.searchInputValue,
            description: "Неизвестный номер",
            isUnknown: true
          }
        ]

      return []
    },
  },
  methods: {
    getLastChatMessage(chat) {
      return chat.messages.slice(-1)[0];
    },
    isReadIndicatorActiveForChat(chat) {
      return this.getLastChatMessage(chat)?.type === 'inbound' && !this.getLastChatMessage(chat)?.isRead;
    },
  }
}
</script>

<style lang="scss">
.messenger-app-chats-screen {
  &__content {
    display: flex;
    flex-direction: column;
    gap: .4vw;
  }
  &__no-chats-label {
    margin: .5vw;

    opacity: .5;

    font-size: .6vw;
    text-align: center;
  }
}
</style>