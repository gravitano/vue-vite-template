<template>
  <v-modal>
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Modal Body
    <template #header="{close}">
      <div class="bg-green-600 flex items-center justify-between text-white px-4 sm:pl-6 py-3 rounded-t-md">
        Header
        <v-btn color="white" link size="xs" @click="close">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </v-btn>
      </div>
    </template>
    <template #footer="{close, ok}">
      <div class="bg-gray-200 px-4 sm:pl-6 py-3 rounded-b-md flex gap-2 justify-center">
        <v-btn @click="close">
          Close
        </v-btn>
        <v-btn color="success" @click="ok">
          OK
        </v-btn>
      </div>
    </template>
  </v-modal>
</template>

<script></script>

<style scoped>

</style>
