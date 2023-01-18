
<script >
import Button1 from '../components/Button1.vue'
import Button2 from '../components/Button2.vue'

export default {
  components: {
    Button1,
    Button2,
  },
  data() {
    return {
      name: 'button1'
    }
  },
  methods: {
    click(val) {
      console.log(val);
    }
  }
 
}
</script>
<template>
  <div>
    <Button1 v-bind:name="name" @button1Click="click" />
    <Button2 />
  </div>
</template>

