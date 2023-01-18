<script >
export default {
  data() {
    return {
      listArr: [
        { id: 'a', title: '1' },
        { id: 'b', title: '2' },
        { id: 'c', title: '3' },
      ],
      listObj: {
        a: { title: '1' },
        b: { title: '2' },
        c: { title: '3' },
      }
    }
  },
}
</script>
<template>
  <div>
    <div>遍历数组</div>
    <div v-for="(item, index) in listArr" :key="item.id">{{index}}-{{item.title}}</div>

    <div>遍历对象</div>
    <div v-for="(val, key, index) in listObj" :key="key">{{index}}-{{key}}-{{val.title}}</div>
  </div>
</template>

