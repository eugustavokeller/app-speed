//vuex for state management in vue

import { createStore } from "vuex";

export const store = createStore({
  state: {
    user: null,
    token: null,
    isAdmin: false,
    isUser: false,
    isGuest: false,
    isSuperAdmin: false,
    isStaff: false,
    isManager: false,
    isCustomer: false,
    isDriver: false,
    isShipper: false,
    isSeller: false,
    isBuyer: false,
    isSupplier: false,
    isVendor: false,
    isAgent: false,
    isLoggedIn: false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLoggedIn(state, isLoggedIn) {
      console.log("setLoggedIn", isLoggedIn);
      state.isLoggedIn = isLoggedIn;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
  },
});

export default store;
