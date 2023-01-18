<script >
import Button1 from '../components/Button1.vue'
export default {
  components: {
    Button1,
    // 动态组件
    Button2: () => import('../components/Button2.vue'),
  },
  data(){
    return {
      Button1: 'Button1',
      Button2: 'Button2',
      state: 'a'
    }
  },
  methods: {
    changeState(val) {
      this.state = val
    }
  }
}
</script>
<template>
  <div>
    <button @click="changeState('a')">a</button>
    <button @click="changeState('b')">b</button>
    <!-- 动态组件  -->
    <keep-alive>
      <component :is="Button1" v-if="state==='a'" />
      <component :is="Button2" v-if="state==='b'" />
    </keep-alive>
    
  </div>
</template>

