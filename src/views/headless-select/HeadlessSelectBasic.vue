<template>
  <v-select2 class="w-full" v-model="selected" :items="items" />
</template>

<script setup>
import {ref} from 'vue';

const items = ref([
  {
    text: 'Status',
    value: ''
  },
  {
    text: 'Approved',
    value: 'approved'
  },
  {
    text: 'Rejected',
    value: 'rejected'
  }
])

const selected = ref(null)
</script>

<style scoped>

</style>
