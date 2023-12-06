<template>
  <div>
    <header class="app-header">
      <h1>{{ title }}</h1>
      <nav>
        <ul>
          <li><router-link to="/" class="button">Home</router-link></li>
          <li><router-link to="/terms" class="button">Terms</router-link></li>
          <li><router-link to="/contact" class="button">Contact</router-link></li>
        </ul>
      </nav>
    </header>
    <div class="app-content"></div>

    
  </div>
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
ul {
  list-style: none;
  padding: 0;
  margin-right: 50px;
}

li {
  display: inline;
  margin-right: 20px;
}
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #35495e;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.app-content {
  margin-top: 150px; 
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
