<template>
  <div>
    <header class="app-header">
      <h1>{{ title }}</h1>
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
}

.app-logo {
  width: 100px;
  height: auto;
}

.app-content {
  margin-top: 150px; /* Adjust this value to match the height of your header */
}
</style>
