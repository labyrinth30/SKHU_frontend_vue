<template>
    <div>{{ time }}</div>
  </template>
  
  <script>
  import moment from "moment";
  
  export default {
    name: "MyClock",
    props: {
      format: { type: String, default: "HH:mm:ss" }
    },
    data() {
      return { time: null };
    },
    mounted() {
        // 컴포넌트가 mount된 직후에 자동으로 호출되는 메서드
        // mount == 화면에 보이게 되는 것
        // 현재 시간을 time 변수에 담아 리턴함
        // updated는 만들고 재렌더링한 것
      let callback = () => this.time = moment().format(this.format)
      callback();
      this.timerId = setInterval(callback, 1000);
    },
    beforeUnmount() {
      clearInterval(this.timerId);
    }
  }
  </script>
  
  <style scoped>
  div { display: inline-block; }
  </style>
  
  