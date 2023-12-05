<template>
    <div id="ProductEdit">
      <h1>제품 수정</h1>
      <div>
        <input type="text" v-model="product.title" />
      </div>
      <div>
        <input type="text" v-model="product.price" />
      </div>
      <div>
        <select v-model="product.category">
          <option value="음료수">음료수</option>
          <option value="과자">과자</option>
          <option value="주류">주류</option>
        </select>
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
    name: "ProductEditView",
    data() {
      return {
        product: { }
      }
    },  
    mounted() {
      const id = this.$route.params.id;
      this.loadProduct(id);
    },
    methods: {
      async loadProduct(id) {
        try {
          const response = await axios.get("/products/" + id);
          this.product = response.data;
        } catch (error) {
          alert('조회 에러: ' + (error instanceof Error ? error.message : error));
        }
      },
      async saveProduct(product) {
        try {
          await axios.put("/products/" + product.id, product );
        } catch (error) {
          alert('저장 에러: ' + (error instanceof Error ? error.message : error));
        }
      },
      async save() {
        await this.saveProduct(this.product);
        this.goList();
      },
      goList() {
        this.$router.push("/");
      },
      async del(){
        try {
            // 삭제 버튼을 누르면 "삭제하시겠습니까?" 묻는 대화상자가 나타나야 함.
           //  확인을 누르면 삭제가 되고, 취소를 누르면 삭제가 되지 않음.
            if (confirm("삭제하시겠습니까?")) {
                await axios.delete("/products/" + this.product.id);
            }
        } catch (error) {
          alert('삭제 에러: ' + (error instanceof Error ? error.message : error));
        }
        this.goList();
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
  
  