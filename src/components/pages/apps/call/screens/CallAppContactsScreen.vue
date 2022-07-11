<template>
  <div class="call-app-contacts-screen">
    <AppTopBar
        title="Список контактов"
        :right-icon="require('@/assets/images/icons/plus.svg')"
        @right-icon-click="$store.commit('phoneCallApp/addContact', { name: '', phoneNumber: '' })"
        theme="light"
    />
    <ClassicInput
        class="call-app-contacts-screen__search-input"
        :left-icon="require('@/assets/images/icons/search.svg')"
        placeholder="Поиск"
        v-model="searchInputValue"
    />
    <div class="call-app-contacts-screen__contacts">
      <ContactPreview
          v-for="(contact, index) in filteredFavouriteContacts"
          :key="index"
          :title="contact.name"
          :description="contact.phoneNumber"
          :icon="require('@/assets/images/icons/star-filled.svg')"
          @icon-click="toggleContactFavourite(contact)"
          @title-click="openContact(contact)"
      />
      <p class="call-app-contacts-screen__all-label">Все контакты</p>
      <ContactPreview
          v-for="(contact, index) in filteredNonFavouriteContacts"
          :key="index"
          :title="contact.name"
          :description="contact.phoneNumber"
          :icon="require('@/assets/images/icons/star.svg')"
          @icon-click="toggleContactFavourite(contact)"
          @title-click="openContact(contact)"
      />
    </div>
    <div class="call-app-contacts-screen__fade"/>
  </div>
</template>

<script>
import ClassicInput from "@/components/molecules/inputs/ClassicInput";
import ContactPreview from "@/components/molecules/ContactPreview";
import AppTopBar from "@/components/organisms/AppTopBar";

export default {
  name: "CallAppContactsScreen",
  components: {AppTopBar, ContactPreview, ClassicInput},
  data: function () {
    return {
      searchInputValue: "",
    }
  },
  computed: {
    filteredFavouriteContacts: function () {
      return this.$store.state.phoneCallApp.contacts?.filter(contact => contact.isFavourite && this.isContactSatisfiesFilter(contact));
    },
    filteredNonFavouriteContacts: function () {
      return this.$store.state.phoneCallApp.contacts?.filter(contact => !contact.isFavourite && this.isContactSatisfiesFilter(contact));
    },
  },
  methods: {
    isContactSatisfiesFilter: function (contact) {
      return contact.name.includes(this.searchInputValue) || contact.phoneNumber.includes(this.searchInputValue)
    },
    toggleContactFavourite: function (contact) {
      contact.isFavourite = !contact.isFavourite;
    },
    openContact: function (contact) {
      this.$store.commit('phoneCallApp/setPreviousScreen', {screen: 'contacts', tab: 'contacts'})
      this.$store.commit('phoneCallApp/showContact', contact)
    }
  },
}
</script>

<style lang="scss">
.call-app-contacts-screen {
  display: flex;
  flex-direction: column;
  gap: .25vw;

  height: 100%;

  position: relative;

  &__search-input {
    margin-bottom: 0.4vw;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: .15vw;

    position: relative;

    overflow: auto;
  }

  &__fade {
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4vw;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
    pointer-events: none;
  }

  &__all-label {
    margin: .11vw 0;

    color: #D2D2D6;

    font-size: .55vw;
    text-align: center;
  }
}
</style>