<template>
    <div id="escapeEdit">
      <h1>방탈출 수정</h1>
      <div>
        <input type="text" v-model="escape.name" placeholder="매장명" />
      </div>
      <div>
        <input type="text" v-model="escape.theme" placeholder="테마명"/>
      </div>
      <div>
        <select v-model="escape.sortId">
        <option value=undefined>테마종류를 선택하세요</option>
          <option value="1">공포</option>
          <option value="2">스릴러</option>
          <option value="3">감성</option>
          <option value="4">미스터리</option>
        </select>
      </div>
      <div>
        <input type="text" v-model="escape.phone" placeholder="매장 전화번호"/>
      </div>
      <div>
        <button type="button" v-on:click="save">저장</button>
        <button type="button" v-on:click="remove">삭제</button>
        <button type="button" v-on:click="goList">취소</button>
      </div>
    </div>
  </template>
  
  <script>
  import { loadEscape, updateEscape, deleteEscape } from '../escapeService';
  
  export default {
    name: "escapeEditView",
    data() {
      return {
        escape: { }
      }
    },
    async mounted() {
      const id = this.$route.params.id;
      this.escape = await loadEscape(id);
    },
    methods: {
      async save() {
        await updateEscape(this.escape);
        this.goList();
      },
      async remove() {
        if (confirm("삭제하시겠습니까?")) {
          await deleteEscape(this.escape.id);
          this.goList();
        }
      },
      goList() {
        this.$router.push("/");
      }
      
    }
  }
  </script>
  <style>
  input[type=text], input[type=phone], input[type=email] { padding: 6px; width: 200px; }
  select { padding: 6px; width: 150px }
  div { margin-bottom: 15px; }
  label { margin-right: 15px; }
  button { padding: 5px 20px; margin-right: 10px; }
  </style>
  