import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import vuex from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const app = createApp(App);

axios.defaults.baseURL = "http://localhost:8000/";

app.config.globalProperties.$axios = axios;

app.use(router).use(vuex).mount("#app");
