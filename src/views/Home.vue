<template>
  <h1 class="font-bold mb-3">Home</h1>
  <router-link
    class="text-blue-500 hover:font-bold w-full block"
    v-for="menu in menus"
    :key="menu.text"
    :to="menu.path"
  >
    {{ menu.text }}
  </router-link>
</template>

<script setup>
import { ref } from "vue";

const menus = ref([
  {
    text: "Alert",
    path: "/alert/basic",
  },
  {
    text: "DataTable",
    path: "/data-table/basic",
  },
  {
    text: "Dropdown",
    path: "/dropdown",
  },
  {
    text: "Modal",
    path: "/modal",
  },
  {
    text: "Headless Select",
    path: "/headless/select",
  },
  {
    text: "Breadcrumbs",
    path: "/breadcrumbs",
  },
]);
</script>
