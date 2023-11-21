<template>
    <div>
      <h1>{{ studentNumber }}</h1>
      <h1>{{ studentName }}</h1>
      <h1>{{ currentTime }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Exam1',
    data() {
      return {
        studentNumber: '201911016',
        studentName: 'Lee Yoon-ha',
        currentTime: getCurrentTime(),
      };
    },
    methods: {
      getCurrentTime: function() {
        return new Date().toLocaleTimeString();
      }
    }
  };
  </script>
  