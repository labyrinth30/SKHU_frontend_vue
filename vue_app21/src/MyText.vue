<template>
  <div :style="{ backgroundColor: color }">
    <h2>{{ title }} </h2>
    <input type="text" v-model="inputText" />
    <button type="button" @click="$emit('text', inputText)"> 전달 </button>
  </div>
</template>

<script>
export default {
  name: "MyText",
  props: {
    title: { type: String, required: true },
    color: { type: String, default: "#fff" }
  },
  
  
}
</script>

<style scoped>
  div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
  input { padding: 5px; margin-right: 5px; }
  button { padding: 0.4em 1em; margin-right: 5px; }
</style>

