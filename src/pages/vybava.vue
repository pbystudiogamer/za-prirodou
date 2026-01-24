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
            v-for="item in items"
            :key="item.id"
            cols="12"
            md="4"
            class="d-flex justify-center"
        >
          <ItemCard v-bind="item" />
        </v-col>
      </v-row>
    </v-container>
</template>

<script >
import ItemCard from '@/components/ItemCard'
import lighter from '@/assets/lighter.jpg';
import fireplace from '@/assets/ohniste.jpg';
import plate from '@/assets/plate.jpg';

export default {
  components: {
    ItemCard,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          image: lighter,
          title: 'Zapalovač plynový Claw Gear Mk.II Storm - coyote',
          //location: 'U mě v kapse',
          description: 'Kvalitní kapesní zapalovač Storm MK.II od rakousko-švýcarské značky Claw Gear. Hořák je odolný proti větru, takže se ve zhoršených povětrnostních podmínkách nemusíte stresovat s neustále zhasínajícím plamenem. Kromě toho můžete plamen přesně nasměrovat tam, kde ho zrovna potřebujete. Výkon hořáku je nastavitelný až do 1300°C.',
          href: 'https://armik.cz/zapalovac-plynovy-claw-gear-mk-ii-storm-coyote/',
          /*chips: [
            { icon: 'mdi-walk', text: '216 km' },
            { icon: 'mdi-arm-flex', text: 'Schwer' },
            { icon: 'mdi-chart-line', text: '4.850 m' },
          ],*/
        },
        {
          id: 2,
          image: fireplace,
          title: 'Vyvýšené ohniště',
          //location: 'kdesi na aliexpress',
          description: 'Vysoce kvalitní vyvýšené ohniště pro každou příležitost. Dopřejte si s přáteli pohodu a klid...',
          href: 'https://www.aliexpress.com/item/1005005996690893.html',
          /*chips: [
            { icon: 'mdi-walk', text: '216 km' },
            { icon: 'mdi-arm-flex', text: 'Schwer' },
            { icon: 'mdi-chart-line', text: '4.850 m' },
          ],*/
        },
        {
          id: 3,
          image: plate,
          title: 'Dřevěný talíř',
          //location: 'Na dně mojeho batohu',
          description: 'Umělohmotný a přírodně zbarvený talíř, který udrží vaše jídlo na jednom místě.',
          href: 'https://bit.ly/3WRGM2I',
          /*chips: [
            { icon: 'mdi-walk', text: '216 km' }
          ],*/
        }
      ]
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>