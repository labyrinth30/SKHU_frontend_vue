<!-- CounterView.vue -->
<template>
  <div>
    <ChildComponent :count="count" />
    <button @click="increment">++</button>

  </div>
</template>


<script>
import ChildComponent from "../components/ChildComponents.vue";

export default {
  name: "CounterView",
  components: {
    ChildComponent
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    
  }
};
</script>

<style scoped>
h1 {
  border-bottom: 1px solid gray;
  margin-bottom: 10px;
}
p {
  font-size: 18px;
  margin-bottom: 10px;
}
button {
  padding: 8px 16px;
  margin-right: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>
