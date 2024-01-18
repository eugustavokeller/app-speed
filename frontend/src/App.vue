<script>
import NavBar from "./components/NavBar.vue";
import { mapGetters } from "vuex";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    NavBar,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  setup() {
    const router = useRouter();
    const checkLogin = () => {
      console.log("Checando login: ", this.isLoggedIn);
      if (!this.isLoggedIn) {
        console.log("Nao esta logado");
        router.push("/login");
      } else console.log("Esta logado");
    };
    return {
      checkLogin,
    };
  },
  onMounted() {
    this.checkLogin();
  },
};
</script>

<template>
  <div>
    <NavBar v-if="isLoggedIn" />
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  max-width: auto;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
