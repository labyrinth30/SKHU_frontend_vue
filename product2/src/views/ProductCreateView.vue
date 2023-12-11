<template>
    <div id="productEdit">
      <h1>제품 등록</h1>
      <div>
        <input type="text" v-model="product.title" placeholder="제품명" />
      </div>
      <div>
        <input type="text" v-model="product.price" placeholder="가격"  />
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
        <button type="button" v-on:click="goList">취소</button>
      </div>
    </div>
  </template>
  
  <script>
  import { insertProduct } from '../productService';
  
  export default {
    name: "productCreateView",
    data() {
      return {
        product: { }
      }
    },
    methods: {
      async save() {
        await insertProduct(this.product);
        this.goList();
      },
      goList() {
        this.$router.push("/");
      }
    }
  }
  </script>
  
  <style>
  input[type=text], input[type=phone], input[type=email] { padding: 6px; width: 200px; }
  select { padding: 6px; width: 200px }
  div { margin-bottom: 15px; }
  label { margin-right: 15px; }
  button { padding: 5px 20px; margin-right: 10px; }
  </style>
  
  