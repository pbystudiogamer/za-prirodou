<template>
  <v-container style="">
    <v-row justify="center" style="margin-bottom: 50px" >
      <v-col cols="12" >
        <h4 class="text-center" style="margin-bottom: 50px">
          Bushcraft
        </h4>

        <h5 class="text-center" style="margin-bottom: 25px">
          Co to vlastně ten Bushcraft je?
        </h5>

        <div class="text-section text-center" style="margin-bottom: 25px">
          Bushcraft je pojem, který označuje soubor dovedností a znalostí potřebných k přežití a pohodlnému <b>dlouhodobějšímu</b> životu v přírodě s využitím <b>přírodních zdrojů.</b>

        </div>
        <v-divider style="margin-bottom: 25px; margin-left: -150px"/>
        <div
            v-for="(item, index) in items"
            style="margin-bottom: 25px;">
            <h5 style="margin-left: 150px; margin-bottom: 20px">{{index+1}}. {{item.title}}</h5>
            <ul style="margin-bottom: 25px">
              <v-row
                v-for="(itm, idx) in item.points"
                style="margin-left: 200px">
                <li v-html="itm"></li>
              </v-row>
            </ul>
          <v-divider style="margin-bottom: 25px; margin-left: -200px"/>
        </div>

        <v-row style="margin-top: 120px;">
          <v-col
              v-for="item in videos"
              cols="12"
              md="4"
              class="d-flex justify-center"
          >
            <VideoCard v-bind="item" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VideoCard  from '@/components/VideoCard.vue'
import lighter from "@/assets/lighter.jpg";
import ItemCard from "@/components/ItemCard.vue";

export default {
  components: {
    ItemCard,
    VideoCard
  },
  data() {
    return {
      items: [
      {
        title: 'Definice bushcraftu',
        points: [
          '<b>Bushcraft</b> pochází z anglického slova „bush“ (divočina) a „craft“ (řemeslo, umění).',
          'Jde o praktické dovednosti, které umožňují člověku fungovat v přírodě bez moderních technologií.',
          'Cílem není jen přežití, ale hlavně komfortní pobyt v přírodě s respektem k prostředí.'
        ]
      },
      {
        title: 'Historie a původ',
        points: [
          'Kořeny sahají k původním obyvatelům (Indiáni, Aboridžinci), kteří žili v souladu s přírodou.',
          'Moderní bushcraft se rozvinul díky cestovatelům, lovcům a průzkumníkům.',
          'V současnosti je populární jako koníček, součást outdoorového životního stylu a survivalu.'
        ]
      },
      {
        title: 'Hlavní oblasti bushcraftu',
        points: [
          '<b>Oheň:</b> rozdělávání ohně bez zápalek (tření, křesadlo).',
          '<b>Přístřeší:</b> stavba z přírodních materiálů.',
          '<b>Voda:</b> získávání a čištění vody (filtrace, převaření).',
          '<b>Potrava:</b> lov, rybolov, sběr jedlých rostlin.',
          '<b>Nástroje:</b> výroba a používání nožů, seker, improvizovaných nástrojů.',
          '<b>Orientace:</b> navigace bez GPS (slunce, hvězdy, přírodní znamení).'
        ]
      },
        {
        title: 'Bushcraft vs. Survival',
        points: [
          '<b>Bushcraft</b> = dlouhodobý pobyt v přírodě, pohodlí, znalosti přírody.',
          '<b>Survival</b> = krizová situace, rychlé přežití, minimalizace rizik.',
        ]
      },
      {
        title: 'Etika a filozofie bushcraftu',
        points: [
          'Respekt k přírodě: „Leave no trace“ (nezanechávej stopy).',
          'Udržitelnost: využívání přírodních zdrojů bez poškození ekosystému.',
          'Psychologický aspekt: návrat k jednoduchosti, odpočinek od civilizace.'
        ]
      },
      {
        title: 'Moderní význam',
        points: [
          'Bushcraft je dnes populární díky YouTube kanálům, knihám a kurzům.',
          'Slouží jako relaxace, trénink dovedností, příprava na krizové situace.'
        ]
      }],
      videos: [
        {
          href: 'https://www.youtube.com/watch?v=AY18GcgunJg',
          title: 'Základy Bushcraftu ➠ První kroky ve světě přežití v divočině',
          description: 'V tomto videu ti řeknu svůj pohled na to, co je to Bushcraft. Video je úvodem do této problematiky a slouží k osvětlení toho, co to vlastně ten bushcraft je :-)',
        },
        {
          href: 'https://www.youtube.com/watch?v=XSjKYrwxtWM',
          title: 'Bushcraft: Rozdělání ohně křesadlem ➠ I. Březová kůra',
          description: 'Toto video je spíše pro začínající bushcrafťáky. Nicméně si myslím, že si v něm může každý najít něco a když ne, tak aspoň uvidí, jak s březovkou bojuju já :-D',
        },
        {
          href: 'https://www.youtube.com/watch?v=x9kxMWrhWgs',
          title: 'Bushcraft: Rozdělání ohně křesadlem ➠ II. Jutový provázek ',
          description: 'Toto video je spíše pro začínající bushcrafťáky. Nicméně si myslím, že si v něm může každý najít něco a když ne, tak aspoň uvidí, jak s březovkou bojuju já :-D',
        },
        {
          href: 'https://www.youtube.com/watch?v=uLj4RiDVu5k',
          title: 'Výroba bushcraft kořenky ➠ Výroba, rady a vychytávky',
          description: 'V tomto videu jsem se pokusil vyrobit kořenky a myslím, že se mi to i povedlo :-) Tak snad se vám bude návod líbit ;-)',
        }
      ],
    }
  }
}
</script>

<style scoped>
.v-container {
  width: 80%;
}
</style>