<template>
    <div id="app">
      <h1>MyCounter2</h1>
      <MyText title="카운터" description="첫째 컴포넌트" color="#ffb" v-on:send="showValue" />
      <p> {{ inputValue }}</p>
    </div>
  </template>
  
  <script>
  import MyText from '../components/MyText.vue'
  
  export default {
    name: "App",
    methods: {
      showValue(value) {
        this.inputValue = value;
      }
    },
    data(){
        return {
            inputValue: ''
        };
    },
    components: { MyText  }
  }
  </script>
  
  <style scoped>
  div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
        border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
  </style>
  
  