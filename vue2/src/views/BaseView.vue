<script>
export default {
  data() {
    return {
      message: 'hello',
      flag: true,
      dynamicId: `id-${Date.now()}`,
      rawHtml: `<div>1212</div>`
    }
  }
}
</script>

<template>
  <div>
    <p>文本插值{{ message }}</p>
    <p>js表达式{{ flag ? 'yes' : 'no' }}</p>
    <p :id="dynamicId">动态属性id</p>
    <p v-html="rawHtml"></p>
  </div>
</template>

