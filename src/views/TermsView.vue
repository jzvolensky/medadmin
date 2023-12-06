<template>
    <MainHeader />
        <div class="terms">
            <Terms />
        </div>
    <MainFooter />
</template>

<script>
import Terms from "@/components/terms/SiteTerms.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "TermsView",
  components: {
    Terms,
    MainHeader,
    MainFooter,
  },
};
</script>