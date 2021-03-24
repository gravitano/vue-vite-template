<template>
  <div class="w-full">
    <div class="flex gap-2 items-center mb-2">
      <v-select :items="headers" />
      <v-input class="mt-1" v-model="search" placeholder="Search..." />
    </div>
    <v-data-table
      :headers="headersWithAction"
      :items="items"
      v-model:search="search"
      v-model:search-by="searchBy"
      v-model:sort-by="sortBy"
      v-model:sort-direction="sortDirection"
    >
      <template #item.name="{ item }">
        <div class="font-bold text-blue-600">{{ item.name }}</div>
      </template>
      <template #item.action="{ item }">
        <v-btn link size="xs" :to="`#/edit/${item.id}`"> Edit </v-btn>
        <v-btn color="error" link size="xs"> Delete </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const headers = ref([
  {
    text: "ID",
    value: "id",
  },
  {
    text: "Name",
    value: "name",
  },
  {
    text: "Email",
    value: "email",
  },
  {
    text: "Phone",
    value: "phone",
  },
]);

const headersWithAction = computed(() => [
  ...headers.value,
  {
    text: "Action",
    value: "action",
    sortable: false,
    align: "center",
  },
]);

const items = ref(
  [...Array(30)].map((v, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user+${index + 1}@gits.id`,
    phone: `6288899900${index}`,
  }))
);

const sortBy = ref("");
const sortDirection = ref("");
const search = ref("");
const searchBy = ref("name");

const paginationProps = ref({});
</script>