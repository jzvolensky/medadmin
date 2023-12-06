<template>
    <div id="app">
      <MainHeader />
      <div class="terms">
        <SiteContact />
      </div>
      <MainFooter />
    </div>
  </template>
  
  <script>
  import SiteContact from "@/components/contact/SiteContact.vue";
  import MainHeader from "@/components/MainHeader.vue";
  import MainFooter from "@/components/MainFooter.vue";
  
  export default {
    name: "TermsView",
    components: {
      MainHeader,
      MainFooter,
      SiteContact,
    },
  };
  </script>
  
  <style scoped>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
  }
  
  .terms {
    flex: 1; 
  }
  
  </style>