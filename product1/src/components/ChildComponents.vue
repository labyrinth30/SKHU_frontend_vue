<!-- ChildComponent.vue -->
<template>
    <div>
      <p> {{ count }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      count: Number
    }
  };
  </script>
  
  <style scoped>
  p {
    font-size: 18px;
    margin-bottom: 10px;
  }
  </style>
  