<template>
  <v-container>
    <v-row justify="center" >
      <v-col cols="12">
        <h4 class="text-center mb-12">Bushcraft</h4>

        <h5 class="text-center mb-6">Co to vlastně ten Bushcraft je?</h5>

        <div class="text-section text-center mb-8">
          Bushcraft je pojem, který označuje soubor dovedností a znalostí potřebných k přežití a pohodlnému
          <b>dlouhodobějšímu</b> životu v přírodě s využitím <b>přírodních zdrojů.</b>
        </div>
        <v-divider class="my-6 full-divider" />
      </v-col>
    </v-row>
    <v-row class="mb-12" justify="center">
      <v-col cols="8" md="12">
      <div v-for="(item, index) in items" :key="index" class="mb-6 section">
        <h5 class="mb-5">{{ index + 1 }}. {{ item.title }}</h5>

        <ul class="mb-6">
          <li v-for="(itm, idx) in item.points" :key="idx" class="mb-2" v-html="itm" />
        </ul>

        <v-divider class="my-6 full-divider" />
      </div>
      </v-col>
    </v-row>
  </v-container>
  <h4 class="text-center mb-12">Videa o bushraftu</h4>
  <v-container class="videos-container">
    <v-row class="mt-16 ga-6 justify-center">
      <v-col v-for="item in videos" :key="item.href" cols="auto" class="d-flex">
        <VideoCard v-bind="item" />
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import VideoCard  from '@/components/VideoCard.vue'

export default {
  components: {
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
        },
        {
          href: 'https://www.youtube.com/watch?v=DpsoC1MfsJY',
          title: 'Bushcraft pouzdro na sekeru',
          description: 'To si tak jednou jdete lesem a ztratíte pouzdro na sekeru..co budete dělat? Toto videjko Vám snad poskytne radu či alespoň inspiraci :-)',
        },
        {
          href: 'https://www.youtube.com/watch?v=XVKbS7lEqN4',
          title: 'Bushcraft armchair - Just Relax :-)',
          description: 'Armchair without nails :-) Just an ax, a saw, a knife and a piece of string and a large armchair with a great carrying capacity :-) Production time about 1 hour :-)',
        },
        {
          href: 'https://www.youtube.com/watch?v=QdjKDEeYK2E',
          title: 'Construction of shelter part 1 - basic construction',
          description: 'Today, together we start a new project and it is building permanent shelter. As only basic tools are used - folding saw, ax and knife :-) I use stronger jute string :-)',
        },
        {
          href: 'https://www.youtube.com/watch?v=jJtCzgYgaLY',
          title: 'Bushcraft stolička ➠ Snadněji už to nejde',
          description: 'Tak jsem si řekl, že bych mohl vyrobit stoličku k ohni a to co nejjednodušeji, s tím, že to musí být stále stolička a ne jen kláda hozená na zem. Druhou podmínkou bylo použití co nejméně nástrojů k dosažení tohoto cíle :-) No a výsledek vidíte ve videu :-)',
        },
        {
          href: 'https://www.youtube.com/watch?v=g8aEkhB3-3E',
          title: 'Jak vyrobit závěs na KOTLÍK ➠ 3 druhy',
          description: 'V tomto videu uvidíte výrobu třech druhů závěsů na kotlík..od jednoduchého pro složitější. Pokud používáte jiné, tak budu moc rád, když nám je ukážete na FB skupině "Deflector a Procházkáři" :-)',
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

.videos-container {
  width: min(120%, 100%);
}

ul {
  list-style-position: outside;
  padding-inline-start: 1.25rem;
  margin: 0;
}


.section {
  padding-inline: clamp(0px, 0vw, 40px);
}

.section ul {
  padding-inline-start: clamp(0px, 0vw, 36px);
  margin: 0;
}

.section li {
  line-height: 1.6;
}

.full-divider {
  width: 60vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>