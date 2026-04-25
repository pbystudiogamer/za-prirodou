<template>
  <v-container>
    <v-row >
      <v-col cols="12" class="d-flex justify-end">
        <v-btn variant="text" @click="GoBack" class="button-back">
          ← Zpět
        </v-btn>
      </v-col>
    </v-row>
    <br>
    <br>
    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>
          Správný výběr místa pro tábor je klíčovým krokem při pobytu v přírodě. Ovlivňuje
          bezpečnost, komfort a celkový zážitek. Bushcraft není jen o improvizaci, ale také o
          znalosti prostředí a schopnosti využít jeho výhody. Při volbě lokality je nutné zohlednit
          řadu faktorů – od orientace na světové strany až po typ vegetace a nadmořskou
          výšku.
          <br>
          <br>
          <b>Pojďme na to:</b>

        </p>
        <br>
      </v-col>
    </v-row>

    <!-- SEKCE 1 -->
    <v-row justify="center" class="mb-8" style="margin-top: 50px">
      <v-col cols="12" class="d-flex justify-center">
        <h4>1) Orientace na světové strany 🧭</h4>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>👉 Slunce: Přístřeší orientujte tak, aby ranní slunce poskytlo teplo, ale odpolední slunce vás nepřehřívalo. Ideální je mít otevřenou stranu směrem na východ.</p>

        <p>👉 Vítr: Sledujte směr převládajícího větru. Přístřeší stavte tak, aby zadní část byla proti větru, čímž zvýšíte ochranu.</p>

        <p>👉 Přírodní znamení: Mech na stromech, hustota vegetace či stopy slunce pomohou určit světové strany bez kompasu.</p>
        <br>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8" style="margin-top: 50px">
      <v-col cols="12" class="d-flex justify-center">
        <h4>2) Voda 💧</h4>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>👉 Dostupnost: Blízkost zdroje vody je zásadní pro pití, vaření a hygienu.</p>

        <p>👉 Bezpečná vzdálenost: Tábor by měl být alespoň 50–100 metrů od vody, aby se minimalizovalo riziko záplav, vlhkosti a hmyzu.</p>

        <p>👉 Kvalita vody: Vyhýbejte se stojatým vodám, preferujte potoky nebo prameny.</p>
        <br>
        
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8" style="margin-top: 50px">
      <v-col cols="12" class="d-flex justify-center">
        <h4>3) Terén ⛰️</h4>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>👉 Rovný povrch: Usnadňuje stavbu přístřeší a zajišťuje pohodlný spánek.</p>

        <p>👉 Odvodnění: Vyhněte se údolím, prohlubním a místům, kde se hromadí voda.</p>

        <p>👉 Stabilita: Nepokládejte tábor na sypký svah nebo pod skalní převis, kde hrozí sesuv.</p>
        <br>

      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8" style="margin-top: 50px">
      <v-col cols="12" class="d-flex justify-center">
        <h4>4) Vegetace 🌿</h4>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>👉 Stromy: Poskytují ochranu před větrem a sluncem, ale vyhněte se nemocným nebo suchým stromům (riziko pádu).</p>

        <p>👉 Keře a tráva: Hustá vegetace může znamenat vlhkost a hmyz.</p>

        <p>👉 Jedovaté rostliny: Naučte se rozpoznat druhy, které mohou být nebezpečné.</p>
        <br>

      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8" style="margin-top: 50px">
      <v-col cols="12" class="d-flex justify-center">
        <h4>5) Podklad 🪨</h4>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>👉 Suchý a pevný: Ideální je lesní půda s jehličím nebo listím, která izoluje od chladu.</p>

        <p>👉 Vyhněte se kamenům a kořenům: Zajistí pohodlný spánek.</p>

        <p>👉 Izolace: V případě vlhkého podkladu použijte vrstvu větví, listí nebo tarp.</p>
        <br>

      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8" style="margin-top: 50px">
      <v-col cols="12" class="d-flex justify-center">
        <h4>6) Nadmořská výška 📈</h4>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>👉 Střední polohy: Vyhněte se vrcholům (silný vítr) i údolím (vlhkost, chlad).</p>

        <p>👉 Teplota: Vyšší nadmořská výška znamená nižší teploty, což ovlivňuje vybavení.</p>
        <br>

      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8" style="margin-top: 50px">
      <v-col cols="12" class="d-flex justify-center">
        <h4>7) Skrytost a bezpečnost 🕵️</h4>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>👉 Nenápadné místo: Tábor by měl být skrytý před cestami a frekventovanými trasami, aby se minimalizovalo rušení.</p>

        <p>👉 Přístupnost: Zvažte, zda místo umožňuje rychlý únik v případě nouze.</p>

        <p>👉 Zvířata: Vyhněte se místům s čerstvými stopami velkých zvířat.</p>
        <br>

      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8" style="margin-top: 50px">
      <v-col cols="12" class="d-flex justify-center">
        <h4>8) Další faktory️ 📌</h4>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>👉 Materiál v okolí: Dostatek dřeva na oheň a stavbu přístřeší.</p>

        <p>👉 Povětrnostní podmínky: Sledujte předpověď počasí, vyhněte se místům ohroženým záplavami nebo silným větrem.</p>

        <p>👉 Pravidla a zákony: Vždy respektujte místní předpisy o táboření.</p>
        <br>

      </v-col>
    </v-row>
    
    
   

    <!-- ZÁVĚR -->
    <v-row justify="center" class="mb-8 section">
      <v-col cols="12" lg="10">
        <h4 class="text-center">Závěrem: Každý krok tě učí víc</h4>
        <br>

        <p class="list-offset">
          Uč se číst krajinu.<br>
          Uč se vnímat souvislosti.<br>
          Uč se rozhodovat s respektem k přírodě.<br><br>

          Výběr místa pro bushcraft tábor je komplexní proces, který vyžaduje cit pro přírodu, schopnost číst terén a respekt k bezpečnostním zásadám. Každý faktor — od orientace, vody, podkladu, vegetace, nadmořské výšky až po skrytost, zvířata a další okolní podmínky — ovlivňuje, jak pohodlný, bezpečný a udržitelný tvůj pobyt bude.

          Správně zvolená lokalita ti umožní minimalizovat rizika, využít přírodní zdroje rozumně a naplno si užít čas v lese. A i když něco nevyjde dokonale, každá chyba je další zkušenost, která tě posune dál.
        </p>

        <br><br>

        <p class="podpis"><strong>Autor článku: Deflector</strong></p>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    GoBack() {
      this.$router.push('/blog');
    }
  }
}
</script>

<style scoped>
.button-back {
  background-color: #7b8f3b;
  color: #fff;
}

.list-offset {
  padding-left: 60px;
}

.list-margin {
  margin-top: -30px;
}

.section {
  margin-top: -40px;
}

.podpis {
  justify-self: end;
}
</style>