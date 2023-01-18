<script>
import event from '../event'

export default {
  data() {
    return { title: 'button2' }
  },
  created() {
    console.log('button2 created');
    // 自定义事件监听
    event.$on('button1CustomClick', (name) => {
      console.log('button1CustomClick', name);
    })
  },
  beforeDestroy() {
    // 组件销毁，事件监听注销
    event.$off('button1CustomClick')
  }
}
</script>
<template>
  <button>button12</button>
</template>

