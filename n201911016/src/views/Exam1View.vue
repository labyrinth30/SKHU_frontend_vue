<template>
  <div id="app">
    <h2>Exam1</h2>
    <span v-for="i in size" :key="i">{{ i }}</span>
    <br>
    <input v-model="inputText" type="text" />
    <button @click="addItem">추가</button>
  </div>
</template>

<script>
export default {
  name: "Exam1View",
  data() {
    return {
      size: ['zero','one','two'],
      inputText: "",
    };
  },
  methods: {
    addItem() {
      if (this.inputText.trim() !== "") {
        this.size.push(this.inputText.trim());
        this.inputText = "";
      }
    },
  },
};
</script>

<style scoped>
#app {
  padding: 30px;
  margin: 30px auto;
  width: 500px;
}
div { padding: 30px; margin: 30px auto; width: 400px;
    border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
span {
  display: inline-block;
  margin: 5px;
  padding: 4px 15px;
  border: 1px solid black;
}
input{
  margin: 5px;
  padding: 4px 15px;
  border: 1px solid black;
}
button { padding: 0.3em 1em; }
</style>
