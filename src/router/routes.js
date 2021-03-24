import Home from "../views/Home.vue";
import AlertBasic from "../views/alert/AlertBasic.vue";
import DataTableBasic from "../views/data-table/DataTableBasic.vue";

export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "/alert/basic",
    component: AlertBasic
  },
  {
    path: "/data-table/basic",
    component: DataTableBasic
  }
];
