<template>
  <footer class="app-footer">
    <nav>
      <ul>
        <li><router-link to="/terms" class="button">Terms</router-link></li>
        <li><router-link to="/contact" class="button">Contact</router-link></li>
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
  display: flex;
  justify-content: center; 
  align-items: center; 
}

li {
  display: inline;
  margin-right: 20px;
}

.button {
  background: linear-gradient(to right, #3498db, #2980b9);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease-in-out;
  text-align: center; 
  display: inline-block; 
  text-decoration: none; 
}

.button:hover {
  background: linear-gradient(to right, #2980b9, #3498db);
}
</style>
