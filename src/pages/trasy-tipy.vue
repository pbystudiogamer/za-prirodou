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
import vysadek05Image from "@/assets/vysadky/05-MaleKarpaty.jpg";
import vysadek06Image from "@/assets/vysadky/06-CK.jpg";
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
          videoSectionTitle: 'Video z výsadku',
          videoLinks: [ {
            href: 'https://www.youtube.com/watch?v=T1tEuRyBE6c&t',
            title: 'Putování Jeseníky',
            description: 'Dvoudenní zimní čundr kolem Medvědího vrchu nás provedl zříceninou, skalami, vlčími stopami a hustou mlhou, která zakryla všechny výhledy. Přespali jsme u Janových skal, kde Nikča pod převisem uvařila své legendární curry, a cestou jsme objevili i tajnou vyhlídku u Pytláka – i když opět bez výhledu. Přes 16 kilometrů v dešti, sněhu a tichém sněžení nabídlo syrové, ale krásné zimní dobrodružství ;-) '
          }
         ],                              
        },
        {
          id: 1,
          image: vysadek05Image,
          title: 'Trek přes Malé Karpaty',
          fullTitle: 'Dvoudenní trek přes Malé Karpaty',
          country: 'fi fi-sk',
          location: 'Slovenská Republika / Západní Slovensko',
          description: 'Malé Karpaty jsou ideální volbou pro každého, kdo touží po pohodovém, ale zároveň dobrodružném víkendovém vandru. My jsme se s Nikčou vydali na dvoudenní přechod, který spojil krásu hlubokých žlebů, vyhlídek, hradních zřícenin i jarního lesa. A výsledek? Trasa, na kterou budeme ještě dlouho vzpomínat.\n',
          basicInformation: '<strong>Počasí na výsadku</strong> <br>' +
              'Přes den příjemných 14 °C, ideální na pohodový pochod bez zbytečného pocení. V noci teplota klesla na 5,2 °C, což je na jarní přespání tak akorát — ani zima, ani přehnané teplo. Celý víkend provázelo jasno - krásné světlo, které zvýrazňovalo barvy lesa i skal.\n',

          fullInformation: [
            {
              title: 'Putování Malými Karpaty: žleby, vyhlídky, zříceniny a jarní atmosféra',
              description: 'Výpravu jsme odstartovali u vodní nádrže Buková, odkud se stezka stáčí do Přírodní památky Čertov žľab. Hluboký kaňon s typickou syrovou atmosférou nás hned vtáhl do karpatské divočiny. Další zastávkou byla NPR Hlboča se známým Hlbočianským vodopádem. Ať už padá plnou silou, nebo jen jemně prosakuje, vždycky má své kouzlo. Odtud se trasa začala zvedat a nabídla sérii krásných vyhlídek směrem k Molpíru. Na Molpíru nás čekala ikonická houpačka s výhledem na Smolenice — místo, kde se člověk rád zdrží o pár minut déle. Poté následoval seběh serpentinkami ke Smolenickému zámku, který působil skoro pohádkově. Odtud ale přišla i největší výzva dne — prudký výstup na Havraní skálu. Těžký batoh a pozdní odpoledne umí potrápit, ale výhledy nahoře stály za každý krok.\n' +
                  '<br><br><strong>Po cestě jsme po oba dny navštívili tyto lokality:</strong> <br>',
              points: [
                '<b>CHKO Malé Karpaty</b>',
                '<b>NPR Záruby</b>',
                '<b>Přírodní památka Čertov žľab</b>',
                '<b>NPR Hlboča</b>',
                '<b>Vrchol Zároby (767 m)</b>',
                '<b>Zřícenina Ostrý Kameň</b>',
                
              ],
              footer: 'Určitě velmi zajímavá místa, která stojí za návštěvu.'
            },
            {
              title: 'Noc pod Havranicou',
              description: 'Najít místo na spaní tentokrát nebylo jednoduché. Terén byl strmý, kamenitý nebo prostě nepoužitelný. Nakonec jsme objevili krásné místo kousek pod Havranicou, kde jsme postavili nocleh.\n' +
                  'Večeře byla jednoduchá, ale perfektní — vajíčka se slaninou, parenicou a čerstvě nasbíraným medvědím česnekem. V lese chutná všechno lépe. Po jídle už jen ticho jarního lesa a zasloužený odpočinek.\n'
            },
            {
              title: 'Druhý den: Havranica, hřebenovka a nejvyšší bod Malých Karpat',
              description: 'Ráno jsme si vyšlápli na vrchol Havranica a pokračovali po hřebeni směrem k Zárubám — nejvyššímu bodu Malých Karpat. Vrchol je hezký, ale shodli jsme se, že některé předchozí vyhlídky nabídly ještě lepší panoramata. I tak ale dodal energii na další postup. Z hřebene jsme pak klesli ke zřícenině Ostrý Kameň, která nás překvapila svou velikostí i atmosférou. Ideální místo na krátkou pauzu. Odtud už následoval závěrečný sestup zpět k vodní nádrži Buková.'
            },
            {
              title: 'Shrnutí',
              description: 'Celý okruh nabízí kombinaci žlebů, vyhlídek, hřebenových úseků, zřícenin a míst, kde panuje opravdové ticho. Přesně ten typ trasy, kde nejde o davy turistů, ale o atmosféru, klid a kontakt s přírodou. Jarní Malé Karpaty mají své kouzlo — a tenhle přechod ho ukázal naplno.'
            }
          ],
          chips: [
            { icon: 'mdi-walk', type: 'vzdalenost', text: '19,5 km' },
            { icon: 'mdi-arm-flex', type: 'obtiznost', text: 'Střední' },
            { icon: 'mdi-arrow-top-right', type: 'nastoupano', text: '1121 m' },
            { icon: 'mdi-elevation-rise', type: 'nejvyssi-bod', text: '771 m n.m.' },
            { icon: 'mdi-elevation-decline', type: 'nejnizsi-bod', text: '272 m n.m.' },
          ],
          videoSectionTitle: 'Video z výsadku',
          videoLinks: [ {
            href: 'https://www.youtube.com/watch?v=zcp_zfWj6lU',
            title: 'Výsadek Malé Karpaty',
            description: 'Vyrazili jsme na víkendový přechod Malých Karpat – od Čertova žlebu přes Molpír, Smolenice a Havraní skálu až po Záruby a Ostrý Kameň. Čekaly nás strmé výstupy, nádherné vyhlídky i klidný jarní les. Dva dny v divočině plné dobrodružství a atmosféry, kterou stojí za to zažít ;-) '
          }
         ],
        },
        {
          id: 1,
          image: vysadek06Image,
          title: 'Česká Kanada s přespáním v bunkru',
          fullTitle: 'Dvoudenní trek Českou Kanadou',
          country: 'fi fi-cz',
          location: 'Česká Republika / Jižní Čechy',
          description: 'Na výlet do Přírodního parku Česká Kanada jsme se s Nikčou vydali od Valtínovského mlýna. Odtud je to jen kousek k jednomu z nejnavštěvovanějších míst celé oblasti — Rozhledně U Jakuba (33,7 m). Skvělé místo pro rodiny s dětmi, krásné výhledy a příjemné okolí.\n',
          basicInformation: '<strong>Počasí na výsadku</strong> <br>' +
              'Přes den kolem 12 °C, občas mrholení, vítr a jen sem tam vykouklo sluníčko. Typická nálada České Kanady, která ale místům dodává zvláštní kouzlo. V noci v bunkru se teplota ustálila na příjemných 12 °C.\n',

          fullInformation: [
            {
              title: 'Žulové útvary, které stojí za to',
              description: 'Česká Kanada je doslova posetá balvany. Ďáblova prdel, Ďáblův chléb i Filipovy kameny či vrchol Skalka patří mezi nejzajímavější. Tajuplné tvary, rozházené balvany a krajina, která nutí přemýšlet, jak tohle všechno vzniklo. Nikča si k tomu později vytvořila vlastní teorii – zazní ve videu.\n' +
                  '<br><br><strong>Po cestě jsme míjeli:</strong> <br>',
              points: [
                '<b>Kaskádu rybníků</b>',
                '<b>Ďáblovu prdel</b>',
                '<b>Ďáblův chléb</b>',
                '<b>Vrchol Skalka (681 m)</b>',
                '<b>Filipovy kameny</b>',
                '<b>Rozhledna U Jakuba</b>',

              ],
              footer: 'Míst, která stojí za návštěvu, je v této lokalitě nepřeberné množství.'
            },
            {
              title: 'Výhledy, louky a kouzelná atmosféra',
              description: 'Cesta k Radíkovu byla jedním z nejhezčích úseků. Lesní louky, shluky stromů a dramatické mraky vytvořily skoro pohádkovou atmosféru. Na Skalce jsme vytáhli dron a pořídili pár pěkných záběrů.\n'
            },
            {
              title: 'Překvapení na závěr: noc v bunkru',
              description: 'Po návratu k Parkovišti U Jakuba nás čekalo překvapení – Nikča až do poslední chvíle netušila, kam jedeme. A už vůbec nečekala, že přespíme v bunkru.\n' +
                  '\n' +
                  'Náš nocleh byl v bunkru Jemnice/14/A 110 u Županovic. Uvnitř krásně zařízený prostor s krbovými kamny, venku posezení a ohniště. Nechyběla ani kadibudka s osvěžovačem vzduchu. Večer jsme si opekli klobásky, zatopili a šli spát. Teplota uvnitř se vyšplhala až na 26 °C, i když jsme skoro nepřikládali.\n' +
                  '\n' +
                  'Ráno jsme si dali snídani – kafčo a Nikčin velikonoční mazanec – a vyrazili domů.'
            },
            {
              title: 'Shrnutí',
              description: 'Dva dny v České Kanadě, minimum náročných úseků, ale maximum zážitků. Tahle oblast je ideální pro rodiny i pohodové výlety, jen je potřeba počítat s delšími přesuny mezi zajímavostmi. A noc v bunkru? Jednoznačně doporučujeme. Česká Kanada má svoje kouzlo – ať je zataženo, mrholí nebo fouká vítr. Tenhle výlet ukázal, že když je dobrá trasa, krásná příroda a trochu dobrodružství, vznikne z toho zážitek, na který se nezapomíná.'
            }
          ],
          chips: [
            { icon: 'mdi-walk', type: 'vzdalenost', text: '20,9 km' },
            { icon: 'mdi-arm-flex', type: 'obtiznost', text: 'Lehká' },
            { icon: 'mdi-arrow-top-right', type: 'nastoupano', text: '548 m' },
            { icon: 'mdi-elevation-rise', type: 'nejvyssi-bod', text: '711 m n.m.' },
            { icon: 'mdi-elevation-decline', type: 'nejnizsi-bod', text: '588 m n.m.' },
          ],
          videoSectionTitle: 'Video z výsadku',
          videoLinks: [ {
            href: 'https://www.youtube.com/watch?v=eYPUd8r1Xc4',
            title: 'Výsadek Česká Kanada + Bunkr',
            description: 'Putování Českou Kanadou nás provedlo přes rozhledny, tajuplné žulové balvany, rybníky i kouzelné lesní louky, a nakonec skončilo překvapením v podobě noci v bunkru. I přes zatažené počasí mělo celé dobrodružství parádní atmosféru a ukázalo, jak krásná a rozmanitá tato oblast je. Pokud hledáte nenáročný, ale zážitkový výlet, Česká Kanada vás nezklame. '
          }
          ],
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