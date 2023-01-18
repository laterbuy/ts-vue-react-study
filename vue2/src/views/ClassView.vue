<script >
export default {
  data() {
    return {
      isBlack: true,
      isYellow: true,

      black: 'black',
      yellow: 'yellow',

      styleData: {
        color: 'red',
        fontSize: '12px',
      }
    }
  },
}
</script>
<template>
  <div class="classname">
    <div :class="{ black: isBlack, yellow: isYellow }">使用 class</div>
    <div :class="[black, yellow]">使用 class(数组)</div>
    <div :style="styleData">style</div>
  </div>
</template>

