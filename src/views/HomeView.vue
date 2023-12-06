<template>
  <div class="home">
    <MainHeader />
    <MainColumn />
    <ColumnOffer />
    <InfoText />
    <InfoColumns />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue"
import MainFooter from "@/components/MainFooter.vue"
import MainColumn from "@/components/MainPage/MainColumn.vue"
import ColumnOffer from "@/components/MainPage/ColumnOffer.vue"
import InfoText from "@/components/MainPage/InfoText.vue"
import InfoColumns from "@/components/MainPage/InfoColumns.vue"

export default {
    name: "MainPage",
    components: {
        MainHeader,
        MainFooter,
        MainColumn,
        ColumnOffer,
        InfoText,
        InfoColumns,
    }
}
</script>
