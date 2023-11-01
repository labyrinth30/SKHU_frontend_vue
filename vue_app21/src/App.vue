<template>
  <div id="app">
    <h1>MyText</h1>
    <select v-model="color" >
      <option value="#ffe">yellow</option>
      <option value="#eef">blue</option>
      <option value="#efe">green</option>
      <option value="#fee">red</option>
      </select>
<p />
      <input type="text" v-model="message" />
      <hr/>
      <MyMessage :bgColor= "color" :text="message" />

  </div>
</template>
<!-- 평범한 애트리뷰트의 값은 문자열 취급함-->
<!-- 앱의 color 속성값, 즉 js 코드-->
<!-- 고로 v-bind를 붙여야한다-->
<script>
import MyMessage from './MyMessage.vue'

export default {
  name: "App",
  data() { 
    return {
      color: "#ffe",
      message : 'Hello World'
    }
  },
  
  
  components: { MyMessage },
}
</script>

<style scoped>
div#app {
  padding: 30px;
  margin: 30px auto;
  max-width: 400px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}
hr{
  margin: 10px 0;
}
select{
  padding: 4px;
  width: 100px;
}
input{
  padding: 4px;
}
</style>
