<template>
  <v-container class="page-root">
    <v-row class="inner" align-content="center" justify="center" no-gutters>
      <!-- UPRAVENO: responsive velikost nadpisu -->
      <h3 class="welcome-title">Vítej ve světě lesů, hor a luk :-)</h3>
    </v-row>

    <v-row class="index-text" justify="center" no-gutters>
      <div class="text-center">
        Pro všechny, kdo vyrážejí za přírodou – ať už s batohem či bez něj.<br>
        S hamakou nebo jen pod širák.<br>
        Sdílíme tipy na výlety, recenze výbavy, vychytávky do lesa a zkušenosti s přespáním v přírodě.
      </div>
    </v-row>

    <v-row class="index-text" justify="center" no-gutters>
      <div class="text-center">
        <!-- UPRAVENO: responsive velikost podnadpisu -->
        <h4 class="welcome-subtitle">Vstup do světa, kde se les stává domovem a stezky příběhem.</h4>
      </div>
    </v-row>
  </v-container>
</template>

<script>
</script>

<style scoped>
.page-root {
  display: flex;
  flex-direction: column;
}

/* UPRAVENO: default font-size menší pro mobil, velký spacing jen na větších obrazovkách */
.index-text {
  font-family: "Josefin Sans", sans-serif;
  font-size: 18px;          /* UPRAVENO (bylo 22px) */
  font-weight: 500;
  margin-bottom: 36px;      /* UPRAVENO (bylo 100px) */
  padding: 0 16px;          /* UPRAVENO: okraje na mobil */
}

/* UPRAVENO: nadpisy přes clamp() – automaticky škálují podle šířky */
.welcome-title {
  font-size: clamp(20px, 4.5vw, 32px); /* UPRAVENO: responsive */
  line-height: 1.2;
  text-align: center;
  padding: 0 16px;                    /* UPRAVENO: okraje na mobil */
}

.welcome-subtitle {
  font-size: clamp(18px, 3.5vw, 26px); /* UPRAVENO: responsive */
  line-height: 1.25;
  margin: 0;
}

/* UPRAVENO: na desktop vrátíme větší text + spacing */
@media (min-width: 960px) {
  .index-text {
    font-size: 22px;      /* UPRAVENO: původní hodnota pro desktop */
    margin-bottom: 100px; /* UPRAVENO: původní hodnota pro desktop */
    padding: 0;
  }

  .welcome-title {
    padding: 0;
  }
}
</style>
