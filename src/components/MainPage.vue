<template>
  <div>
    <MainColumn />
    <ColumnOffer />
    <InfoText />
    <InfoColumns />
  </div>
</template>

<script>
import MainColumn from "./MainPage/MainColumn.vue"
import ColumnOffer from "./MainPage/ColumnOffer.vue"
import InfoText from "./MainPage/InfoText.vue"
import InfoColumns from "./MainPage/InfoColumns.vue"

export default {
    name: "MainPage",
    components: {
        MainColumn,
        ColumnOffer,
        InfoText,
        InfoColumns,
    }
}
</script>
