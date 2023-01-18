<script >
export default {
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    increment1(event) {
      console.log(event, event.target, event.currentTarget)
      this.num = this.num + 1;
      // 1. 这里的event是原生的event
      // 2. 事件被挂载到当前元素上
    },
    increment2(num, event) {
      console.log(event, event.target, event.currentTarget)
      this.num = this.num + num;
    }
  }
}

</script>
<template>
  <div>
    <div>{{ num }}</div>
    <button @click="increment1">+1</button>
    <button @click="increment2(2, $event)">+2</button>
  </div>
</template>

