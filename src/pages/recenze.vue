<template>
  <v-container style="margin-bottom: 40px">
    <v-row justify="center" style="margin-bottom: 50px">
      <v-col cols="12">
        <h4 class="text-center">
          Recenze
        </h4>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
          v-for="item in items"
          :key="item.id"
          cols="12"
          md="6"
          lg="6"
          xl="4"
          class="d-flex justify-center"
      >
        <HerbCard v-bind="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HerbCard from "@/components/HerbCard.vue";

export default {
  components: {
    HerbCard,
  },
  data() {
    return {
      items: [
        {
          title: 'Fenix HL45R ',
          latinTitle: '- praktický test v terénu',
          description: '',
          basicInformation: 'Čelovka <b>*Fenix HL45R*</b> patří mezi kompaktní, ale velmi výkonné modely s maximálním výkonem 1000 lumenů a možností plynulého zaostření světelného kuželu. V krátké recenzi a terénním testu ukazuji její reálné chování v přírodě, přepínání režimů, dosvit i práci s fokusem. Součástí je také zhodnocení ovládání, výdrže a celkové praktičnosti pro outdoor, bushcraft i běžné použití.',
          fullInformation: [],
          videoTitle: '*Podívejte se na kompletní video s recenzí a testem zde:*',
          videoLink: 'https://www.youtube.com/watch?v=o-6K6-LbOVQ',
        },
        {
          title: 'Prabos Striker Summer Mid ',
          latinTitle: '- Třísezónní taktika pro každý terén',
          description: '',
          basicInformation: 'Krátký terénní test bot Prabos Striker Summer Mid. Zaměřil jsem se na to, jak sedí na noze, jak se chovají při delším pohybu v přírodě a co zvládnou v náročnějším terénu. Boty jsou lehké, prodyšné, rychle schnou a díky kombinaci kůže a textilu drží tvar i při zátěži. Podešev má dobrou trakci na suchu i vlhku a celková konstrukce je dělaná tak, aby zvládla bushcraft, turistiku i každodenní nošení. Níže najdeš video s detaily konstrukce, reálným pohybem a mými dojmy z používání.',
          fullInformation: [],
          videoTitle: 'Prabos Striker / Třísezónní taktika pro každý terén',
          videoLink: 'https://www.youtube.com/watch?v=b9qVsvSxhvU',
        },
        {
          title: 'Vzduchovka Hatsan Invader ',
          latinTitle: '',
          description: '',
          basicInformation: 'Krátký test vzduchovky Hatsan Invader v terénu. Zaměřil jsem se na přesnost, ergonomii, chování při rychlé střelbě a celkový pocit z používání. Invader nabízí robustní konstrukci, vysoký výkon, pohodlné ovládání a možnost montáže příslušenství díky Picatinny lištám. Díky zásobníku a solidní stabilitě je vhodná pro rekreační střelbu, trénink i dynamické disciplíny. Níže najdeš video s reálnými ukázkami střelby, detaily konstrukce a mými dojmy z testování.',
          fullInformation: [],
          videoTitle: 'Recenze vzduchovky Hatsan Invader',
          videoLink: 'https://www.youtube.com/watch?v=o_oBdNlPRbM',
        },
        {
          title: 'Ruike F186',
          latinTitle: '',
          description: '',
          basicInformation: 'V tomto videu ti představím a otestuju nůž Ruike F186. Celkově je to spolehlivý nůž s kvalitní čepelí a ergonomickou rukojetí, což z něj dělá skvělou volbu pro každého, kdo hledá univerzální nástroj pro bushcraft a outdoor aktivity.',
          fullInformation: [],
          videoTitle: 'Recenze a test nože Ruike F186',
          videoLink: 'https://www.youtube.com/watch?v=dXAip-hoiQE',
        },
        {
          title: 'Titanová čutora',
          latinTitle: '',
          description: '',
          basicInformation: 'Krátký test titanové čutory SilverAnt v terénu. Zaměřil jsem se na její odolnost, praktičnost a chování při každodenním používání v přírodě. Čutora je extrémně lehká, nerozbitná, 100% titanová a díky zdravotně nezávadnému materiálu neovlivňuje chuť vody. Snadno se čistí, odolává korozi a díky širokému hrdlu se dobře plní i v přírodních podmínkách. Níže najdeš video s detaily konstrukce, reálným použitím a mými dojmy z testování.',
          fullInformation: [],
          videoTitle: 'Krátký test titanové čutory',
          videoLink: 'https://www.youtube.com/watch?v=S54KpBHcHPY&pp=2AYB',
        },
        {
          title: 'Voděodolné ponožky',
          latinTitle: '',
          description: '',
          basicInformation: 'Pokud hledáte spolehlivého parťáka do náročných outdoorových podmínek, nepromokavé ponožky Synaptic Wear jsou trefou do černého. Díky své unikátní třívrstvé konstrukci s prodyšnou membránou udrží vaše nohy v naprostém suchu, ať už chodíte v dešti, mokré trávě, nebo sněhu. Ponožky mají skvěle padnoucí střih do půli lýtek, který spolehlivě drží na svém místě a nikde nepříjemně netlačí ani po celém dni nošení. Velkým plus je efektivní odvod vlhkosti, takže i při aktivním pohybu zůstává chodidlo svěží a v teple. Pro mě osobně jde o naprostý gamechanger, který kompletně mění zážitek z pohybu v nepříznivém počasí a dává zapomenout na nepohodlí v promočených botách.\n' +
              '\n' +
              'Jak tyto ponožky obstály v reálném testu a jaké jsou mé bezprostřední dojmy, se můžete podívat v mém Youtube Short videu:',
          fullInformation: [],
          videoTitle: 'Voděodolné ponožky - Short recenze',
          videoLink: 'https://www.youtube.com/shorts/KYSo5eaWCXw',
        },
        {
          title: 'Bushcraft pila',
          latinTitle: '',
          description: '',
          basicInformation: 'V tomto videu uvidíte skládací rámovou pilku s názvem Outdoor hand Saw :-) Velmi užitečná to věc a za mě i dobře zkonstruovaná :-) Použití je snad na milion způsobů :-D',
          fullInformation: [],
          videoTitle: 'Bushcraft pila',
          videoLink: 'https://www.youtube.com/watch?v=ZXOWcHIvpiI',
        }
      ]
    }
  },
  created() {
    const modules = import.meta.glob("/src/assets/recenze/*.{jpg,jpeg,png,webp,avif}", {
      eager: true,
      import: "default",
    });

    const imgs = Object.entries(modules)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([, v]) => v);

    this.items = this.items.map((it, idx) => ({
      ...it,
      image: imgs[idx] ?? "",
    }));
  }
}
</script>

<style scoped>

</style>