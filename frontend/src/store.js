import Cookies from "js-cookie";
import { createStore } from "vuex";

export const store = createStore({
  state: {
    user: null,
    // token: null,
    // isAdmin: false,
    // isUser: false,
    // isGuest: false,
    // isSuperAdmin: false,
    // isStaff: false,
    // isManager: false,
    // isCustomer: false,
    // isDriver: false,
    // isShipper: false,
    // isSeller: false,
    // isBuyer: false,
    // isSupplier: false,
    // isVendor: false,
    // isAgent: false,
    isAuth: Cookies.get("access_token_app_speed") ? true : false,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuth(state) {
      return state.isAuth;
    },
  },
});

export default store;
