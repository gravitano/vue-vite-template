<template>
  <div class="mb-5" v-for="demo in demos" :key="demo.title">
    <div class="font-medium mb-3">
      {{ demo.title }}
    </div>
    <component :is="demo.component"/>
  </div>
</template>

<script setup>
import ModalBasic from './ModalBasic.vue'
import ModalCustomButtons from './ModalCustomButtons.vue'
import ModalEvents from './ModalEvents.vue'
import ModalNoFooter from './ModalNoFooter.vue'
import ModalNoHeader from './ModalNoHeader.vue'
import ModalSlots from './ModalSlots.vue'
import ModalTitle from './ModalTitle.vue'
import ModalVModel from './ModalVModel.vue'

const demos = [
  {
    title: 'Default',
    component: ModalBasic
  },
  {
    title: 'Modal Title',
    component: ModalTitle
  },
  {
    title: 'V-Model',
    component: ModalVModel
  },
  {
    title: 'Slots',
    component: ModalSlots
  },
  {
    title: 'Custom Buttons',
    component: ModalCustomButtons
  },
  {
    title: 'No Header',
    component: ModalNoHeader
  },
  {
    title: 'No Footer',
    component: ModalNoFooter
  },
  {
    title: 'Events',
    component: ModalEvents
  },
]
</script>

<style scoped>

</style>
