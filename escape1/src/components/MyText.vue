<template>
    <div :style="{ backgroundColor: color }">
      <h2>{{ title }} - <small>{{ description }}</small></h2>
      <input type="text" v-model="text" />
      <button type="button" @click="$emit('send', text)"> 전달 </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "MyText",
    props: {
      title: { type: String, required: true },
      description: { type: String, default: "안녕하세요" },
      color: { type: String, default: "#fff" }
    },
    data: function() {
      return { text: "" };
    }
  }
  </script>
  
  <style scoped>
    div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
    input { padding: 5px; margin-right: 5px; }
    button { padding: 0.4em 1em; margin-right: 5px; }
  </style>
  
  