<template>
    <div id="App">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/">Exam1</router-link> |
    <router-link to="/counter">Exam2</router-link>
  </nav>
  <router-view/>
</div>
</template>



<style>
div#App { padding: 30px; margin: 30px auto; width: 800px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>

