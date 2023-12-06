<template>
    <MainHeader />
        <div class="terms">
            <SiteContact />
        </div>
    <MainFooter />
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
    SiteContact
},
};
</script>