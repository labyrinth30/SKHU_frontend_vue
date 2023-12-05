<template>
  <div id="BooksEditView">
    <h1>도서 수정</h1>
    <div>
      <input type="text" v-model="book.title" />
    </div>
    <div>
      <input type="text" v-model="book.price" />
    </div>
    <div>
      <input type="text" placeholder="저자를 입력하시오" v-model="book.writer" />
    </div>
    <div>
      <button type="button" v-on:click="save">저장</button>
      <button type="button" v-on:click="del">삭제</button>
      <button type="button" v-on:click="goList">취소</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

export default {
  name: "BooksEditView",
  data() {
    return {
      book: {}
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.loadBook(id);
  },
  methods: {
    async loadBook(id) {
      try {
        const response = await axios.get("/books/" + id);
        this.book = response.data;
      } catch (error) {
        alert('조회 에러: ' + (error instanceof Error ? error.message : error));
      }
    },
    async saveBook(book) {
      try {
        await axios.put("/books/" + book.id, book);
      } catch (error) {
        alert('저장 에러: ' + (error instanceof Error ? error.message : error));
      }
    },
    async save() {
      await this.saveBook(this.book);
      this.goList();
    },
    goList() {
      this.$router.push("/");
    },
    async del() {
      try {
        if (confirm("삭제하시겠습니까?")) {
          await axios.delete("/books/" + this.book.id);
        }
      } catch (error) {
        alert('삭제 에러: ' + (error instanceof Error ? error.message : error));
      }
      this.goList();
    }
  }
};
</script>

<style>
  input[type=text], input[type=phone], input[type=email] {
    padding: 6px;
    width: 200px;
  }

  select {
    padding: 6px;
    width: 150px;
  }

  div {
    margin-bottom: 15px;
  }

  label {
    margin-right: 15px;
  }

  button {
    padding: 5px 20px;
    margin-right: 10px;
  }
</style>