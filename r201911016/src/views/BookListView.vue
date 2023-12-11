<template>
    <div id="BooksListView">
        <h1>Exam3</h1>
        <hr>
        <table>
            <tr>
                <td>ID</td>
                <td>제목</td>
                <td></td>
            </tr>
            <tr v-for="book in books" :key="book.id">
                <td>{{ book.id }}</td>
                <td>{{ book.title }}</td>
                <td>
                    <button id="removebtn" type="button" @click="() => remove(book.id)">삭제</button>
                </td>
            </tr>
        </table>
        <div>
            <input id="newBookInput" type="text" v-model="newBookTitle" placeholder="제목을 입력하세요">
            <button id="createbtn" type="button" @click="saveBook">저장</button>
        </div>
    </div>
</template>
  
<script>
import { deleteBook, insertBook } from '../bookService';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000";

export default {
    name: "BooksListView",
    data() {
        return {
            books: [],
            newBookTitle: "", 
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
            } catch (error) {
                alert('조회 에러: ' + (error instanceof Error ? error.message : error));
            }
        },
        async saveBook() {

            // 새로운 책 제목이 비어 있지 않은 경우에만 저장
            const newBook = { title: this.newBookTitle };
            await insertBook(newBook);
            this.newBookTitle = ""; // 저장 후 입력 필드 초기화
            this.loadBooks();

        },
        async remove(id) {
            if (confirm("삭제하시겠습니까?")) {
                await deleteBook(id);
                this.loadBooks();
            }
        },
    },
};
</script>
  
<style scoped>
h1{
    margin-bottom: -10px;
}
input#newBookInput {
    width: 300px;
    margin-right: 10px;
}
button#removebtn {
    float: right;
    width: 42px;
    height: 25px;
    margin: 1px auto;
}

button#createbtn {

    width: 60px;
    height: 27px;
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
    width:30px;
}

td:nth-child(2) {
    text-align: center;
    width: 600px;
}

tr:hover {
    background-color: #ffd;
    cursor: pointer
}
input#newBookInput {
    width: 270px;
    height: 20px;
    margin-right: 10px;
  }
</style>