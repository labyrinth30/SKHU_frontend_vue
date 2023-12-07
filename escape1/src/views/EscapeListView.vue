<template>
    <div id="EscapeListView">
      <h1>방탈출 목록</h1>
      <button type="button" v-on:click="goCreate">등록</button>
      <table>
        <tr><td>id</td><td>매장명</td><td>대표테마</td><td>전화번호</td></tr>
        <tr v-for="escape in escapes" v-bind:key="escape.id" v-on:click="goEdit(escape.id)">
          <td>{{ escape.id }}</td>
          <td>{{ escape.name }}</td>
          <td>{{ escape.theme }}</td>
          <td>{{ escape.phone }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  import { loadEscapes } from '../escapeService';
  
  export default {
    name: "EscapeListView",
    data() {
      return {
        escapes: [ ]
      }
    },
    async mounted() {
     this.escapes = await loadEscapes();
    },
    methods: {
      goEdit(id) {
        this.$router.push("/edit/" + id);
      },
      goCreate() {
        this.$router.push("/create/");
      },
    }
  }
  </script>
  
  <style scoped>
  button { float: right; margin-top: -40px; }
  table { border-collapse: collapse; margin: 20px 0; width: 100%; }
  tr:nth-child(1) { background-color: #eee; text-align: center; }
  td { border: 1px solid gray; padding: 6px; }
  td:nth-child(1) { text-align: center; width: 30px; }
  tr:hover { background-color: #ffd; cursor: pointer }
  </style>
  
  