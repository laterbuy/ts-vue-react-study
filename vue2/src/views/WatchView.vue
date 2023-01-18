<script >
export default {
  data() {
    return {
      name: '陕西',
      info: {
        city: '西安'
      }
    }
  },
  created() {
    setTimeout(() => {
      this.name = '山西'
      this.info = {
        city: '运城'
      }
    }, 2000)
  },
  watch: {
    name(oldVal, val) {
      console.log('watch name', oldVal, val); // 值类型，可以正常拿到
    },
    info: {
      handler(oldVal, val) {
        console.log('watch info', oldVal, val); // 引用类型 拿不到 oldVal， 指针相同 ，此时已经指向了新的val
      },
      deep: true // 深度监听
    }
  }
}
</script>
<template>
  <div>
    <div>name {{ name }}</div>
  </div>
</template>

