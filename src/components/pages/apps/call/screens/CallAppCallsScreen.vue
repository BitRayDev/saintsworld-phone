<template>
  <div class="call-app-calls-screen">
    <AppTopBar title="Журнал звонков" theme="light"/>
    <div class="call-app-calls-screen__calls">
      <ContactPreview
          v-for="(call, index) in $store.state.phoneCallApp.calls"
          :key="index"
          :title="call.name || call.phoneNumber"
          :description="call.name ? call.phoneNumber : undefined"
          :icon="callIcon(call)"
          :title-style="{ color: call.isMissed ? '#D60D1F' : '' }"
          @click.native="openContact(call)"
      />
    </div>
  </div>
</template>

<script>
import inboundCallIcon from '@/assets/images/icons/inbound-call.svg'
import outboundCallIcon from '@/assets/images/icons/outbound-call.svg'
import missedCallIcon from '@/assets/images/icons/missed-call.svg'

import ClassicInput from "@/components/molecules/inputs/ClassicInput";
import ContactPreview from "@/components/molecules/ContactPreview";
import AppTopBar from "@/components/organisms/AppTopBar";

export default {
  name: "CallAppCallsScreen",
  components: {AppTopBar, ContactPreview, ClassicInput},
  methods: {
    callIcon: function (call) {
      if(call.isOutbound)
        return outboundCallIcon
      else {
        if(call.isMissed)
          return missedCallIcon;

        return inboundCallIcon
      }
    },
    openContact: function (call) {
      this.$store.commit('phoneCallApp/setPreviousScreen', {screen: 'calls', tab: 'calls'})
      this.$store.commit('phoneCallApp/showContact', { ...call })
    }
  }
}
</script>

<style lang="scss">
.call-app-calls-screen {
  display: flex;
  flex-direction: column;
  gap: .25vw;

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: .25vw;
  }

  &__all-label {
    margin: .25vw 0;

    color: #D2D2D6;

    font-size: .55vw;
    text-align: center;
  }
}
</style>