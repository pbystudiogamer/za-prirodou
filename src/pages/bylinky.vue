<template>
  <v-container>
    <v-row justify="center" style="margin-bottom: 50px">
      <v-col cols="12">
        <h4 class="text-center">
          Bylinky
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
          title: 'Jaterník trojlaločný',
          latinTitle: '(Hepatica nobilis)',
          description: 'Jemná lesní trvalka, která vítá jaro jako jedna z prvních.',
          basicInformation: '<ul>' +
              '<li><b>Latinský název:</b> Hepatica nobilis</li>' +
              '<li><b>Čeleď:</b> pryskyřníkovité (Ranunculaceae)</li>' +
              '<li><b>Synonyma:</b> Hepatica triloba, Anemone hepatica</li>' +
              '<li><b>České názvy:</b> jaterník trojlaločný, jaterník podléška</li>' +
              '</ul> <br>' +
              '<p>Jaterník je <b>vytrvalá nízká bylina<b>, která roste v listnatých lesích mírného pásma Evropy. V Česku je poměrně hojný, ale ve východní části Moravy je vzácnější.</p>',
          fullInformation: [
            {
              title: 'Jak rostlina vypadá',
              points: [
                '<b>Listy</b> jsou kožovité, tmavě zelené a typicky <b>trojlaločné</b> — jejich tvar připomíná lidská játra.',
                '<b>Květy</b> se objevují velmi brzy na jaře, nejčastěji <b>modré</b>, mohou být i <b>bílé</b> nebo <b>růžové</b>.',
                'Dorůstá výšky kolem <b>10–15 cm</b>.'
              ]
            },
            {
              title: 'Výskyt a rozšíření',
              points: [
                'Roste v <b>listnatých lesích</b>, často pod buky.',
                'Vyhovují mu <b>polostinná až stinná místa</b> a <b>humózní půda</b>.',
                'Vyskytuje se ve střední Evropě, Středomoří i na Balkáně.'
              ],
              description: 'V Česku je poměrně hojný, lokálně však může být vzácnější.'
            },
            {
              sectionTitle: 'Zajímavosti, které stojí za zmínku',
              title: '⭐ Symbolika a historie',
              points: [
                'Ve středověku byl jaterník považován za léčivku na onemocnění jater — podle tzv. <b>signatury rostlin</b> (víra, že vzhled rostliny napovídá, na co léčí).',
                'Právě tvar listů připomínající játra tuto víru podporoval.',
              ],
              description: ''
            },
            {
              title: 'Rostlina roku',
              points: [
                'V roce <b>2013</b> byl jaterník vyhlášen <b>německou Rostlinou roku</b>.',
              ],
              description: 'Léčivé využití (historické)'
            },
            {
              title: 'Dříve se používal při:',
              points: [
                'potížích s játry,',
                'zánětech,',
                'problémech s dýchacími cestami.',
              ],
              description: 'Dnes se užívá spíše výjimečně — moderní medicína jeho účinky nepovažuje za zásadní.'
            },
            {
              title: 'Zahradní zajímavosti',
              points: [
                'Existují i <b>zahradní kultivary</b> s plnými květy nebo neobvyklými barvami.',
                'Jaterník je <b>zimovzdorný</b> a v mírných zimách si listy ponechává po celý rok.',
              ],
            },
            {
              title: 'Proč je jaterník tak oblíbený',
              points: [
                'Je to <b>první posel jara</b> — kvete, když je les ještě holý.',
                'Je nenápadný, ale při bližším pohledu překvapí krásou i jemností.',
                'Má bohatou historii a symboliku.',
                'Je to rostlina, která spojuje botaniku, folklor i estetiku.',
              ],
            }
          ],
          videoTitle: 'Video s povídáním',
          videoLink: 'https://www.youtube.com/watch?v=wF0udsoPKWk',
        }
      ]
    }
  }
}
</script>


<style scoped>

</style>