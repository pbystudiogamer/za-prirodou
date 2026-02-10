<template>
    <v-container>
      <v-row justify="center" style="margin-bottom: 20px">
        <v-col cols="12">
          <h4 class="text-center">
            Jaká je moje výbava a co mám na sobě při výsadcích
          </h4>
        </v-col>
      </v-row>
      <v-row justify="center" style="margin-bottom: 50px">
        <v-col cols="7">
          <div class="text-center">
            protože správné vybavení je klíčem k pohodlnému a bezpečnému pobytu v přírodě. Najdete zde doporučení na osvědčené nástroje, oblečení a doplňky pro bushcraft, vandry i treky.
          </div>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col
            v-for="item in groupItems"
            :key="item.id"
            cols="12"
            md="6"
            class="d-flex justify-center"
            style="margin-bottom: 40px"
        >
          <VybavaCard v-bind="item" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script >
import VybavaCard from "@/components/VybavaCard.vue";

import vareniImage from "@/assets/3-vareni.jpg";
import vystrojImage from "@/assets/4-vystroj.jpg";
import nocovaniImage from "@/assets/5-nocovani.jpg";
import obleceniImage from "@/assets/6-oblecení.jpg";

const loadImgsVareni = () => {
  const m = import.meta.glob("/src/assets/vybava/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  });

  return Object.entries(m)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([, v]) => v);
};

const pick = (arr, i) => (Array.isArray(arr) ? arr[i - 1] : undefined);


export default {
  components: {
    VybavaCard,
  },
  data() {
    return {
      imgsVareni: [],
      groupItems: [
        {
          id: 1,
          image: vareniImage,
          title: "Vaření",
          description: "Vše o tom, na čem si vaříme v lese.",
          items: [
            {
              id: 1,
              title: 'Zapalovač plynový Claw Gear Mk.II Storm - coyote',
              description: 'Kvalitní kapesní zapalovač Storm MK.II od rakousko-švýcarské značky Claw Gear. Hořák je odolný proti větru, takže se ve zhoršených povětrnostních podmínkách nemusíte stresovat s neustále zhasínajícím plamenem. Kromě toho můžete plamen přesně nasměrovat tam, kde ho zrovna potřebujete. Výkon hořáku je nastavitelný až do 1300°C.',
              href: 'https://armik.cz/zapalovac-plynovy-claw-gear-mk-ii-storm-coyote/',
            },
            {
              id: 2,
              title: 'Vyvýšené ohniště',
              description: 'Vysoce kvalitní vyvýšené ohniště pro každou příležitost. Dopřejte si s přáteli pohodu a klid...',
              href: 'https://www.aliexpress.com/item/1005005996690893.html',
            },
            {
              id: 3,
              title: 'Dřevěný talíř',
              description: 'Umělohmotný a přírodně zbarvený talíř, který udrží vaše jídlo na jednom místě.',
              href: 'https://bit.ly/3WRGM2I',
            },
            {
              id: 4,
              title: 'Křesadlo Warg Magno',
              description: '',
              href: 'https://kutt.it/GGS9PL',
            },
            {
              id: 5,
              title: 'Benzínový vařič',
              description: '',
              href: 'https://kutt.it/huvkWp',
            },
            {
              id: 6,
              title: 'Nerezová sklenička',
              description: '',
              href: 'https://kutt.it/av3cmV',
            },
            {
              id: 7,
              title: 'Pánvička Primus',
              description: '',
              href: 'https://kutt.it/Lp9RGY',
            },
            {
              id: 8,
              title: 'Titanové nádobí',
              description: '',
              href: 'https://bit.ly/456rUiJ',
            },
            {
              id: 9,
              title: 'SI Outdoors Infinity Backpacker Mug',
              description: '',
              href: 'https://bit.ly/4q8IKbg',
            }
          ]
        },
        {
          id: 2,
          image: vystrojImage,
          title: "Výstroj",
          description: "Co si většinou bereme s sebou",
          items: [
            {
              id: 1,
              title: 'Zavěšovací popruh JUBÖ',
              description: '',
              href: 'https://bit.ly/4nueUMP',
            },
            {
              id: 2,
              title: 'Sedátko skládací JUBÖ Bushcraft Seat Pad - Olive',
              description: '',
              href: 'https://bit.ly/42XqiJD',
            },
            {
              id: 3,
              title: 'Nůž Ruike P122',
              description: '',
              href: 'https://bit.ly/3StbdcZ',
            },
            {
              id: 4,
              title: 'Batoh Osprey Kestrel 68',
              description: '',
              href: 'https://kutt.it/4RbHyF',
            },
            {
              id: 5,
              title: 'Batoh Osprey Kyte 58',
              description: '',
              href: 'https://kutt.it/e9VthT',
            },
            {
              id: 6,
              title: 'Teploměr',
              description: '',
              href: 'https://kutt.it/AZRvDY',
            },
            {
              id: 7,
              title: 'Lucerna',
              description: '',
              href: 'https://kutt.it/mdeg8Y',
            },
          ]
        },
        {
          id: 3,
          image: nocovaniImage,
          title: "Nocování",
          description: "Nocování v lese a co si s sebou nosíme",
          items: [
            {
              id: 1,
              title: 'Hamaka Comfort Decathlon',
              description: '',
              href: 'https://kutt.it/3ARSLs',
            },
            {
              id: 2,
              title: 'Turistický nafukovací polštář MT 500 (Def)',
              description: '',
              href: 'https://kutt.it/qvBeqK',
            },
            {
              id: 3,
              title: 'Zateplení peří/duté vlákno Aliexpress',
              description: '',
              href: 'https://kutt.it/Hdm4Wm',
            },
            {
              id: 4,
              title: 'Spacák Nikča',
              description: '',
              href: 'https://kutt.it/nq4QCp',
            },
            {
              id: 5,
              title: 'Spacák DD Jura 2',
              description: '',
              href: 'https://bit.ly/3L7yJri',
            },
            {
              id: 6,
              title: 'Kokon Flyhamak',
              description: '',
              href: 'https://bit.ly/41Esx4S',
            },
            {
              id: 7,
              title: 'Popruhy k hamace',
              description: '',
              href: 'https://kutt.it/qYvbYs',
            },
            {
              id: 8,
              title: 'Zateplení pod hamaku Aliexpress',
              description: '',
              href: 'https://kutt.it/2Hzgyw',
            },
            {
              id: 9,
              title: 'Spacák Aegismax',
              description: '',
              href: 'https://bit.ly/4m4GnFr',
            },
          ]
        },
        {
          id: 4,
          image: obleceniImage,
          title: "Oblečení",
          description: "Aneb - co na sebe :)",
          items: [
            {
              id: 1,
              title: 'Helikon Hybrid Outback',
              description: '',
              href: 'https://kutt.it/xd4SFh',
            },
            {
              id: 2,
              title: 'Warg Downjess W',
              description: 'péřová sukně',
              href: 'https://kutt.it/PvQpsk',
            },
            {
              id: 3,
              title: 'Čepice EVAS II Bushman',
              description: '',
              href: 'https://kutt.it/xdKPkG',
            },
            {
              id: 4,
              title: 'Solognac 520',
              description: 'Kalhoty odolné prodyšné Decathlon',
              href: 'https://bit.ly/3KcZOxp',
            },
            {
              id: 5,
              title: 'Prabos Striker Summer MID',
              description: '',
              href: 'https://bit.ly/46NXKVq',
            },
            {
              id: 6,
              title: 'Salomon Shelter',
              description: '',
              href: 'https://bit.ly/4nAjLw5',
            },
            {
              id: 7,
              title: 'Solognac 100',
              description: 'Pánské prodyšné tričko ',
              href: 'https://bit.ly/47OR8Xx',
            },
            {
              id: 8,
              title: 'Renfort 520 Solognac',
              description: 'Lovecké kalhoty ',
              href: 'https://bit.ly/41VQDXT',
            },
            {
              id: 9,
              title: 'Crosshunt 500',
              description: 'Lovecké nepromokavé boty ',
              href: 'https://bit.ly/4fP9g5u',
            },
            {
              id: 10,
              title: 'Anorak HELIKON Woodsman - BLACK / TAIGA GREEN',
              description: '',
              href: 'https://kutt.it/TuxKPS',
            },
          ]
        }
      ]
    }
  },
  created() {
    const modulesByGroupId = {
      1: import.meta.glob("/src/assets/vareni/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" }),
      2: import.meta.glob("/src/assets/vystroj/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" }),
      3: import.meta.glob("/src/assets/nocovani/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" }),
      4: import.meta.glob("/src/assets/obleceni/*.{jpg,jpeg,png,webp,avif}", { eager: true, import: "default" }),
    };

    const toSortedArray = (m) =>
        Object.entries(m)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([, v]) => v);

    this.groupItems = this.groupItems.map((g) => {
      const m = modulesByGroupId[g.id];
      if (!m) return g;

      const imgs = toSortedArray(m);

      return {
        ...g,
        items: (g.items ?? []).map((it) => ({
          ...it,
          image: imgs[it.id - 1] ?? "",
        })),
      };
    });
  }
}

</script>

<style scoped>

</style>