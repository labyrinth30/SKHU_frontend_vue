<template>
    <div id="MyMessage" :style="{backgroundColor: bgColor }">
        {{ text }}

    </div>
  </template>
  
  <script>
  export default {
    name: "MyTemplate",
    props: {
      bgColor: String,
      text: String,
    },
    
    
  }
  </script>
  
  <style scoped> /* scoped는 이 컴포넌트에만 적용하도록 붙임 */
    
    div#MyMessage { padding: 20px; border: 1px solid gray;  font-size: 15pt; }
  </style>
  
  