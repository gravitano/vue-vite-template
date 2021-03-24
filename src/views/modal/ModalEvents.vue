<template>
  <v-modal
      @ok="onOk"
      @cancel="onCancel"
      @close="onClose"
  >
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Are you sure want to delete this file?
  </v-modal>
</template>

<script setup>
import {ref} from "vue";

const onOk = () => {
  alert("You choose OK!")
}

const onCancel = () => {
  alert("You choose Cancel!")
}

const onClose = () => {
  alert("Closing the modal...")
}
</script>

<style scoped>

</style>
