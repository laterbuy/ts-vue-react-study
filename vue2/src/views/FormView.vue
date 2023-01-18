<script >
export default {
  data() {
    return {
      name: '',
      desc: '',
      age: 1,
      checked: false,
      gender: 'male',
      selected: '',
    }
  },

}

</script>
<template>
  <div>
    <input type="text" v-model.trim="name" />
    <input type="text" v-model.lazy="name" />
    <input type="text" v-model.number="age" />

    <textarea v-model="desc"></textarea>

    <input type="checkbox" v-model="checked">

    <label for="male">男</label>
    <input type="radio" value="male" v-model="gender" />
    <label for="formale">女</label>
    <input type="radio" value="formale" v-model="gender" />
    <select v-model="selected">
      <option disabled>请选择</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>

