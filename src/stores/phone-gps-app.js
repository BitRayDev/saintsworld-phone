export const phoneGpsApp = {
  namespaced: true,
  state: function () {
    return {
      activePoint: null
    }
  },
  mutations: {
    setActivePoint: function (state, point) {
      state.activePoint = point;
    },
  }
}