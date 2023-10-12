<template>
    <footer class="app-footer">
      <nav>
        <ul>
          <li><router-link to="/terms">Terms</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </footer>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .app-footer {
    background-color: #35495e;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    display: inline;
    margin-right: 20px;
  }
  </style>
  