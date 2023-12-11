<template>
  <div id="App">
    <nav>
      <router-link to="/">Exam1</router-link> |
      <router-link to="/book2">Exam2</router-link> |
      <router-link to="/book">Exam3</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
div#App { padding: 30px; margin: 30px auto; width: 400px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>

