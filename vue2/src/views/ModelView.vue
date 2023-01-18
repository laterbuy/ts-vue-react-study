<script>
import MyInput from '../components/MyInput.vue';
export default {
  data() {
    return { value: '' }
  },
  components: {
    MyInput,
  }
}
</script>
<template>
  <div>

    <div>自定义的双向数据绑定{{value}}</div>
    <MyInput v-model="value" />
  </div>
  
</template>

