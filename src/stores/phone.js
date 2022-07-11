export const phoneStore = {
  namespaced: true,
  state: function () {
    return {
      // Модель телефона должна совпадать с названием компонента телефона
      // При этом компонент телефона должен быть зарегестрирован в компоненте Phone. То есть импортирован и добавлен в блок components
      // В противном случае Vue его просто не покажет
      phoneModel: "IPhone",
      // Название приложения аналогично. Если компонент приложения называется HomeApp, то тут должно быть тоже самое
      activeApp: "",
      homeButton: {
        isShown: true,
        // light | dark
        theme: "light"
      },
      statusBar: {
        // light | dark
        theme: "light"
      }
    }
  },
  mutations: {
    setPhoneModel: function (state, newModel) {
      state.phoneModel = newModel;
    },
    openApp: function (state, app) {
      state.activeApp = app;
    },
    toggleHomeButton: function (state, toggle) {
      state.homeButton.isShown = toggle;
    },
    setHomeButtonTheme: function (state, theme) {
      state.homeButton.theme = theme;
    },
    setStatusBarTheme: function (state, theme) {
      state.statusBar.theme = theme
    }
  },
  getters: {
    phoneModel: function (state) {
      return state.phoneModel;
    },
    activeApp: function (state) {
      return state.activeApp;
    },
    isAppActive: function (state) {
      return (app) => state.activeApp === app
    },
    isHomeButtonShown: function (state) {
      return state.homeButton.isShown;
    },
  }
}