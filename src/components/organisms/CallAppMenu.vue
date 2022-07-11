<template>
  <div class="call-app-menu">
    <CallAppMenuButton
        class="call-app-menu__button"
        v-for="(item, index) in items"
        :key="index"
        :label="item.label"
        :icon="item.icon"
        @click.native="$store.commit('phoneCallApp/openTab', item.name)"
        :inactive="$store.state.phoneCallApp.tab !== item.name"
    />
  </div>
</template>

<script>
import keyboardIcon from '@/assets/images/icons/keyboard.svg'
import contactIcon from '@/assets/images/icons/contact.svg'
import watchIcon from '@/assets/images/icons/watch.svg'
import CallAppMenuButton from "@/components/atoms/CallAppMenuButton";

export default {
  name: "CallAppMenu",
  components: {CallAppMenuButton},
  data: function () {
    return {
      items: [
        {
          icon: keyboardIcon,
          label: "Набор",
          name: "keyboard"
        },
        {
          icon: contactIcon,
          label: "Контакты",
          name: "contacts",
        },
        {
          icon: watchIcon,
          label: "Журнал",
          name: "calls"
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.call-app-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.1vw;

  //&__button {
  //  flex: 1 0 0;
  //}
}
</style>