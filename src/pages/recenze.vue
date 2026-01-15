<template>
  <v-container>
    <v-row justify="center" style="margin-bottom: 50px">
      <v-col cols="12">
        <h4 class="text-center">
          Recenze
        </h4>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
          v-for="item in items"
          :key="item.id"
          cols="12"
          md="4"
          class="d-flex justify-center"
      >
        <HerbCard v-bind="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HerbCard from "@/components/HerbCard.vue";
import jaternikImage from "@/assets/jaternik_trojlalocny.jpg";

export default {
  components: {
    HerbCard,
  },
  data() {
    return {
      items: [
        {
          image: jaternikImage,
          title: 'Fenix HL45R - praktický test v terénu ',
          latinTitle: '',
          description: '',
          basicInformation: 'Čelovka <b>*Fenix HL45R*</b> patří mezi kompaktní, ale velmi výkonné modely s maximálním výkonem 1000 lumenů a možností plynulého zaostření světelného kuželu. V krátké recenzi a terénním testu ukazuji její reálné chování v přírodě, přepínání režimů, dosvit i práci s fokusem. Součástí je také zhodnocení ovládání, výdrže a celkové praktičnosti pro outdoor, bushcraft i běžné použití.',
          fullInformation: [
            {
              title: '',
              points: [
              ]
            },
          ],
          videoTitle: '*Podívejte se na kompletní video s recenzí a testem zde:*',
          videoLink: 'https://www.youtube.com/watch?v=o-6K6-LbOVQ',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>