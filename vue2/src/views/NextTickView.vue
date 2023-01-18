<script >
export default {
  data() {
    return {
      list: [
        1, 2
      ] 
    }
  },
 methods: {
  click() {
    this.list.push(Date.now());
    this.$nextTick(() => {
      console.log(this.$refs.ref.childNodes.length);
    })
  }
 }
}
</script>
<template>
  <div>
    <div @click="click">add click</div>
    <div ref="ref">
      <div v-for="(item, index) in list" :key="index">{{item}}</div>
    </div>
  </div>
</template>

