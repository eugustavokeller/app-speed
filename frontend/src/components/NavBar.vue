<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-4">
    <div class="container-fluid">
      <a class="navbar-brand">
        <router-link style="text-decoration: none" :to="{ name: 'home' }"
          >App Speed</router-link
        ></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Cadastros
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'cadastro.produtos' }"
                  >Produtos</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'cadastro.clientes' }"
                  >Clientes</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'cadastro.fornecedores' }"
                  >Fornecedores</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'cadastro.relatorios' }"
                  >Relatórios</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              E-Commerce
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'ecommerce.vendas' }"
                  >Vendas</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'ecommerce.orcamentos' }"
                  >Orçamentos</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'ecommerce.notas-fiscais' }"
                  >Notas Fiscais</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'ecommerce.relatorios' }"
                  >Relatórios</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Financeiro
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'financeiro.contas-a-receber' }"
                  >A Receber</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'financeiro.contas-a-pagar' }"
                  >A Pagar</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'financeiro.relatorios' }"
                  >Relatorios</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'financeiro.outros' }"
                  >Outros</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ajustes
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'ajustes.usuarios' }"
                  >Usuarios</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'ajustes.grupos' }"
                  >Grupos</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'ajustes.permissoes' }"
                  >Permissoes</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  :to="{ name: 'ajustes.outros' }"
                  >Outros</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <button @click="logout" class="btn btn-outline-danger" type="submit">
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
// import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { mapGetters, useStore } from "vuex";

export default {
  name: "NavBar",
  setup() {
    const router = useRouter();
    const store = useStore();

    function logout() {
      Cookies.remove("access_token_app_speed");
      store.commit("setIsAuth", false);
      router.push({ name: "login" });
    }
    return {
      logout,
    };
  },
};
</script>
<style></style>
