<template>
  <div class="call-app-default-layout">
    <IPhoneAppFrame>
      <slot/>
      <CallAppMenu/>
    </IPhoneAppFrame>
  </div>
</template>

<script>
import CallAppMenu from "@/components/organisms/CallAppMenu";
import IPhoneAppFrame from "@/components/layouts/phones/iphone/IPhoneAppFrame";

export default {
  name: "CallAppDefaultLayout",
  components: {IPhoneAppFrame, CallAppMenu}
}
</script>

<style lang="scss">

</style>