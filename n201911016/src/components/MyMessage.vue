<template>
  <div class="message" :style="{ background: background }">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "MyMessage",
  props: ["background", "title"]
};
</script>

<style scoped>
div.message {
  margin: 30px auto;
  padding: 20px;
  width: 70%;
box-shadow: none;
border: 1px solid #aaa;
}

</style>