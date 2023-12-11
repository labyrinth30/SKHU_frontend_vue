<template>

        <MyCounter :counter=counter />
        <button type="button" @click="counter++"> ++ </button>
        <button type="button" @click="counter--"> -- </button>
        <button type="button" @click="counter = 0"> Reset </button>
        <input type="number" v-model="counter" />
</template>
<script>
import MyCounter from '../components/MyCounter.vue'
export default {
    name: "App",
    components: { MyCounter },
    data() {
        return { counter: 0 };
    }
}
</script>
<style scoped>
div#app {
    padding: 0 30px 30px 30px;
    margin: 30px auto;
    max-width: 400px;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 3px #aaa;
}</style>
    