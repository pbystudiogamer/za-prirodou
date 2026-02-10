<template>
  <v-container class="page-root">
    <v-row class="inner" align-content="center" justify="center" no-gutters>
      <h3 class="welcome-title">Vítej ve světě lesů, hor a luk :-)</h3>
    </v-row>

    <v-row class="index-text" justify="center" no-gutters>
      <div class="text-center">
        Pro všechny, kdo vyrážejí za přírodou – ať už s batohem či bez něj.<br>
        S hamakou nebo jen pod širák.<br>
        Sdílíme tipy na výlety, recenze výbavy, vychytávky do lesa a zkušenosti s přespáním v přírodě.
      </div>
    </v-row>

    <v-row justify="center" no-gutters>
      <v-col cols="12" class="d-flex justify-center">
        <v-img :src="def_logo_image" height="350" max-width="600" contain />
      </v-col>
    </v-row>

    <v-row class="index-text" justify="center" no-gutters>
      <div class="text-center">
        <h4 class="welcome-subtitle">Vstup do světa, kde se les stává domovem a stezky příběhem.</h4>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import def_logo from '@/assets/deflector_logo.png';

export default {
  data() {
    return {
      def_logo_image: def_logo,
    }
  }
}
</script>

<style scoped>
.page-root {
  display: flex;
  flex-direction: column;
}

.index-text {
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 36px;
  padding: 0 16px;
}

.welcome-title {
  font-size: clamp(20px, 4.5vw, 32px);
  line-height: 1.2;
  text-align: center;
  padding: 0 16px;
}

.welcome-subtitle {
  font-size: clamp(18px, 3.5vw, 26px);
  line-height: 1.25;
  margin: 0;
}

@media (min-width: 960px) {
  .index-text {
    font-size: 22px;
    margin-bottom: 25px;
    padding: 0;
  }

  .welcome-title {
    padding: 0;
  }
}
</style>
