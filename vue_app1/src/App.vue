<template>
  <div id="app">
    <HelloWorld message="첫번째 Vue.js App 입니다" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import도 하고 components에 등록도 해야 한다.
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
<!--scoped 서식은 이 컴포넌트에만 적용된다-->
<style scoped> 
div#app { padding: 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>
