<template>
    <header class="app-header">
      <h1>{{ title }}</h1>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "Medadmin",
      };
    },
  };
  </script>
  
  <style scoped>
  .app-header {
    background-color: #35495e;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .app-logo {
    width: 100px;
    height: auto;
  }
  </style>
  