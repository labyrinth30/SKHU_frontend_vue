<template>
  <div id="BooksCreateView">
    <h1>도서 등록</h1>
    <div>
      <input type="text" v-model="book.title" placeholder="책 이름" />
    </div>
    <div>
      <input type="text" v-model="book.price" placeholder="가격" />
    </div>
    <div>
      <input type="text" v-model="book.writer" placeholder="작가" />
    </div>
    <div>
      <button type="button" v-on:click="save">저장</button>
      <button type="button" v-on:click="goList">취소</button>
    </div>
  </div>
</template>

<script>
import { insertBook } from '../bookService';

export default {
  name: "BooksCreateView",
  data() {
    return {
      book: {}
    };
  },
  methods: {
    async save() {
      await insertBook(this.book);
      this.goList();
    },
    goList() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
  input[type=text], input[type=phone], input[type=email] {
    padding: 6px;
    width: 200px;
  }

  div {
    margin-bottom: 15px;
  }

  button {
    padding: 5px 20px;
    margin-right: 10px;
  }
</style>
