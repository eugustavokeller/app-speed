import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import vuex from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Cookies from "js-cookie";
import PortalVue from "portal-vue";

window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.headers.common["Content-Type"] = "application/json";
window.axios.defaults.headers.common["Accept"] = "application/json";
window.axios.defaults.baseURL = "http://localhost:8000/";

window.Cookies = Cookies;

const app = createApp(App);

app.use(PortalVue);
app.use(router);
app.use(vuex);
app.mount("#app");
