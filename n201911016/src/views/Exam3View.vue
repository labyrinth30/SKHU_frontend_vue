<template>
    <div id="app">
      <h1>Exam3</h1>
      <input type="text" id="textInput" v-model="inputText" @input="updateText" />
      <MyMessage :background="selectedBackground" :title="displayText"  />
    </div>
  </template>
  
  <script>
  import MyMessage from '../components/MyMessage.vue';
  
  export default {
    name: "Exam3View",
    components: { MyMessage },
    data() {
      return {
        selectedBackground: "#ffa",
        inputText: "",
        displayText: ""
      };
    },
    methods: {
      updateText() {
        this.displayText = this.inputText;
      }
    }
  };
  </script>
  
  <style scoped>
  div {
    padding: 20px;
    margin: 30px auto;
    width: 400px;
    border: 1px solid #aaa;
    box-shadow: 3px 3px 3px #aaa;
  }
  input{
    padding: 5px;
    width: 50%;
  }
  </style>