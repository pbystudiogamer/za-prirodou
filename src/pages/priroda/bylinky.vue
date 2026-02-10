<template>
  <v-container>
    <v-row >
      <v-col cols="12" class="d-flex justify-end">
        <v-btn variant="text" @click="GoBack" class="button-back">
          ← Zpět
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center" style="margin-bottom: 50px">
      <v-col cols="12">
        <h4 class="text-center">Bylinky</h4>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
          v-for="item in items"
          :key="item.title"
          cols="12"
          md="6"
          class="d-flex justify-center"
      >
        <HerbCard v-bind="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HerbCard from "@/components/HerbCard.vue";
import jaternikImage from "@/assets/rostliny/01-jaternik.jpg";
import habrImage from "@/assets/rostliny/02-habr.jpg";

export default {
  components: { HerbCard },
  data() {
    return {
      items: [
        {
          image: jaternikImage,
          title: "Jaterník trojlaločný",
          latinTitle: "(Hepatica nobilis)",
          description: "Jemná lesní trvalka, která vítá jaro jako jedna z prvních.",
          basicInformation:
              "<ul>" +
              "<li><b>Latinský název:</b> Hepatica nobilis</li>" +
              "<li><b>Čeleď:</b> pryskyřníkovité (Ranunculaceae)</li>" +
              "<li><b>Synonyma:</b> Hepatica triloba, Anemone hepatica</li>" +
              "<li><b>České názvy:</b> jaterník trojlaločný, jaterník podléška</li>" +
              "</ul> <br>" +
              "<p>Jaterník je <b>vytrvalá nízká bylina<b>, která roste v listnatých lesích mírného pásma Evropy. V Česku je poměrně hojný, ale ve východní části Moravy je vzácnější.</p>",
          fullInformation: [
            {
              title: "Jak rostlina vypadá",
              points: [
                "<b>Listy</b> jsou kožovité, tmavě zelené a typicky <b>trojlaločné</b> — jejich tvar připomíná lidská játra.",
                "<b>Květy</b> se objevují velmi brzy na jaře, nejčastěji <b>modré</b>, mohou být i <b>bílé</b> nebo <b>růžové</b>.",
                "Dorůstá výšky kolem <b>10–15 cm</b>.",
              ],
            },
          ],
          videoTitle: "Video s povídáním",
          videoLink: "https://www.youtube.com/watch?v=wF0udsoPKWk",
        },
        {
          image: habrImage,
          title: "Habr obecný",
          latinTitle: "(Carpinus betulus)",
          description: "Statný a odolný strom našich lesů, ceněný pro tvrdé dřevo a schopnost vytvářet husté, přirozené porosty.",
          basicInformation:
          "<strong>Taxonomie</strong><br>"+
              "<ul>" +
              "<li><b>Říše:</b> Plantae</li>" +
              "<li><b>Třída:</b> Magnoliopsida</li>" +
              "<li><b>Řád:</b> Fagales</li>" +
              "<li><b>Čeleď:</b> Betulaceae (břízovité)</li>" +
              "<li><b>Rod:</b> Carpinus</li>" +
              "<li><b>Druh:</b> Carpinus betulus</li>" +
              "</ul> <br>",
          fullInformation: [
            {
              title: "",
              points: [
                "Habr obecný je jednou z nejvýznamnějších listnatých dřevin střední Evropy. V české krajině se vyskytuje přirozeně a díky své odolnosti i estetickým vlastnostem se stal oblíbeným stromem v zahradní architektuře. Tato práce shrnuje jeho základní botanické vlastnosti, ekologický význam, zajímavosti, léčivé účinky a využití dřeva.",
                "Habr patří do čeledi břízovitých (Betulaceae). Dorůstá výšky 10–25 metrů a je typický svým nepravidelným, často „svalovitým“ kmenem. Kůra je šedá a hladká, listy vejčité, dvakrát pilovité, na podzim žloutnou. Květy tvoří nenápadné jehnědy a plodem je nažka s trojlaločným listenem. Strom dobře snáší zastínění, různé typy půd i městské prostředí, což z něj činí velmi adaptabilní druh.",
                "Z ekologického hlediska má habr významnou roli. Poskytuje úkryt ptákům, stabilizuje půdu a jeho listí se rozkládá pomaleji, čímž obohacuje lesní humus. Přirozeně se vyskytuje v habrových doubravách, které patří mezi cenné lesní ekosystémy. V zahradnictví je ceněn pro schopnost udržet suché listy přes zimu, díky čemuž vytváří husté a neprůhledné živé ploty. Snáší pravidelný řez a lze jej tvarovat do stěn, alejí či geometrických forem.",
                "Ačkoli habr není typickou léčivou rostlinou, v tradiční medicíně se využívají jeho mladé listy a pupeny. Čaj z listů se používal při zánětech dýchacích cest, kašli a k podpoře regenerace sliznic. V gemmoterapii (léčbě pupeny) se výtažky z habru doporučují při chronických rýmách, sinusitidách, oslabené imunitě a únavě. Účinky jsou mírné, ale tradičně ceněné.",
                "Dřevo habru je jedním z nejtvrdších v Evropě, často označované jako „železné dřevo“. Je velmi husté, těžké, jemné struktury a odolné proti oděru. Špatně se štípe, ale výborně se soustruží. V minulosti se používalo na výrobu ozubených kol, kladiv, kolovratů či nástrojů, které musely snášet vysoké namáhání. Dnes se z něj vyrábějí hudební nástroje, rukojeti, kuchyňské potřeby nebo kvalitní parkety.",
                "Habr obecný je tedy dřevina s významem ekologickým, kulturním i praktickým. Jeho odolnost, tvrdé dřevo a estetické vlastnosti z něj činí důležitou součást české přírody i zahradní tvorby. Přestože jeho léčivé účinky nejsou zásadní, doplňují celkový obraz stromu, který je pevně zakořeněn v evropské krajině i tradici."
              ],
            },
          ],
          videoTitle: "Odkaz na video",
          videoLink: "https://www.youtube.com/watch?v=Ax7kksu3Ddk\n",
        },
      ],
    };
  },
  methods: {
    GoBack() {
        this.$router.push('/priroda');
    }
  }
};
</script>

<style scoped>
.button-back {
  background-color: #7b8f3b;
  color: #fff;
}
</style>