<script>
import NavBar from "./components/NavBar.vue";
import { mapGetters, useStore } from "vuex";
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

export default {
  components: {
    NavBar,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const isAuth = computed(() => store.getters.isAuth);

    const checkLogin = () => {
      if (!isAuth.value) {
        router.push("/login");
      }
    };

    onMounted(() => {
      checkLogin();
    });

    return {
      isAuth,
      checkLogin,
    };
  },
};
</script>

<template>
  <div>
    <NavBar v-show="isAuth" />
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
