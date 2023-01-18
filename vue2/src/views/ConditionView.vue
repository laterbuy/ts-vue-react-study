<script >
export default {
  data() {
    return {
      type: 'a'
    }
  },
}
</script>
<template>
  <div>
    <!-- v-if 不匹配就不渲染  -->
    <div v-if="type === 'a'">a</div>
    <div v-else-if="type === 'b'">b</div>
    <div v-else>other</div>
    <!-- v-show 不匹配依旧渲染 只是display none -->
    <p v-show="type === 'a'">a</p>
    <p v-show="type === 'b'">b</p>
  </div>
</template>

