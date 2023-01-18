<script>
export default {
  data() {
    return {
      num: 20
    }
  },
  // 依赖data有缓存 data不改变 计算属性不变
  computed: {
    double1() {
      return this.num * 2;
    },
    // 双向绑定时 计算属性 要写set 和 get
    double2: {
      get() {
        return this.num * 2;
      },
      set(val) {
        this.num = val;
      }
    }
  }
}
</script>
<template>
  <div>
    <div>num {{ num }}</div>
    <div>double1 {{ double1 }}</div>
    <input v-model="double2">
  </div>
</template>

