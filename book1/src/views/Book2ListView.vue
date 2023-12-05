<template>
    <div id="BooksListView">
      <span>도서 목록</span>
      <button type="button" v-on:click="goCreate">등록</button>
      <table>
        <tr>
          <td></td>
          <td>id</td>
          <td>도서명</td>
          <td>가격</td>
          <td>작가</td> 
        </tr>
        <tr v-for="book in books" v-bind:key="book.id" v-on:click="goEdit(book.id)">
          <td><input type="checkbox" v-model="book.checked" v-on:click.stop /></td>
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.price }}</td>
          <td>{{ book.writer }}</td>
        </tr>
      </table>
      <div>
        <p>총합: {{ sum }}</p>
        <button type="button" v-on:click="deleteSelectedBooks">삭제</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  axios.defaults.baseURL = "http://localhost:3000";
  
  export default {
    name: "BooksListView",
    data() {
      return {
        books: [],
        sum: 0
      };
    },
    mounted() {
      this.loadBooks();
    },
    methods: {
      async loadBooks() {
        try {
          const response = await axios.get("/books");
          this.books = response.data;
  
          // Calculate price total
          this.sum = this.books.reduce((acc, book) => acc + Number(book.price), 0);
        } catch (error) {
          alert('조회 에러: ' + (error instanceof Error ? error.message : error));
        }
      },
      goEdit(id) {
        this.$router.push("/edit/" + id);
      },
      goCreate() {
        this.$router.push("/create");
      },
      async deleteSelectedBooks() {
    const selectedBooks = this.books.filter(book => book.checked);
  
    if (selectedBooks.length === 0) {
      alert('삭제할 도서를 선택하세요.');
      return;
    }
  
    if (confirm('선택한 도서를 삭제하시겠습니까?')) {
      try {
        // 삭제할 도서의 ID 목록 추출
        const bookIdsToDelete = selectedBooks.map(book => book.id);
  
        // 서버에 삭제 요청
        axios.delete("/books/" + bookIdsToDelete);
  
        // 도서 목록 새로고침
        this.loadBooks();
      } catch (error) {
        alert('삭제 에러: ' + (error instanceof Error ? error.message : error));
      }
    }
  }
  
    }
  };
  </script>
  
  <style scoped>
    span { margin: 100px auto; font-size: 30px; font-weight: bold; }
    button { margin-left: 600px; }
    table { border-collapse: collapse; margin: 20px 0; width: 100%; }
    tr:nth-child(1) { background-color: #eee; text-align: center; }
    td { border: 1px solid gray; padding: 6px; }
    input { border: 1px solid gray; padding: 6px; }
    tr:hover { background-color: #ffd; cursor: pointer; }
    td:nth-child(1) { text-align: center; width: 30px; }
  </style>