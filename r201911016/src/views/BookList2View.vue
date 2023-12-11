<template>
    <div id="BooksList2View">
      <h1>Exam2</h1>
      <hr>
      <table>
        <tr>
          <td>ID</td>
          <td>제목</td>
        </tr>
        <tr v-for="book in books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
        </tr>
      </table>
      <div>
        <input id="newBookInput" type="text" v-model="newBookTitle" placeholder="제목을 입력하세요">
        <button type="button" @click="saveBook">저장</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "BooksList2View",
    data() {
      return {
        books: [
          { id: 1, title: "토지" },
          { id: 2, title: "죄와벌" },
        ],
        newBookTitle: "",
        lastId: 2,
      };
    },
    methods: {
      saveBook() {
        if (this.newBookTitle.trim() !== "") {
          const newBook = { id: ++this.lastId, title: this.newBookTitle };
          this.books.push(newBook);
          this.newBookTitle = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    margin-bottom: -10px;
  }
  input#newBookInput {
    width: 250px;
    height: 20px;
    margin-right: 10px;
  }
  table {
    border-collapse: collapse;
    margin: 20px 0;
    width: 100%;
  }
  tr:nth-child(1) {
    background-color: #eee;
    text-align: center;
  }
  td {
    border: 1px solid gray;
    padding: 6px;
  }
  td:nth-child(1) {
    text-align: center;
    width: 30px;
  }
  td:nth-child(2) {
    text-align: center;
    width: 600px;
  }
  tr:hover {
    background-color: #ffd;
    cursor: pointer;
  }
  button{
    width: 60px;
    height: 27px;
  }
  </style>