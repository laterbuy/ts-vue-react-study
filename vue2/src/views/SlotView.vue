<script >
import SlotDemo from '../components/SlotDemo.vue'
export default {
  components: {
    SlotDemo,
  },
}
</script>
<template>
  <div>
    slot
    <SlotDemo>
      <template v-slot:default>
        <p>base slot</p>
      </template>

      <template v-slot:header="slotProps">
        <p>{{slotProps.user.lastName}}</p>
      </template>
    </SlotDemo>
  </div>
</template>

