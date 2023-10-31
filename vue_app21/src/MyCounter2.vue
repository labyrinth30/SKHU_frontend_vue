<template>
    <div :style="{ backgroundColor: color }">
      <h2>{{ title }} - <small>{{ description }}</small></h2>
      <input type="number" v-model="counter" />
      <button type="button" @click="counter++"> ++ </button>
      <button type="button" @click="counter--"> -- </button>
      <button type="button" @click="$emit('send', counter)"> 전달 </button>
    </div>
    <!-- emit는 자식이 부모에게 이벤트 보내는 것임 -->
    <!-- MyCounter2 컴포넌트가 전달한 이벤트 파라미터 값은, showValue 메소드의 파라미터로 전달된다.-->
  </template>
  
  <script>
  export default {
    name: "MyCounter1",
    props: {
      title: { type: String, required: true },
      description: { type: String, default: "안녕하세요" },
      color: { type: String, default: "#fff" }
    },
    data: function() {
      return { counter: 0 };
    }
  }
  </script>
  
  <style scoped>
    div { border: 1px solid gray; padding: 0 20px 20px 20px; margin-top: 10px; }
    input { padding: 5px; margin-right: 5px; }
    button { padding: 0.4em 1em; margin-right: 5px; }
  </style>
  
  