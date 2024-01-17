import LoginPage from "./components/LoginPage.vue";
import HomeView from "./components/HomeView.vue";
import About from "./components/About.vue";
import cadastro from "./routes/cadastro.js";
import financeiro from "./routes/financeiro.js";
import ecommerce from "./routes/ecommerce.js";

import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/about",
      component: About,
    },
    ...cadastro,
    ...financeiro,
    ...ecommerce,
  ],
});
