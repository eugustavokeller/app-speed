import HomeEcommerce from "../components/ecommerce/HomeEcommerce.vue";

export default [
  {
    path: "/ecommerce",
    name: "ecommerce",
    component: HomeEcommerce,
  },
  {
    path: "/ecommerce/vendas",
    name: "ecommerce.vendas",
    component: HomeEcommerce,
  },
  {
    path: "/ecommerce/orcamentos",
    name: "ecommerce.orcamentos",
    component: HomeEcommerce,
  },
  {
    path: "/ecommerce/notas-fiscais",
    name: "ecommerce.notas-fiscais",
    component: HomeEcommerce,
  },
  {
    path: "/ecommerce/relatorios",
    name: "ecommerce.relatorios",
    component: HomeEcommerce,
  },
];
