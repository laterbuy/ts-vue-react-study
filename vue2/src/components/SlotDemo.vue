<script>
export default {
  data() {
    return {
      user: {
        firstName: 'hou',
        lastName: 'zhang',
      }
    }
  },
}
</script>
<template>
  <div>
    <!-- 基本使用 name可以不传 具名插槽 -->
    <slot name="default"></slot>
    <!-- 作用于插槽 子组件的值传给父组件 -->
    <slot name="header" v-bind:user="user"> {{ user.lastName }}</slot>
  </div>
</template>

