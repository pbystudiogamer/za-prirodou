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
          description: "Výbava na které si vaříme v lese.",
          items: [
            {
              id: 1,
              title: 'Zapalovač plynový Claw Gear Mk.II Storm - coyote',
              description: 'Kvalitní kapesní zapalovač Storm MK.II od rakousko-švýcarské značky Claw Gear.',
              href: 'https://armik.cz/zapalovac-plynovy-claw-gear-mk-ii-storm-coyote/?tracking=6076c2ae9e307',
            },
            {
              id: 2,
              title: 'Vyvýšené ohniště',
              description: 'Vysoce kvalitní vyvýšené ohniště pro každou příležitost.',
              href: 'https://s.click.aliexpress.com/e/_c4MWFcs7',
            },
            {
              id: 3,
              title: 'Dřevěný talíř',
              description: '',
              href: 'https://s.click.aliexpress.com/e/_c3X4LRzd',
            },
            {
              id: 4,
              title: 'Překapávač Warg Kofein',
              description: '',
              href: 'https://www.dpbolvw.net/click-101524204-12684494?url=https%3A%2F%2Fwww.4camping.cz%2Fp%2Fprekapavac-kavy-warg-kofein%2F%23cerna',
            },
            {
              id: 5,
              title: 'Benzínový vařič',
              description: '',
              href: 'https://s.click.aliexpress.com/e/_c4spvf5H',
            },
            {
              id: 6,
              title: 'Nerezová sklenička',
              description: '',
              href: 'https://www.tkqlhce.com/click-101524204-12684494?url=https%3A%2F%2Fwww.4camping.cz%2Fp%2Fsklenicka-gsi-outdoors-glacier-stainless-nesting-wine%2F%23stribrna',
            },
            {
              id: 7,
              title: 'Pánvička Primus',
              description: '',
              href: 'https://www.kqzyfj.com/click-101524204-12684494?url=https%3A%2F%2Fwww.4camping.cz%2Fp%2Fpanev-primus-litech-frying-pan-large%2F%23cerna',
            },
            {
              id: 8,
              title: 'Titanové nádobí',
              description: '',
              href: 'https://s.click.aliexpress.com/e/_DkIjgIr',
            },
            {
              id: 9,
              title: 'GSI Outdoors Infinity Backpacker Mug',
              description: '',
              href: 'https://www.jdoqocy.com/click-101524204-12684494?url=https%3A%2F%2Fwww.4camping.cz%2Fp%2Ftermohrnek-gsi-infinity-backpacker-mug%2F%23zelena',
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
              href: 'https://www.dpbolvw.net/click-101524204-12684494?url=https%3A%2F%2Fwww.4camping.cz%2Fp%2Fbatoh-osprey-kestrel-68%2F%23s-m-seda',
            },
            {
              id: 5,
              title: 'Batoh Osprey Kyte 58',
              description: '',
              href: 'https://www.dpbolvw.net/click-101524204-12684494?url=https%3A%2F%2Fwww.4camping.cz%2Fp%2Fdamsky-turisticky-batoh-osprey-kyte-58%2F%23m-l-cerna',
            },
            {
              id: 6,
              title: 'Teploměr',
              description: '',
              href: 'https://s.click.aliexpress.com/e/_c4UsiS33',
            },
            {
              id: 7,
              title: 'Lucerna',
              description: '',
              href: 'https://s.click.aliexpress.com/e/_c3XH3lJr',
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
              href: 'https://s.click.aliexpress.com/e/_c2IuBHzl',
            },
            {
              id: 4,
              title: 'Spacák Nikča',
              description: '',
              href: 'https://s.click.aliexpress.com/e/_c3yLyiW9',
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
              href: 'https://s.click.aliexpress.com/e/_c3gCn0J5',
            },
            {
              id: 8,
              title: 'Zateplení pod hamaku Aliexpress',
              description: '',
              href: 'https://s.click.aliexpress.com/e/_c4XLklnZ',
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