export const phoneCallApp = {
  namespaced: true,
  state: function () {
    return {
      // keyboard | contacts | calls
      tab: "keyboard",
      // keyboard | call | contacts | add-contact | contact | calls
      screen: "keyboard",
      keyboardInitialValue: "",
      call: {
        name: "1488222",
        duration: "00:24"
      },
      addedContact: {
        name: "abc",
        phoneNumber: "123456",
      },
      openedContact: {
        name: "Валентин Копатович",
        phoneNumber: "255-12-12",
        startColor: "#FF512F",
        endColor: "#DD2476",
        isFavourite: false
      },
      previousScreen: {
        tab: "",
        screen: ""
      },
      contacts: [
        {
          name: "Иннокентий",
          phoneNumber: "922-25-25",
          startColor: "#FF512F",
          endColor: "#DD2476",
          isFavourite: true,
        },
        {
          name: "Август",
          phoneNumber: "922-25-25",
          startColor: "#FF512F",
          endColor: "#DD2476",
          isFavourite: true,
        },
        {
          name: "Паусилуп",
          phoneNumber: "922-25-25",
          startColor: "#FF512F",
          endColor: "#DD2476",
          isFavourite: true,
        },
        {
          name: "Валентин Копатович",
          phoneNumber: "922-25-25",
          startColor: "#FF512F",
          endColor: "#DD2476",
          isFavourite: false,
        },
        {
          name: "Клава",
          phoneNumber: "922-25-25",
          startColor: "#FF512F",
          endColor: "#DD2476",
          isFavourite: false,
        },
        {
          name: "Клава",
          phoneNumber: "922-25-25",
          startColor: "#FF512F",
          endColor: "#DD2476",
          isFavourite: false,
        },
        {
          name: "Клава",
          phoneNumber: "922-25-25",
          startColor: "#FF512F",
          endColor: "#DD2476",
          isFavourite: false,
        },
        {
          name: "Клава",
          phoneNumber: "922-25-25",
          startColor: "#FF512F",
          endColor: "#DD2476",
          isFavourite: false,
        },
      ],
      calls: [
        {
          name: "Иннокентий",
          phoneNumber: "922-25-25",
          startColor: "#FF512F",
          endColor: "#DD2476",
          isOutbound: false,
          isMissed: false
        },
        {
          name: "Иннокентий",
          phoneNumber: "922-25-25",
          startColor: "#FF512F",
          endColor: "#DD2476",
          isOutbound: false,
          isMissed: true
        },
        {
          phoneNumber: "922-25-25",
          startColor: "#FF512F",
          endColor: "#DD2476",
          isOutbound: true,
          isMissed: false
        },
      ]
    }
  },
  mutations: {
    openTab: function (state, tab) {
      state.tab = tab;
      if(tab === "keyboard") {
        state.screen = "keyboard"
      } else if(tab === "contacts") {
        state.screen = "contacts"
      } else if(tab === "calls") {
        state.screen = "calls"
      }
    },
    openScreen: function (state, screen) {
      state.screen = screen;
    },
    showKeyboard: function (state, initialValue) {
      if(initialValue)
        state.keyboardInitialValue = initialValue;

      state.tab = "keyboard";
      state.screen = "keyboard"
    },
    call: function (state, callData) {
      state.call = callData;

      state.tab = "keyboard";
      state.screen = "call"
    },
    addContact: function (state, contact) {
      state.addedContact = contact;

      state.tab = "contacts";
      state.screen = "add-contact";
    },
    showContacts: function (state, contacts) {
      if(contacts)
        state.contacts = contacts;

      state.tab = "contacts";
      state.screen = "contacts"
    },
    showContact: function (state, contact) {
      if(contact)
        state.openedContact = contact;

      state.tab = "contacts";
      state.screen = "contact"
    },
    showCalls: function (state, calls) {
      state.calls = calls;

      state.tab = "calls";
      state.screen = "calls"
    },
    setPreviousScreen: function (state, obj) {
      state.previousScreen = obj
    }
  }
}