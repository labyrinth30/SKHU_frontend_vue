<template>

    <h1>Exam1</h1>
    <hr>
      <MyCounter />

  </template>
    
  <script>
  import MyCounter from '../components/MyCounter.vue'
  export default {
    name: "App",
    
    components: { MyCounter }
  }
  </script>
    
  <style scoped>
  h1{
      margin-bottom: -10px;
  }
  div#app {
    padding: 0 30px 30px 30px;
    margin: 30px auto;
    max-width: 400px;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 3px #aaa;
  }
  
  div#hello {
    margin-top: 20px;
    padding: 20px;
    background-color: lightGreen;
    border: 1px solid gray;
    text-align: center;
    font-size: 20pt;
  }
  input { width: 30px; height: 30px;  }</style>
    
    