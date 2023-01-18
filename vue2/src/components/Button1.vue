<script>
import event from '../event'

export default {
  props: {
    name: {
      type: String,
      default: 'button'
    }
  },
  data() {
    return {title: ''}
  },
  methods: {
    click() {
      this.$emit('button1Click', this.name);
      event.$emit('button1CustomClick', this.name);
    }
  }
}
</script>

<template>
  <button @click="click">button1{{ name }}</button>
</template>

