import Home from "../views/Home.vue";
import AlertBasic from "../views/alert/AlertBasic.vue";
import DataTableBasic from "../views/data-table/DataTableBasic.vue";
import DropdownSlots from "../views/dropdown/DropdownSlots.vue";
import HeadlessSelectBasic from "../views/headless-select/HeadlessSelectBasic.vue";
import ModalIndex from "../views/modal/ModalIndex.vue";

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
  },
  {
    path: "/dropdown",
    component: DropdownSlots
  },
  {
    path: "/modal",
    component: ModalIndex
  },
  {
    path: "/headless/select",
    component: HeadlessSelectBasic
  }
];
