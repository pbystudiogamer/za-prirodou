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
          md="6"
          lg="6"
          xl="4"
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
import vysadek01Image from "@/assets/vysadky/01-chriby.jpg";
import vysadek02Image from "@/assets/vysadky/02-hostynskeVrchy.jpg";
import vysadek03Image from "@/assets/vysadky/03-jeseniky.jpg";
import vysadek04Image from "@/assets/vysadky/04-jeseniky.jpg";
import HelpDialog from "@/components/HelpDialog.vue";
import HerbCard from "@/components/HerbCard.vue";

export default {
  components: {
    HerbCard,
    HelpDialog,
    TrekCard,
  }, data () {
    return {
      helpDialog: false,
      items: [
        {
          id: 1,
          image: vysadek01Image,
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
          videoSectionTitle: 'Videa z výsadku',
          videoLinks: [ {
            href: 'https://www.youtube.com/watch?v=UROjChE3rfg',
            title: 'Výsadek Chřiby',
            description: 'Přespání ve Chřibech poprvé v zimě :-) Nocování bylo bez problémů, jen věšet hamaky v -12 a s větrem, nic moc :-) Vše jsme ale zvládli a víkend si v této úžasné lokalitě moc užili ;-) '
          }],
        },
        {
          id: 1,
          image: vysadek02Image,
          title: 'Čundr po Hostýnských vrších',
          fullTitle: 'Čundr po Hostýnských vrších - dvoudenní dobrodružství plné výhledů, větru a pohody',
          country: 'fi fi-cz',
          location: 'Česká Republika / Severní Morava (Zlínský kraj)',
          description: 'Hostýnské vrchy a kombinace počínající syrové zimy, výhledů a večerního pohodlí v hamace vytvořila výlet, na který se jen tak nezapomíná.',
          basicInformation: 'Dva dny v Hostýnských vrších přinesly výšlap na Kelčský Javorník, dechberoucí výhledy a zaslouženou odměnu. Prošli jsme kouzelným úsekem Skaliska na Sochové a užili si klid přírody. Nechyběla ani sladká snídaně a pohodová atmosféra.',
          fullInformation: [
            {
              title: 'Začátek cesty',
              description: 'Vyrazili jsme na dvoudenní čundr do Hostýnských vrchů, kde nás čekala kombinace krásné přírody, historických míst a pořádné dávky pohybu. První den jsme se vydali na trasu, která nás zavedla k několika zajímavým lokalitám – navštívili jsme zříceninu hradu Nový Šaumburk (Zubříč), zříceninu hradu Šaumburk, partyzánský bunkr Humenec a skalní útvar Orlí hnízdo. Vrcholem dne byl výstup na rozhlednu Kelčský Javorník, kde nás přivítal silný vítr, ale výhledy z vrcholu stály za každou kapku potu. Celkem jsme nastoupali téměř 900 výškových metrů, což nám dalo pořádně zabrat – o to víc jsme si pak užili zaslouženou odměnu v podobě dobrého jídla a odpočinku.',
            },
            {
              title: 'Druhý den',
              description: 'Kousek od Zikmundovy skály jsme našli ideální místo na přespání. Natáhli jsme hamaky, rozdělali vaření a dopřáli si výborné jelítka, která v té zimě chutnala snad ještě líp než obvykle. ' +
                  'Ticho, hvězdy a jen občasné zapraskání větví – zimní noc v lese má svoje kouzlo.'
            },
            {
              title: 'Závěrem',
              description: 'Celý čundr byl plný krásných výhledů, podzimních barev, přírodních scenérií a historických památek. Dva dny v Hostýnských vrších nám nabídly nejen fyzickou aktivitu, ale i duševní relax v srdci moravské přírody. Pokud hledáte inspiraci na víkendový výlet, tenhle čundr rozhodně stojí za to!'
            }
          ],
          chips: [
            { icon: 'mdi-walk', type: 'vzdalenost', text: '20,6 km' },
            { icon: 'mdi-arm-flex', type: 'obtiznost', text: 'Střední' },
            { icon: 'mdi-arrow-top-right', type: 'nastoupano', text: '1152 m' },
            { icon: 'mdi-elevation-rise', type: 'nejvyssi-bod', text: '599 n.m.' },
            { icon: 'mdi-elevation-decline', type: 'nejnizsi-bod', text: '386 m n.m.' },
          ],
          videoSectionTitle: 'Videa z výsadku',
          videoLinks: [
            {
              href: 'https://www.youtube.com/watch?v=PN1BS-lc78A',
              title: 'Hostýnské vrchy - první část',
              description: 'Vyrazili jsme do Hostýnských vrchů a vyšlápli si na Kelčský Javorník – vítr nám dal zabrat, ale výhledy stály za to. Nastoupali jsme téměř 900 výškových metrů a po návratu si dopřáli zaslouženou odměnu. Byl to skvělý den plný pohybu, přírody a dobrého jídla!'
            },
            {
              href:'https://www.youtube.com/watch?v=i8K-x7m6EPc',
              title: 'Hostýnské vrchy - druhá část',
              description: 'Druhý den v Hostýnských vrších - ráno jsme odstartovali sladkou snídaní, která nám dodala energii na cestu zpět. Prošli jsme nádherným úsekem zvaným Skaliska na vrchu Sochová, kde nás okouzlilo kamenné schodiště. Den plný pohody, přírody a krásných výhledů.'
            }
          ],
        },
        {
          id: 1,
          image: vysadek03Image,
          title: 'Dva dny na hřebenech Jeseníků',
          fullTitle: 'Dva dny na hřebenech Jeseníků: Vozka, Keprník a Kamenné okno',
          country: 'fi fi-cz',
          location: 'Česká Republika / Severní Morava',
          description: 'Jeseníky přinesly atmosféru, která člověka úplně odřízne od světa pod mlhou. Putování nad inverzí, tiché hřebeny a silná místa v krajině vytvořily zážitek, který zůstane v hlavě ještě dlouho.',
          basicInformation: 'Dva dny strávené na vrcholcích Jeseníků nám nabídly dokonalé počasí i atmosféru, na kterou se nezapomíná. V údolích se válela hustá mlha, zatímco my jsme kráčeli vysoko nad ní a užívali si kouzlo horských panoramat. Byl to víkend plný klidu, výhledů a momentů, které stojí za to prožít.',
          fullInformation: [
            {
              title: 'První den cesty',
              description: 'První den se nesl ve znamení dlouhého stoupání až na Červenou horu (1333 m). Původně jsme mířili až na Vozku (1377 m), ale kvůli rychle se blížící tmě jsme nakonec zvolili nocleh kousek pod vrcholem. Po vydatné večeři jsme zalezli do spacáků a načerpali síly na další den.',
            },
            {
              title: 'Další den',
              description: 'Ráno nás přivítala mlha a obavy, že z výhledů nic nebude. Jakmile jsme ale vystoupali nad inverzi, otevřelo se před námi bílé moře mraků a dechberoucí scenérie. Parádní výhledy nás čekaly nejen na Vozce, ale i na Keprníku. Po hřebenovce jsme začali sestupovat a cestou ještě navštívili Přírodní rezervaci Šumárník a Bývalý zajatecký tábor Rudohoří s přilehlým hřbitovem – místo s velmi silnou atmosférou.'
            },
            {
              title: 'Navštívené oblasti',
              points: [
                '<b>CHKO Jeseníky</b>',
                '<b>Přírodní rezervace Filipovické louky</b>',
                '<b>Přírodní rezervace Sněžná kotlina</b>',
                '<b>Národní přírodní rezervace Šerák–Keprník</b>',
                '<b>Přírodní rezervace Šumárník</b>'
              ],
            }
          ],
          chips: [
            { icon: 'mdi-walk', type: 'vzdalenost', text: '21,6 km' },
            { icon: 'mdi-arm-flex', type: 'obtiznost', text: 'Střední' },
            { icon: 'mdi-arrow-top-right', type: 'nastoupano', text: '1077 m' },
            { icon: 'mdi-elevation-rise', type: 'nejvyssi-bod', text: '1427 n.m.' },
            { icon: 'mdi-elevation-decline', type: 'nejnizsi-bod', text: '643 m n.m.' },
          ],
          videoSectionTitle: 'Video z výsadku',
          videoLinks: [
            {
              href: 'https://www.youtube.com/watch?v=wFIJ8ILfjNk',
              title: 'Jeseníky nad mlhou ➠ Vozka, Keprník a Kamenné okno',
              description: 'Dva dny na vrcholcích Jeseníků – Vozka, Keprník a Kamenné okno nás přivítaly dokonalým počasím. V údolích se rozprostírala mlha, zatímco my jsme kráčeli nad její hladinou a objevovali kouzlo horských panoramat. Víkend plný krásných výhledů, klidu a nezapomenutelných okamžiků.'
            }
          ],
        },
        {
          id: 1,
          image: vysadek04Image,
          title: 'Přes Medvědí vrch',
          fullTitle: 'Dvoudenní zasněžený vandr po Jesenících',
          country: 'fi fi-cz',
          location: 'Česká Republika / Severní Morava',
          description: 'Víkend v Jeseníkách jak z pohádky.\n' +
              'Déšť vystřídalo tiché sněžení a krajina kolem Medvědího vrchu se během chvíle proměnila v zimní kouzlo. Výhledů moc nebylo, ale ta atmosféra stála za každý krok. ❄️🌲\n',
          basicInformation: '<strong>Počasí na výsadku</strong> <br>' +
              'Přes den příjemných kolem 0 °C, v noci trošku kleslo na –0,6 °C a tato teplota se držela přes i přes druhý den. První den nepočítám, to nám v nižších polohách pršelo, ale jakmile jsme se vyhoupli o trošku výše, tak začalo to pravé zimní počasí se sněžením, které zůstalo až po sestoupání zpět k autu, kde začalo opět poprchat.\n',

          fullInformation: [
            {
              title: 'Putování kolem Medvědího vrchu: zříceniny, skalní vyhlídky a tiché jesenické lesy',
              description: 'Výpravu jsme odstartovali v horské vesničce Bílý Potok, odkud se stezka stáčí do tichých jesenických lesů. První zastávkou byla zřícenina hradu Rabenštejn, dnes už jen skrytý fragment historie, který působí skoro až tajemně mezi hustými stromy.\n' +
                  'Pokračovali jsme k Kamzičí skále, výraznému skalnímu útvaru s křížem a krásnou atmosférou horské samoty. Odtud už trasa začala nabírat výšku směrem k hlavnímu vrcholu dne — Medvědímu vrchu (1216 m).\n' +
                  'Z Medvědího vrchu jsme se přesunuli k Janovým skalám (1075 m), kde jsme zakončili první den. Skalní bloky, ticho lesa a minimum lidí vytvořily ideální místo k přespání. Večer měl přesně tu jesenickou atmosféru, kterou člověk hledá — klid, chladný vzduch a pocit, že jste daleko od všeho.\n' +
                  '<br><br><strong>Po cestě jsme po oba dny navštívili tyto lokality:</strong> <br>',
              points: [
                '<b>Zřícenina hradu Rabenštejn</b>',
                '<b>Kamzičí skála (901 m)</b>',
                '<b>Medvědí vrch (1216 m)</b>',
                '<b>Janovy skály (1075 m)</b>',
                '<b>Studánka u Pytláka</b>',
                '<b>Jánská chata</b>',
                '<b>Pytlák (1040 m)</b>',
              ],
              footer: 'Určitě velmi zajímavá místa, která stojí za návštěvu..musí na nich být i nádherný výhled, který jsme bohužel kvůli mlze neměli.'
            },
            {
              title: 'Noc u Janových skál',
              description: 'Zadní část Janových skal je hezky schovaná od cesty a je super pro přespání a to jak na zemi, tak i v hamakách, které jsme měli jak již obligátně i my. Na večeři jsme měli Nikčino výborné curry a po vydatné večeři a chvilce u ohně jsme se vydali spát.'
            },
            {
              title: 'Druhý den: Studánka u Pytláka, Pytlák a návrat do Bílého Potoka',
              description: 'Ráno jsme se probudili u Janových skal a pokračovali dál po hřebeni. Cestou nás čekala Studánka u Pytláka, příjemné místo na doplnění vody a krátký odpočinek. O kousek dál leží i samotný Pytlák (1040 m), nenápadný vrchol, který ale hezky uzavírá celou trasu.  ' +
                  'Sestup zpět do Bílého Potoka už byl klidnější, vedený převážně lesem a ideální na to, aby si člověk v hlavě srovnal všechny dojmy z dvoudenního putování. Nicméně závěrečné klesání nám v nižších polohách urychlil mírný deštík'
            },
            {
              title: 'Shrnutí',
              description: 'Celý okruh nabízí kombinaci historie, skalních útvarů, horských lesů a míst, kde panuje opravdové ticho. Přesně ten typ trasy, kde nejde o davy turistů, ale o atmosféru a kontakt s přírodou.'
            }
          ],
          chips: [
            { icon: 'mdi-walk', type: 'vzdalenost', text: '16,7 km' },
            { icon: 'mdi-arm-flex', type: 'obtiznost', text: 'Střední' },
            { icon: 'mdi-arrow-top-right', type: 'nastoupano', text: '766 m' },
            { icon: 'mdi-elevation-rise', type: 'nejvyssi-bod', text: '1218 m n.m.' },
            { icon: 'mdi-elevation-decline', type: 'nejnizsi-bod', text: '602 m n.m.' },
          ],
          videoSectionTitle: 'Videa z výsadku',
          videoLinks: [ {
            href: 'https://www.youtube.com/watch?v=T1tEuRyBE6c&t',
            title: 'Výsadek Chřiby',
            description: 'Přespání ve Chřibech poprvé v zimě :-) Nocování bylo bez problémů, jen věšet hamaky v -12 a s větrem, nic moc :-) Vše jsme ale zvládli a víkend si v této úžasné lokalitě moc užili ;-) '
          }],
        },
      ]
    }
  }
}

</script>

<style scoped>
.container {
  width: 100%;
  margin-bottom: 40px;
}

.help-fab {
  position: fixed;
  right: 24px;
  bottom: 80px;
  z-index: 1000;
}
</style>