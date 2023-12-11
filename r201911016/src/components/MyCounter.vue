<template>
<p>{{  counter }}</p>
      <button type="button" v-on:click="counter++"> ++ </button>
      <button type="button" @click="counter--"> -- </button>

  </template>
  
  <script>
  export default {
    name: "MyCounter",
    data() {
      return { counter: 0 };
    }
  }
  </script>
  
  <style scoped>
  p{font-size: large;}
    div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
    input { padding: 5px; margin-right: 5px; }
    button { padding: 0.4em 1em; margin-right: 5px; }
  </style>
  
  