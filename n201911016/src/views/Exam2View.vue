<template>
  <div>
    <h2>Exam2</h2>
    <table>

        <tr v-for="(student, index) in studentList" :key="student.id" :class="{ 'done': student.deleted }">
          <td>{{ student.name }}</td>
          <td>
            <button @click="deleteStudent(index)">삭제</button>
          </td>
        </tr>
</table>
<input type="text" v-model="name" />
    <button type="button" v-on:click="addStudent">추가</button>

  </div>
</template>

<script>
export default {
  name: 'StudentList',
  data() {
    return {
      studentList: [
        { id: 1, name: 'zero'},
        { id:2, name: 'one' },
        { id: 3, name: 'two' },
      ],
      name: "",
      lastId: 3,
    };
  },
  methods: {
    addStudent: function() {
      this.studentList.push({id: ++this.lastId, name: this.name});
      this.name = "";
    },

    deleteStudent(index) {
      if (confirm('삭제하시겠습니까?')) {
        this.studentList.splice(index, 1);
      }
    }
  }
};
</script>

<style scoped>
  div { padding: 30px; margin: 30px auto; width: 350px;
    border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
  table { border-collapse: collapse; margin: 20px 0; width: 100%; }
  
  td { border: 1px solid gray; padding: 6px;; }
  td:nth-child(1) { text-align: center; width:250px; } 
  button { padding: 0.3em 1em; }
  span { font-weight: bold; margin-left: 10px; cursor: pointer; float:right;}
  input { padding: 5px; margin-right: 5px; }
</style>

