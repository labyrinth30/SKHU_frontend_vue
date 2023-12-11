<template>
    <p> {{ counter }}</p>

</template>
<script>
export default {
    name: "MyCounter",
    props: ["counter"],
   
}
</script>
<style scoped>
div {
    border: 1px solid gray;
    padding: 0 20px 20px 20px;
    margin-top: 10px;
}

input {
    padding: 5px;
    margin-right: 5px;
}

button {
    padding: 0.4em 1em;
    margin-right: 5px;
}</style>
    