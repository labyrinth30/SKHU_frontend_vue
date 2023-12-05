<template>
    <div id="ProductssListView">
      <span>제품 목록</span>
      <button type="button" v-on:click="goCreate">등록</button>
      <table>
        <tr><td>id</td><td>제품명</td><td>가격</td><td>카테고리</td></tr>
        <tr v-for="pd in products" v-bind:key="pd.id" v-on:click="goEdit(pd.id)">
          <td>{{ pd.id }}</td>
          <td>{{ pd.title }}</td>
          <td>{{ pd.price }}</td>
          <td>{{ pd.category }}</td>
        </tr>
      </table>
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  axios.defaults.baseURL = "http://localhost:3000";
      // 백엔드 API URL 앞 부분을 미리 설정한다
  
  export default {
    name: "ProductListView",
    data() {
      return {
        products: [ ]
      }
    },
    mounted() { // 컴포넌트가 처음 화면에 보이게 될 때, 자동으로 호출되는 메소드
      this.reloadProducts(); // 데이터를 로드한다
    },
    methods: {
      async reloadProducts() { // 백엔드 API를 호출하여 데이터를 로드한다
        try {
          const response = await axios.get("/products");
          this.products = response.data;
        } catch (error) {
          alert('조회 에러: ' + (error instanceof Error ? error.message : error));
        }
      },goEdit(id) {
      this.$router.push("/edit/" + id);
    },
    goCreate() {
      this.$router.push("/create");
    }
}
  }
  </script>
  
  <style scoped>

  span{margin: 100px auto; font-size: 30px; font-weight: bold;}
    button {margin-left: 600px;}
  table { border-collapse: collapse; margin: 20px 0; width: 100%; }
  tr:nth-child(1) { background-color: #eee; text-align: center; }
  td { border: 1px solid gray; padding: 6px; }
  
tr:hover { background-color: #ffd; cursor: pointer }

  td:nth-child(1) { text-align: center; width: 30px; }
  </style>
  
  