export const phoneAdsApp = {
  namespaced: true,
  state: function () {
    return {
      // edit-ad | ads | my-ads
      screen: "",
      createdAd: {
        text: ""
      },
    }
  },
  mutations: {
    createAd: function(state, text) {
      if(text)
        state.createdAd.text = text;

      state.screen = "edit-ad"
    },
    openScreen: function (state, screen) {
      state.screen = screen;
    }
  }
}