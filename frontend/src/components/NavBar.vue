<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link style="text-decoration: none" :to="{ name: 'home' }">
        <a class="navbar-brand">App Speed</a>
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
      </router-link>
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
              <li><a class="dropdown-item" href="#">Vendas</a></li>
              <li><a class="dropdown-item" href="#">Orçamentos</a></li>
              <li><a class="dropdown-item" href="#">Notas Fiscais</a></li>
              <li><a class="dropdown-item" href="#">Relatórios</a></li>
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
              <li><a class="dropdown-item" href="#">A Receber</a></li>
              <li><a class="dropdown-item" href="#">A Pagar</a></li>
              <li><a class="dropdown-item" href="#">Relatorios</a></li>
              <li><a class="dropdown-item" href="#">Outros</a></li>
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
              <li><a class="dropdown-item" href="#">Usuarios</a></li>
              <li><a class="dropdown-item" href="#">Grupos</a></li>
              <li><a class="dropdown-item" href="#">Permissoes</a></li>
              <li><a class="dropdown-item" href="#">Outros</a></li>
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

export default {
  name: "NavBar",
  setup() {
    const router = useRouter();

    function logout() {
      console.log("Logout");
      localStorage.removeItem("token");
      router.push({ name: "login" });
    }

    return {
      logout,
    };
  },
};
</script>
<style></style>
