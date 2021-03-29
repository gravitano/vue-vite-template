<template>
  <div class="font-medium mb-3">Basic</div>
  <div class="mb-4">
    <v-breadcrumbs :items="breadcrumbs" />
  </div>

  <div class="font-medium mb-3">Custom Divider</div>
  <div class="mb-4">
    <v-breadcrumbs :items="breadcrumbs" divider="-" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const breadcrumbs = ref([
  {
    to: "/cms",
    title: "Dashboard",
  },
  {
    to: "/cms/components",
    title: "Components",
  },
  {
    to: "/cms/components/breadcrumbs",
    title: "Breadcrumbs",
  },
]);
</script>