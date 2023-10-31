<template>
  <div id="app">
    <h1>MyText</h1>
    <p>{{ receivedText }}</p>
    <MyText title="MyText" color="#ffb" @text="showText" />
  </div>
</template>

<script>
import MyText from './MyText.vue'

export default {
  name: "App",
  data() {
    return {
      receivedText: ""
    }
  },
  methods: {
    showText(value) {
      this.receivedText = value;
    }
  },
  components: { MyText }
}
</script>

<style scoped>
div#app {
  padding: 0 30px 30px 30px;
  margin: 30px auto;
  max-width: 400px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}
</style>
