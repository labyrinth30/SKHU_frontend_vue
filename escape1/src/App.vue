<template>
  <div id="App">
    <nav>
      <router-link to="/">방탈출</router-link> |
      <router-link to="/counter">카운터</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
div#App { padding: 30px; margin: 30px auto; width: 800px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>

