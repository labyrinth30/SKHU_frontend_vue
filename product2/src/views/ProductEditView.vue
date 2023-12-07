<template>
    <div id="productEdit">
      <h1>제품 수정</h1>
      <div>
        <input type="text" v-model="product.title" />
      </div>
      <div>
        <input type="text" v-model="product.price" />
      </div>
      <div>
        <select v-model="product.category">
        <option value=undefined>카테고리를 선택해주세요</option>
          <option value="음료수">음료수</option>
          <option value="과자">과자</option>
          <option value="주류">주류</option>
        </select>
      </div>
      <div>
        <button type="button" v-on:click="save">저장</button>
        <button type="button" v-on:click="remove">삭제</button>
        <button type="button" v-on:click="goList">취소</button>
      </div>
    </div>
  </template>
  
  <script>
  import { loadProduct, updateProduct, deleteProduct } from '../productService';
  
  export default {
    name: "ProductEditView",
    data() {
      return {
        product: { }
      }
    },
    async mounted() {
      const id = this.$route.params.id;
      this.product = await loadProduct(id);
    },
    methods: {
      async save() {
        await updateProduct(this.product);
        this.goList();
      },
      async remove() {
        if (confirm('삭제하시겠습니까?')) {
          await deleteProduct(this.product.id);
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
  
  
  