import CadastroProdutos from "../components/cadastros/CadastroProdutos.vue";
import CadastroClientes from "../components/cadastros/CadastroClientes.vue";
import CadastroFornecedores from "../components/cadastros/CadastroFornecedores.vue";
import CadastroRelatorios from "../components/cadastros/CadastroRelatorios.vue";

export default [
  {
    path: "/cadastro/produtos",
    name: "cadastro.produtos",
    component: CadastroProdutos,
  },
  {
    path: "/cadastro/clientes",
    name: "cadastro.clientes",
    component: CadastroClientes,
  },
  {
    path: "/cadastro/fornecedores",
    name: "cadastro.fornecedores",
    component: CadastroFornecedores,
  },
  {
    path: "/cadastro/relatorios",
    name: "cadastro.relatorios",
    component: CadastroRelatorios,
  },
];
