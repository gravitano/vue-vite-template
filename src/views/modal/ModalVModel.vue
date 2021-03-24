<template>
  <v-modal v-model="isOpen">
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Modal Status: {{ isOpen }}
  </v-modal>
</template>

<script setup>
import {ref} from "vue";

const isOpen = ref(false)
</script>

<style scoped>

</style>
