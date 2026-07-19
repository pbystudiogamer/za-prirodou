<template>
  <v-container class="container">
    <v-row justify="center" style="margin-bottom: 50px">
      <v-col cols="12">
        <h4 class="text-center">
          Kde všude jsme byli..
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
import vysadek07Image from "@/assets/vysadky/07-vysocina.jpg";
import vysadek08Image from "@/assets/vysadky/08-sulovske.jpg";
import vysadek09Image from "@/assets/vysadky/09-strazov.jpg";
import vysadek10Image from "@/assets/vysadky/10-oslavka.jpg";
import vysadek11Image from "@/assets/vysadky/11-luhacovice.jpg";
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
        {
          id: 1,
          image: vysadek07Image,
          title: 'Vandr přes prameny Svratky a Sázavy až na Tisůvku',
          fullTitle: 'Dokonalé lesní Burgry ve Žďárákách',
          country: 'fi fi-cz',
          location: 'Česká Republika / Vysočina',
          description: 'Na výlet do oblasti Žďárských vrchů jsme se s Nikčou vydali z obce Cikháj. Naším hlavním plánem pro tento víkend bylo najít a prozkoumat prameny dvou významných českých řek — Svratky a Sázavy.\n',
          basicInformation: '<strong>Počasí na výsadku</strong> <br>' +
              'Tento den bylo velmi přívětivě, teplota se pohybovala kolem 15 °C. V noci to kleslo na pohodových 8,4 °C. Bylo jasno s lehkým větříkem, což vytvořilo ideální podmínky pro putování zdejší krajinou.\n',

          fullInformation: [
            {
              title: 'Vrcholy a prameny, které stojí za to',
              description: 'Žďárské vrchy jsou charakteristické svými osmistovkami a hlubokými lesy. Mezi nejzajímavější body naší trasy patřil Šindelný vrch a především Tisůvka. Právě Tisůvka je parádní kus skály, na který se dá vylézt a který nabízí moc hezký výhled do okolí. Samotné prameny řek mají každý svou specifickou atmosféru – ten Sázavský nás svou podobou oslovil o něco více.\n' +
                  '<br><br><strong>Po cestě jsme míjeli:</strong> <br>',
              points: [
                '<b>Fryšavský kopec (803 m) s Patrizánským bunkrem</b>',
                '<b>Pramen Svratky</b>',
                '<b>NPR Žákova hora</b>',
                '<b>Šindelný vrch (806 m)</b>',
                '<b>Pramen Sázavy</b>',
                '<b>Tisůvka (800 m)</b>',

              ],
              footer: 'Míst, která stojí za návštěvu, je v této lokalitě nepřeberné množství.'
            },
            {
              title: 'Hamaky, testování výbavy a lesní burger',
              description: 'Cesta nebyla jen o kilometrech, ale i o zkoušení nových věcí. Přímo v korytě Svratky jsem otestoval voděodolné ponožky a po dosažení Šindelného vrchu jsme začali hledat místo pro bivak. Jakmile visely hamaky, přišla na řadu odměna v podobě Cideru a Nikčina vynikajícího lesního burgeru. Večer jsme si zpestřili střelbou z praku a pak už jen ulehli na kutě uprostřed tichého lesa.\n'
            },
            {
              title: 'Druhý den ve znamení pramenů a skal',
              description: 'Ráno po snídani jsme pokračovali k našemu druhému hlavnímu cíli — prameni Sázavy. Ten nás svou atmosférou nadchl dokonce o něco víc než ten předchozí. Cesta nás dále vedla přes nádherné hluboké lesy, které nás dovedly až k úpatí Tisůvky (800 m). Nikča po cestě stihla prověřit i jeden z místních posedů, než jsme se pustili do finálního stoupání. Výstup na samotný vrchol byl sice docela vyčerpávající, ale ten pocit, když stojíte na skále s parádním výhledem, za tu námahu rozhodně stál. Na úplný závěr jsme se ještě zastavili u Partyzánského památníku, což byla symbolická tečka za celým putováním.'
            },
            {
              title: 'Shrnutí',
              description: 'Tento dvoudenní vandr nás provedl nádhernými lesy a prověřil naši fyzičku hlavně při výstupu na Tisůvku, který byl sice vyčerpávající, ale výhled za tu námahu rozhodně stál. Celá trasa od Cikháje až k pramenům a památníkům nabízí krásné prostředí a kousek historie v podobě partyzánských úkrytů. Pokud hledáte klid a čistou přírodu Vysočiny, je tato oblast s přespáním pod širákem (nebo v hamace) sázkou na jistotu.'
            }
          ],
          chips: [
            { icon: 'mdi-walk', type: 'vzdalenost', text: '21,05 km' },
            { icon: 'mdi-arm-flex', type: 'obtiznost', text: 'Lehká' },
            { icon: 'mdi-arrow-top-right', type: 'nastoupano', text: '488 m' },
            { icon: 'mdi-elevation-rise', type: 'nejvyssi-bod', text: '818 m n.m.' },
            { icon: 'mdi-elevation-decline', type: 'nejnizsi-bod', text: '672 m n.m.' },
          ],
          videoSectionTitle: 'Video z výsadku',
          videoLinks: [ {
            href: 'https://www.youtube.com/watch?v=urYIE9_ezJo',
            title: 'Vandr přes prameny Svratky a Sázavy až na Tisůvku',
            description: 'Slunce, skály a krásné trasy — ideální jarní dobrodružství ve Žďárských vrších.\n '
          }
          ],
        },
        {
          id: 1,
          image: vysadek08Image,
          title: 'Súľovské skály',
          fullTitle: 'Svačina na vrcholu hradní věže',
          country: 'fi fi-sk',
          location: 'Slovenská Republika / Strážovské vrchy',
          description: 'Na výlet do slovenské Národní přírodní rezervace Súľovské skály jsme vyrazili z obce Hričovské Podhradie. Strážovské vrchy nás přivítaly fascinujícími skalními městy a dechberoucími výhledy, které patří k tomu nejlepšímu, co tato oblast nabízí.\n',
          basicInformation: '<strong>Počasí na výsadku</strong> <br>' +
              'Celý den nás provázelo parádní slunečné a teplé počasí. I když bylo horko a extrémní sucho, což nám trochu zkomplikovalo terén, dodalo slunce skalním útvarům tu správnou atmosféru. Den se v tomto směru povedl na jedničku.\n',

          fullInformation: [
            {
              title: 'Skalní brány a útvary, které stojí za to',
              description: 'Súľovské skály jsou doslova přeplněné přírodními unikáty. Hned na začátku nás ohromil 14 metrů vysoký Hlbocký vodopád. Mezi nejvýraznější body však patří Obrovská brána a ikonická Gotická brána. Tyto monumentální skalní útvary působí až nadpozemsky a jsou jasným důkazem síly přírody, která tyhle tvary po staletí formovala.\n' +
                  '<br><br><strong>Po cestě jsme míjeli:</strong> <br>',
              points: [
                '<b>Hlbocký vodopád (výška vodopádu 14 m)</b>',
                '<b>Obrovskou bránu</b>',
                '<b>Gotickou bránu</b>',
                '<b>Zříceninu hradu Súľov</b>',
                '<b>Štefánikovu vyhlídku</b>',
                '<b>Zříceninu Hričovského hradu</b>',
                '<b>Množství nepojmenovaných vyhlídek po hřebeni</b>',

              ],
              footer: 'Míst, která stojí za návštěvu, je v této lokalitě nepřeberné množství.'
            },
            {
              title: 'Výzvy na cestě a famózní výhledy',
              description: 'Trasa nebyla úplně zadarmo. Sestup od Obrovské brány byl kvůli prachu a suchu docela nebezpečný a kluzký, ale soustředěnost se vyplatila. Skutečnou odměnou však byla Štefánikova vyhlídka kus za Súľovem. Nikča tam nejdřív kvůli stoupání nechtěla, ale jakmile viděla fotky, neodolala – a nakonec byla stejně nadšená jako já. Výhled odtud je totiž naprosto famózní a řadím ho k vrcholům celého dne.\n'
            },
            {
              title: 'Historické zastávky na hřebeni',
              description: 'Kromě přírody jsme prozkoumali i stopy historie. Zřícenina hradu Súľov nám posloužila jako ideální místo pro svačinu; usadili jsme se na jedné z bývalých věží a užívali si panoráma okolní krajiny. Na závěr putování nás čekal Hričovský hrad. I když je momentálně v procesu oprav a lešení trochu kazí dojem z památky, výhledy z něj jsou stále úchvatné a tvoří důstojnou tečku za celým vandrem.'
            },
            {
              title: 'Shrnutí',
              description: 'Jeden den v Súľovských skalách, který byl nabitý zážitky od začátku až do konce. Je to lokalita pro všechny milovníky skal, hradů a panoramatických vyhlídek. I když vás občas čeká prudší stoupání nebo kluzký terén, každý metr cesty stojí za to. Pokud hledáte místo, kde se snoubí trocha dobrodružství s neuvěřitelnou estetickou krásou, slovenské Súľovky jsou jasnou volbou. Rozhodně doporučujeme neskončit jen u hradu, ale dojít až na Štefánikovu vyhlídku – neprohloupíte.'
            }
          ],
          chips: [
            { icon: 'mdi-walk', type: 'vzdalenost', text: '21,65 km' },
            { icon: 'mdi-arm-flex', type: 'obtiznost', text: 'Obtížná' },
            { icon: 'mdi-arrow-top-right', type: 'nastoupano', text: '1386 m' },
            { icon: 'mdi-elevation-rise', type: 'nejvyssi-bod', text: '741 m n.m.' },
            { icon: 'mdi-elevation-decline', type: 'nejnizsi-bod', text: '324 m n.m.' },
          ],
          videoSectionTitle: 'Video z výsadku',
          videoLinks: [ {
            href: 'https://www.youtube.com/watch?v=5SIbrpVDIMU',
            title: 'Súľovské skály / Svačina na vrcholu hradní věže',
            description: 'Vydali jsme se prozkoumat krásy slovenských Súľovských skal a byl to jeden z nejlepších výletů!\n '
          }
          ],
        },
        {
          id: 1,
          image: vysadek09Image,
          title: 'Na nejvyšší vrchol Strážovských vrchů',
          fullTitle: 'Přes Sokolie a vodopády až na vrchol',
          country: 'fi fi-sk',
          location: 'Slovenská Republika / Strážovské vrchy',
          description: 'Na výlet do slovenské Národní přírodní rezervace Strážov jsme vyrazili z malé vesničky Priedhorie. Strážovské vrchy nás přivítaly hlubokými lesy, skrytými jeskyněmi a dechberoucími výhledy, které patří k tomu nejlepšímu, co tato drsná horská oblast nabízí. \n',
          basicInformation: '<strong>Počasí na výsadku</strong> <br>' +
              'Celý den nás provázelo parádní slunečné počasí, které s sebou ale přineslo fascinující hru kontrastů. Zatímco dole v údolí bylo plné, sytě zelené jaro, se stoupající nadmořskou výškou se příroda teprve probouzela. Od půlky kopců už byly stromy zcela bez listí a nahoře na nás dýchal ještě počátek jara. Den se v tomto směru povedl na jedničku.\n',

          fullInformation: [
            {
              title: 'Ticho, slunce a prudká stoupání',
              description: 'NPR Strážov je doslova přeplněná přírodními unikáty. Hned na začátku nás ohromila kouzelná jeskyně Babirátka schovaná v lesním porostu. Mezi nejvýraznější body však patří Horný Strážovský vodopád a monumentální skalní masivy, které se tyčí po obou stranách cesty v závěru trasy za Červíkovou chatou. Tyto skalní útvary působí úchvatně a jsou jasným důkazem síly přírody.\n' +
                  '<br><br><strong>Po cestě jsme míjeli:</strong> <br>',
              points: [
                '<b>Jeskyni Babirátka</b>',
                '<b>Vrchol Sokolie (1032 m)</b>',
                '<b>Chatu Červíková (600 m)</b>',
                '<b>Horný Strážovský vodopád (863 m)</b>',
                '<b>Skalní vyhlídku nad vodopádem</b>',
                '<b>Pohádkovou horskou louku s výhledem na Tatry</b>',
                '<b>Vrchol Strážov (1213 m)</b>',

              ],
              footer: 'Míst, která stojí za návštěvu, je v této lokalitě nepřeberné množství.'
            },
            {
              title: 'Výzvy na cestě a famózní výhledy',
              description: 'Trasa nebyla úplně zadarmo. Hned na začátku jsme jako vždy lehce sešli z trasy a mimo značenou cestu se vydali doslova vzhůru k nebesům – jinak se toto strmé stoupání na Sokolie ani nazvat nedalo. Náročné bylo i prudké a klikaté klesání v suchém listí a prachu k chatě Červíková, kde se soustředěnost opravdu vyplatila. Skutečnou odměnou však byla horská louka těsně pod vrcholem Strážova. Výhled odtud až na zasněžené vrcholky vzdálených Tater je totiž naprosto famózní a řadím ho k vrcholům celého dne. Ideální místo pro relaxaci.\n'
            },
            {
              title: 'Historické a vrcholové zastávky na hřebeni',
              description: 'Kromě divoké přírody jsme zdolali i samotný vrchol Strážov (1213 m n. m.). Tento nejvyšší bod celého pohoří nám posloužil jako ideální místo pro svačinu; usadili jsme se nahoře a užívali si kruhové panoráma okolní krajiny. Na závěr putování nás čekal sestup kolem Strážovského potoka a již zmíněných monumentálních skal, které tvořily důstojnou a vizuálně nádhernou tečku za celým vandrem.'
            },
            {
              title: 'Shrnutí',
              description: 'Jeden den v NPR Strážov, který byl nabitý zážitky od začátku až do konce. Je to lokalita pro všechny milovníky jeskyní, divokých vodopádů a panoramatických vyhlídek. I když vás občas čeká prudší stoupání mimo značku nebo kluzký terén plný prachu, každý metr cesty stojí za to. Pokud hledáte místo, kde se snoubí trocha dobrodružství s neuvěřitelnou estetickou krásou, slovenské Strážovské vrchy jsou jasnou volbou. Rozhodně doporučujeme neskončit jen v údolí, ale vystoupat až na samotný vrchol Strážov – neprohloupíte.'
            }
          ],
          chips: [
            { icon: 'mdi-walk', type: 'vzdalenost', text: '19,01 km' },
            { icon: 'mdi-arm-flex', type: 'obtiznost', text: 'Náročná' },
            { icon: 'mdi-arrow-top-right', type: 'nastoupano', text: '1365 m' },
            { icon: 'mdi-elevation-rise', type: 'nejvyssi-bod', text: '1214 m n.m.' },
            { icon: 'mdi-elevation-decline', type: 'nejnizsi-bod', text: '415 m n.m.' },
          ],
          videoSectionTitle: 'Video z výsadku',
          videoLinks: [ {
            href: 'https://www.youtube.com/watch?v=eOF3ADgH8qc&t',
            title: 'Toulky Strážovskými vrchy',
            description: 'Přes Sokolie a vodopády až na vrchol\n '
          }
          ],
        },
        {
          id: 1,
          image: vysadek10Image,
          title: 'Divoká Oslava v 38 °C ☀️',
          fullTitle: 'Do NPR Divoká Oslava za extrémním letním žárem',
          country: 'fi fi-cz',
          location: 'Česká Republika / Vysočina',
          description: 'Na víkendový výsadek do hlubokého kaňonu řeky Oslavy jsme vyrazili z obce Sedlec. Vyhlídky na nekonečné obzory, divoká údolí a historické zříceniny nás přivítaly v plném letním proudu. NPR Divoká Oslava ukázala svou drsnou, ale nádhernou tvář, která prověřila naši připravenost na extrémní teploty. \n',
          basicInformation: '<strong>Počasí na výsadku</strong> <br>' +
              'Celý víkend nás provázelo neúprosné slunečné počasí a tropické teploty, které atakovaly hranici 38 stupňů ve stínu. Tento extrém zásadně ovlivnil celou naši taktiku – tentokrát jsme vůbec nevařili a vsadili na předem připravené zásoby z domova. Ani noční pokles teploty na 25 stupňů nám však nezabránil v tom, abychom se v srdci přírody skvěle vyspali a nabrali síly na další den.\n',

          fullInformation: [
            {
              title: 'Vyhlídky, vodopády a lovecký zámeček',
              description: 'Tato lokalita je doslova přeplněná přírodními a historickými unikáty. Hned po prvním kilometru nás okouzlilo rozcestí U Glorietu s dechberoucí Vyhlídkou na nekonečno, odkud se o kousek dál tyčí nádherný novogotický altán Gloriet z let 1829–1830. Výjimečným místem byly také Vodopády Na Kotlíku, které nám posloužily jako klíčový bod pro doplnění vody, a empirový lovecký zámeček na Vlčím kopci.\n' +
                  '<br><br><strong>Po cestě jsme míjeli:</strong> <br>',
              points: [
                '<b>Vyhlídku na nekonečno (420 m n. m.)</b>',
                '<b>Novogotický altán Gloriet (422 m n. m.)</b>',
                '<b>Skalní útvar Jinošovice s výhledem na Oslavku</b>',
                '<b>Vodopády Na Kotlíku – doplnění vody</b>',
                '<b>Lovecký zámeček Vlčí kopec (400 m n. m.)</b>',
                '<b>Senoradský mlýn (268 m n. m.)</b>',
                '<b>Vyhlídku nad rozcestím Pod Pastýřkou (339 m n. m.)</b>',
                '<b>Zříceninu hradu Lamberk (329 m n. m.)</b>',
                '<b>Zříceninu Sedleckého hradu se třemi kříži (352 m n. m.)</b>',

              ],
              footer: 'Míst, která stojí za návštěvu, je v této lokalitě nepřeberné množství.'
            },
            {
              title: 'Výzvy na trase a stíhací jízda kaňonem',
              description: 'Trasa v tomto horku nebyla vůbec zadarmo. První den končil stíhací jízdou až na mé oblíbené a pravidelně navštěvované místo na spaní, kterému říkám „Balkónek“. Druhý den ráno jsme po sbalení ležení doslova seběhli k Senoradskému mlýnu a podél toku řeky zahájili další rychlý přesun proti proudu po červené turistické značce skrz chatovou oblast a obávané „Údolí žízně“, kde nás naštěstí zachránily dvě funkční pumpy.\n'
            },
            {
              title: 'Historické zastávky a brodění divoké řeky',
              description: 'Kromě skalních vyhlídek a kamenných moří jsme objevovali i stopy historie. Monumentální zřícenina hradu Lamberk nám nabídla několik úchvatných výhledů do údolí. Odtud jsme sestoupili přímo k hladině Oslavky, kterou jsme bez větších obtíží přebrodili na druhý břeh. Kvůli spalujícímu žáru kolem 38 stupňů jsme sice vynechali samotnou prohlídku zříceniny Sedleckého hradu a prohlédli si jen jeho vztyčené tři kříže opředené pověstí, ale závěrečné „smrtelné“ stoupání zpět k Vyhlídce na nekonečno vytvořilo za celým vandrem opravdu důstojnou a fyzicky náročnou tečku.'
            },
            {
              title: 'Shrnutí',
              description: 'Víkendový výsadek v NPR Divoká Oslava byl nabitý zážitky od začátku až do konce. Je to lokalita pro všechny milovníky divokých říčních údolí, skalních vyhlídek a historie skryté v lesích. I když vás v létě prověří extrémní teploty, náročné profily tratě nebo strmá stoupání na závěr, každý metr cesty stojí za to. Pokud hledáte místo, kde se snoubí trocha dobrodružství s estetickou krásou moravské přírody, údolí Oslavy je jasnou volbou. Rozhodně doporučuji toto magické místo navštívit také na podzim, kdy celá rezervace hraje neuvěřitelnými barvami.'
            }
          ],
          chips: [
            { icon: 'mdi-walk', type: 'vzdalenost', text: '21,75 km' },
            { icon: 'mdi-arm-flex', type: 'obtiznost', text: 'lehká' },
            { icon: 'mdi-arrow-top-right', type: 'nastoupano', text: '536 m' },
            { icon: 'mdi-elevation-rise', type: 'nejvyssi-bod', text: '440 m n.m.' },
            { icon: 'mdi-elevation-decline', type: 'nejnizsi-bod', text: '280 m n.m.' },
          ],
          videoSectionTitle: 'Video z výsadku',
          videoLinks: [ {
            href: 'https://www.youtube.com/watch?v=Z52UZIqXp2g',
            title: 'Kolem Oslavky v extrémním horku',
            description: 'Závěrem přes Údolí velké žízně\n '
          }
          ],
        },
        {
          id: 1,
          image: vysadek11Image,
          title: 'Vizovická vrchovina',
          fullTitle: 'Spousta hezkých výhledů',
          country: 'fi fi-cz',
          location: 'Česká Republika / Valašsko',
          description: 'Na dvoudenní vandr do Vizovické vrchoviny jsme vyrazili z klidné obce Pozlovice. Kopce nad Luhačovicemi nás přivítaly nádhernou hřebenovou trasou, skrytými lesními zajímavostmi a dechberoucími výhledy, které patří k tomu nejlepšímu, co tato malebná moravská oblast nabízí.\n',
          basicInformation: '<strong>Počasí na výsadku</strong> <br>' +
              'Zpočátku nás provázelo velmi proměnlivé počasí a hned několikrát nám na chvíli lehce sprchlo. Nicméně ke konci prvního dne se mraky protrhaly a ukázalo se sluníčko, které s námi vydrželo až do samotného závěru dne druhého. Noc v hamakách byla svěží, teplota klesla na 13,4 stupně, ale v doprovodu intenzivního ptačího koncertu to byla naprostá pohoda.\n',

          fullInformation: [
            {
              title: 'Ticho, zpěv ptáků, slunce a výhledy do dálky',
              description: 'SVizovická vrchovina je doslova přeplněná kouzelnými místy. Hned první den nás díky skvělé viditelnosti ohromila spousta dalekých výhledů. Mezi nejvýraznější body patřil vrchol Komonec, kde jsme zkontrolovali tamní lesní bar a trochu se odreagovali na houpačce. Skutečným klenotem trasy je však vrchol Bába s posezením a ukrytou šachovnicí. Na závěr dne nás pak nadchla návštěva nedalekého skalního útvaru Mlčačky.\n' +
                  '<br><br><strong>Po cestě jsme míjeli:</strong> <br>',
              points: [
                '<b>Vrchol Komonec (672 m) s lesním barem a houpačkou</b>',
                '<b>Vrchol Bába (636 m) s lesním šachovým stolkem</b>',
                '<b>Skalní útvar Mlčačky (451 m)</b>',
                '<b>Zříceninu hradu Starý Světlov (605 m)</b>',
                '<b>Lesní studánku Sojsínka (535 m)</b>',
                '<b>Naučnou stezku Ekopark Starý Světlov</b>',
                '<b>Minerální pramen Studánka Sirčena (374 m)</b>',

              ],
              footer: 'Míst, která stojí za návštěvu, je v této lokalitě nepřeberné množství.'
            },
            {
              title: 'Výzvy na cestě a nečekané změny',
              description: 'Trasa nebyla úplně zadarmo a občas nás donutila improvizovat. Původně jsme plánovali přespat na stejném místě jako minulý rok, ale realita nás překvapila – prostor byl čerstvě vykácený a zem pokrytá hromadou větví. Museli jsme se proto posunout o kousek dál, kde jsme nakonec úspěšně natáhli hamaky a připravili zaslouženou večeři. Skutečnou odměnou za celodenní chůzi byl pak večerní relax v síti za neutichajícího zpěvu ptáků, což řadím k vrcholům celého dne.\n'
            },
            {
              title: 'Historické a zážitkové zastávky na hřebeni',
              description: 'Druhý den ráno jsme odstartovali kávou a snídaní šampionů, po které nás čekala cesta zpět přes zříceninu hradu Starý Světlov, která se postupně a velmi pěkně opravuje. Následný sestup dolů vedl kolem studánky Sojsínka až na luxusní naučnou stezku Ekopark Starý Světlov. Ta je plná originálních dřevěných figurek zvířat a herních prvků, takže ji vřele doporučujeme i rodinám s dětmi. Na úplný závěr putování jsme ochutnali minerální pramen Sirčena – jeho silně sirná voda je však zážitkem jen pro opravdu silné povahy.'
            },
            {
              title: 'Shrnutí',
              description: 'Víkend ve Vizovické vrchovině, který byl nabitý zážitky od začátku až do konce. Je to lokalita pro všechny milovníky dalekých výhledů, pohody v hamakách a čisté, klidné přírody. I když vás občas potká přeháňka nebo musíte narychlo měnit místo na spaní, každý metr cesty stojí za to. Pokud hledáte místo, kde se snoubí trocha dobrodružství s relaxací a zajímavými zastávkami, kopce nad Luhačovicemi jsou jasnou volbou. Rozhodně doporučujeme neskončit jen ve městě u kolonády, ale vystoupat na okolní hřebeny – neprohloupíte.'
            }
          ],
          chips: [
            { icon: 'mdi-walk', type: 'vzdalenost', text: '12,65 km' },
            { icon: 'mdi-arm-flex', type: 'obtiznost', text: 'Lehká' },
            { icon: 'mdi-arrow-top-right', type: 'nastoupano', text: '556 m' },
            { icon: 'mdi-elevation-rise', type: 'nejvyssi-bod', text: '680 m n.m.' },
            { icon: 'mdi-elevation-decline', type: 'nejnizsi-bod', text: '340 m n.m.' },
          ],
          videoSectionTitle: 'Video z výsadku',
          videoLinks: [ {
            href: 'https://www.youtube.com/watch?v=9zp-ScmExCM&t',
            title: 'Vandr nad Luhačovicemi: Od proměnlivého počasí 🌦️ až po luxusní Ekopark 🌳',
            description: 'Vyráželi jsme z Pozlovic po červené turistické značce směrem do kopců nad Luhačovicemi.☀️\n '
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