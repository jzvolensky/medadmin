<template>
  <div id="app">
    <Header />
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/MainHeader.vue';
import Footer from './components/MainFooter.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>