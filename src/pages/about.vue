<template>
  <v-container>
    <div class="about-hero" :style="{ '--about-bg': `url(${spolecna})` }">
      <div class="about-content">

        <v-row justify="center" style="margin-bottom: 50px">
          <v-col cols="12">
            <h4 class="text-center">Informace o nás</h4>
          </v-col>
        </v-row>

        <v-row justify="center" style="margin-bottom: 10px">
          <v-col cols="10" lg="12" xl="10" md="12" sm="12">
            <p>
              Jsme nadšenci do bushcraftu, turistiky a života v přírodě. Milujeme objevování nových míst, zkoušení tradičních dovedností a sdílení zkušeností, které pomohou ostatním najít cestu k přírodě. Tento web vznikl jako prostor pro inspiraci, praktické rady a tipy na vybavení, trasy a techniky, které usnadní vaše dobrodružství.
            </p>
          </v-col>
        </v-row>

        <v-row justify="center" style="margin-bottom: 50px">
          <v-col cols="10" lg="12" xl="10" md="12" sm="12">
            <p>
              Naším cílem je ukázat, že pobyt v přírodě může být nejen bezpečný, ale i pohodlný a zábavný. Věříme v respekt k přírodě, udržitelnost a návrat k jednoduchosti.
            </p>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="10" lg="12" xl="10" md="12" sm="12">
            <h5 class="text-center">
              Připojte se k nám a objevujte krásu bushcraftu a outdooru!
            </h5>
          </v-col>
        </v-row>



      </div>
      <v-row justify="center" class="mt-8">
        <v-col cols="12" class="d-flex justify-center">
          <v-img
              :src="spolecna"
              height="100%"
              max-width="1000"
              cover
              class="about-image"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import spolecnaImage from '@/assets/spolecna.png';

export default {
  name: 'About',
  data() {
    return { spolecna: spolecnaImage };
  },
};
</script>

<style scoped>

.about-hero{
  width: 100%;
  margin-bottom: 20px;
}

.about-image{
  border-radius: 18px;
  overflow: hidden;
}
</style>
