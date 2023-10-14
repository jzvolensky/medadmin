<template>
  <div class="home">
  </div>
  <div>
    <Page />
  </div>
</template>

<script>
// @ is an alias to /src
import Page from "@/components/MainPage.vue";

export default {
  name: "HomeView",
  components: {
    Page,
  },
};
</script>
