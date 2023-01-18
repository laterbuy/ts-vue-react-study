<script>
export default {
  props: {
    value: String,
    default() {
      return ''
    },
  },
  model: {
    prop: 'value', 
    event: 'change' 
  },
}
</script>
<template>
  <div>
    <input type="text" :value="value" @input="$emit('change', $event.target.value)" />
  </div>
</template>

