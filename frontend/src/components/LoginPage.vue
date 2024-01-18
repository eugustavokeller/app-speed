<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="email" class="form-label">Usuário / E-mail</label>
                <input
                  type="text"
                  v-model="email"
                  class="form-control"
                  id="email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Senha</label>
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  id="password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
              <div class="row mt-4">
                <div class="col text-start">
                  <button type="button" class="btn">Registro</button>
                </div>
                <div class="col text-end">
                  <button type="button" class="btn">Esqueceu a senha?</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { mapGetters, useStore } from "vuex";
import Swal from "sweetalert2";

export default {
  name: "LoginPage",
  setup() {
    const store = useStore();
    const router = useRouter();

    const email = ref("");
    const password = ref("");

    const login = async () => {
      try {
        const response = await axios.post("/api/login", {
          email: email.value,
          password: password.value,
        });
        const data = response.data;
        Cookies.set("access_token", data.access_token);
        store.commit("setIsAuth", true);
        router.push("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
        console.error(error);
      }
    };

    onMounted(() => {
      if (store.getters.isAuth) {
        router.push("/");
      }
    });

    return {
      email,
      password,
      login,
      setIsAuth: () => store.commit("setIsAuth", true),
    };
  },
};
</script>
