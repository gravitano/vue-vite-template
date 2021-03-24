<template>
  <v-dropdown @selected='onSelected'>
    <template #prepend>
      <v-dropdown-item>
        Prepend
      </v-dropdown-item>
    </template>
    <template #append>
      <v-dropdown-item>
        Append
      </v-dropdown-item>
    </template>
    <v-dropdown-item v-for='n in 5' :key='n'>
      Item {{ n }}
    </v-dropdown-item>
  </v-dropdown>
</template>

<script setup>
const onSelected = selected => {
  console.log(selected)
}
</script>

<style scoped>

</style>
