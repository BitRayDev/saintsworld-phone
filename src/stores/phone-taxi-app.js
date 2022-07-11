export const phoneTaxiApp = {
  namespaced: true,
  state: function () {
    return {
      status: "",
      car: {
        distance: 500,
        driver: "Дядя Толик",
        number: "5566"
      }
    }
  },
  mutations: {
    setStatus: function (state, status) {
      state.status = status;
    },
    setCar: function (state, car) {
      state.car = car;
    }
  }
}