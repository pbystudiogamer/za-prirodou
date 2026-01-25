<template>
  <v-container class="container">
    <v-row justify="center" style="margin-bottom: 50px">
      <v-col cols="12">
        <h4 class="text-center">
          Trasy & Tipy
        </h4>
      </v-col>
    </v-row>

    <v-row justify="center" style="margin-bottom: 50px">
      <v-col cols="10" class="text-center">
        Objevte osvědčené trasy pro vandry a treky s podrobným popisem, mapou a hodnocením obtížnosti.<br>
        U každé najdete praktické rady, které vám pomohou naplánovat bezpečný a pohodlný pobyt v dané lokalitě.
      </v-col>
    </v-row>
    <v-row justify="center" style="margin-bottom: 50px">
      <v-col cols="10" class="text-center">
        <h5>Cílem je inspirovat k objevování přírody a sdílet praktické rady pro bezpečný a příjemný pobyt mimo civilizaci.</h5>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
          v-for="item in items"
          :key="item.id"
          cols="12"
          md="12"
          class="d-flex justify-center"
      >
        <TrekCard v-bind="item" />
      </v-col>
    </v-row>
    <v-row align="center" justify="end">
      <v-btn
          icon
          size="large"
          color="green-darken-2"
          class="help-fab"
          @click="helpDialog = true"
      >
        <v-icon size="32">mdi-help-circle</v-icon>
      </v-btn>
    </v-row>

    <v-dialog v-model="helpDialog" max-width="920">
      <HelpDialog v-model="helpDialog" />
    </v-dialog>

  </v-container>
</template>

<script>
import TrekCard from '@/components/TrekCard.vue'
import vysadek01_image from "@/assets/Vysadek01_Chriby.jpg";
import HelpDialog from "@/components/HelpDialog.vue";

export default {
  components: {
    HelpDialog,
    TrekCard,
  }, data () {
    return {
      helpDialog: false,
      items: [
        {
          id: 1,
          image: vysadek01_image,
          title: 'Chřiby',
          fullTitle: 'Dvoudenní zimní vandr po Chřibech',
          country: 'fi fi-cz',
          location: 'Česká Republika / Jižní Morava',
          description: 'Zimní přespání v Chřibech má svoje kouzlo – a taky svoje výzvy. Tenhle víkend ale ukázal, že když je krásná trasa a trochu dobrodružství, vznikne z toho zážitek, na který se jen tak nezapomíná.',
          basicInformation: '<strong>Zimní podmínky, které prověří</strong> <br>' +
              'Přes den příjemných –7 °C, v noci už ostřejších –12,4 °C. A do toho vítr, který nám věšení hamak rozhodně neusnadnil. Přesto všechno jsme nocování zvládli bez jediného problému. Zimní ticho, čistý vzduch a pocit, že máme les jen pro sebe, za to stály.\n',

          fullInformation: [
            {
              title: 'Trasa: klasika Chřibů, ale v zimním kabátě',
              description: 'Vyrazili jsme po nejznámější trase v oblasti – nenáročná na převýšení, ale bohatá na skalní útvary a krásná místa. Chřiby jsou v tomhle směru neuvěřitelně pestré a i po letech dokážou překvapit.' +
                  '<br><br><strong>Po cestě jsme míjeli:</strong> <br>',
              points: [
                '<b>Kozel</b>',
                '<b>Kazatelna</b>',
                '<b>Osvětimanské skály</b>',
                '<b>Skalky Trpasličí město</b>',
                '<b>Dvě hlavy</b>',
                '<b>Čertova skála</b>',
                '<b>Zikmundova skála</b>',
              ],
              footer: 'Každé z těchto míst má vlastní atmosféru – od vyhlídek přes úzké průchody až po bizarní skalní tvary, které vypadají jako z jiného světa.'
            },
            {
              title: 'Noc u Zikmundovy skály',
              description: 'Kousek od Zikmundovy skály jsme našli ideální místo na přespání. Natáhli jsme hamaky, rozdělali vaření a dopřáli si výborné jelítka, která v té zimě chutnala snad ještě líp než obvykle. ' +
                  'Ticho, hvězdy a jen občasné zapraskání větví – zimní noc v lese má svoje kouzlo.'
            },
            {
              title: 'Druhý den: historie i připomínka tragédie',
              description: 'Cestou zpět jsme se zastavili u <strong>místa letecké havárie</strong>, kde stojí pomník připomínající tragickou událost. Silné místo, které člověka na chvíli ztiší.\n' +
                  'Poté jsme pokračovali na <strong>Hradisko sv. Klimenta</strong>, jedno z nejvýznamnějších historických míst v Chřibech. Zasněžené hradiště, kaple, výhledy – ideální zakončení výpravy.'
            },
            {
              title: 'Shrnutí',
              description: 'Dva dny v Chřibech, minimum nastoupaných metrů, ale maximum zážitků. Zima dodala celé trase úplně jinou atmosféru a zimní přespání v hamace se povedlo na jedničku. ' +
                  'Chřiby opět ukázaly, proč se sem člověk tak rád vrací.'
            }
          ],
          chips: [
            { icon: 'mdi-walk', type: 'vzdalenost', text: '13,2 km' },
            { icon: 'mdi-arm-flex', type: 'obtiznost', text: 'Lehká' },
            { icon: 'mdi-arrow-top-right', type: 'nastoupano', text: '656 m' },
            { icon: 'mdi-elevation-rise', type: 'nejvyssi-bod', text: '544 m n.m.' },
            { icon: 'mdi-elevation-decline', type: 'nejnizsi-bod', text: '328 m n.m.' },
          ],
          videoLink: 'https://www.youtube.com/watch?v=UROjChE3rfg',
          videoTitle: 'Video z našeho výsadku',
          videoDescription: 'Přespání ve Chřibech poprvé v zimě :-) Nocování bylo bez problémů, jen věšet hamaky v -12 a s větrem, nic moc :-) Vše jsme ale zvládli a víkend si v této úžasné lokalitě moc užili ;-) '
        },
      ]
    }
  }
}

</script>

<style scoped>
.container {
  width: 80%;
}

.help-fab {
  position: fixed;
  right: 24px;
  bottom: 80px;
  z-index: 1000;
}
</style>