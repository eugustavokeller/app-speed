import HomeFinanceiro from "../components/financeiro/HomeFinanceiro.vue";

export default [
  {
    path: "/financeiro",
    component: HomeFinanceiro,
  },
  {
    path: "/financeiro/contas-a-receber",
    name: "financeiro.contas-a-receber",
    component: HomeFinanceiro,
  },
  {
    path: "/financeiro/contas-a-pagar",
    name: "financeiro.contas-a-pagar",
    component: HomeFinanceiro,
  },
  {
    path: "/financeiro/relatorios",
    name: "financeiro.relatorios",
    component: HomeFinanceiro,
  },
  {
    path: "/financeiro/outros",
    name: "financeiro.outros",
    component: HomeFinanceiro,
  },
];
