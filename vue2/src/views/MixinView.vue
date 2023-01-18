<script >
import mixin from '../components/mixin'
export default {
  mixins: [mixin],
  data(){
    return {
      name: 'hou',
    }
  },
  
}
</script>
<template>
  <div>
    <div @click="showName">{{name}}</div>
    <div>{{city}}</div>
  </div>
</template>

