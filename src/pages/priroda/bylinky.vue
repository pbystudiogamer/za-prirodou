<template>
  <v-container>
    <v-row >
      <v-col cols="12" class="d-flex justify-end">
        <v-btn variant="text" @click="GoBack" class="button-back">
          ← Zpět
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center" style="margin-bottom: 50px">
      <v-col cols="12">
        <h4 class="text-center">Bylinky</h4>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col
          v-for="item in items"
          :key="item.title"
          cols="12"
          md="6"
          class="d-flex justify-center"
      >
        <HerbCard v-bind="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HerbCard from "@/components/HerbCard.vue";
import jaternikImage from "@/assets/rostliny/01-jaternik.jpg";
import habrImage from "@/assets/rostliny/02-habr.jpg";
import kridlatkaImage from "@/assets/rostliny/03-kridlatka.jpg";
import akatImage from "@/assets/rostliny/04-akat.jpg";
import kycelniceImage from "@/assets/rostliny/05-kycelnice.jpg";

export default {
  components: { HerbCard },
  data() {
    return {
      items: [
        {
          image: jaternikImage,
          title: "Jaterník trojlaločný",
          latinTitle: "(Hepatica nobilis)",
          description: "Jemná lesní trvalka, která vítá jaro jako jedna z prvních.",
          basicInformation:
              "<ul>" +
              "<li><b>Latinský název:</b> Hepatica nobilis</li>" +
              "<li><b>Čeleď:</b> pryskyřníkovité (Ranunculaceae)</li>" +
              "<li><b>Synonyma:</b> Hepatica triloba, Anemone hepatica</li>" +
              "<li><b>České názvy:</b> jaterník trojlaločný, jaterník podléška</li>" +
              "</ul> <br>" +
              "<p>Jaterník je <b>vytrvalá nízká bylina<b>, která roste v listnatých lesích mírného pásma Evropy. V Česku je poměrně hojný, ale ve východní části Moravy je vzácnější.</p>",
          fullInformation: [
            {
              title: "Jak rostlina vypadá",
              points: [
                "<b>Listy</b> jsou kožovité, tmavě zelené a typicky <b>trojlaločné</b> — jejich tvar připomíná lidská játra.",
                "<b>Květy</b> se objevují velmi brzy na jaře, nejčastěji <b>modré</b>, mohou být i <b>bílé</b> nebo <b>růžové</b>.",
                "Dorůstá výšky kolem <b>10–15 cm</b>.",
              ],
            },
          ],
          videoTitle: "Video s povídáním",
          videoLink: "https://www.youtube.com/watch?v=wF0udsoPKWk",
        },
        {
          image: habrImage,
          title: "Habr obecný",
          latinTitle: "(Carpinus betulus)",
          description: "Statný a odolný strom našich lesů, ceněný pro tvrdé dřevo a schopnost vytvářet husté, přirozené porosty.",
          basicInformation:
          "<strong>Taxonomie</strong><br>"+
              "<ul>" +
              "<li><b>Říše:</b> Plantae</li>" +
              "<li><b>Třída:</b> Magnoliopsida</li>" +
              "<li><b>Řád:</b> Fagales</li>" +
              "<li><b>Čeleď:</b> Betulaceae (břízovité)</li>" +
              "<li><b>Rod:</b> Carpinus</li>" +
              "<li><b>Druh:</b> Carpinus betulus</li>" +
              "</ul> <br>",
          fullInformation: [
            {
              title: "",
              points: [
                "Habr obecný je jednou z nejvýznamnějších listnatých dřevin střední Evropy. V české krajině se vyskytuje přirozeně a díky své odolnosti i estetickým vlastnostem se stal oblíbeným stromem v zahradní architektuře. Tato práce shrnuje jeho základní botanické vlastnosti, ekologický význam, zajímavosti, léčivé účinky a využití dřeva.",
                "Habr patří do čeledi břízovitých (Betulaceae). Dorůstá výšky 10–25 metrů a je typický svým nepravidelným, často „svalovitým“ kmenem. Kůra je šedá a hladká, listy vejčité, dvakrát pilovité, na podzim žloutnou. Květy tvoří nenápadné jehnědy a plodem je nažka s trojlaločným listenem. Strom dobře snáší zastínění, různé typy půd i městské prostředí, což z něj činí velmi adaptabilní druh.",
                "Z ekologického hlediska má habr významnou roli. Poskytuje úkryt ptákům, stabilizuje půdu a jeho listí se rozkládá pomaleji, čímž obohacuje lesní humus. Přirozeně se vyskytuje v habrových doubravách, které patří mezi cenné lesní ekosystémy. V zahradnictví je ceněn pro schopnost udržet suché listy přes zimu, díky čemuž vytváří husté a neprůhledné živé ploty. Snáší pravidelný řez a lze jej tvarovat do stěn, alejí či geometrických forem.",
                "Ačkoli habr není typickou léčivou rostlinou, v tradiční medicíně se využívají jeho mladé listy a pupeny. Čaj z listů se používal při zánětech dýchacích cest, kašli a k podpoře regenerace sliznic. V gemmoterapii (léčbě pupeny) se výtažky z habru doporučují při chronických rýmách, sinusitidách, oslabené imunitě a únavě. Účinky jsou mírné, ale tradičně ceněné.",
                "Dřevo habru je jedním z nejtvrdších v Evropě, často označované jako „železné dřevo“. Je velmi husté, těžké, jemné struktury a odolné proti oděru. Špatně se štípe, ale výborně se soustruží. V minulosti se používalo na výrobu ozubených kol, kladiv, kolovratů či nástrojů, které musely snášet vysoké namáhání. Dnes se z něj vyrábějí hudební nástroje, rukojeti, kuchyňské potřeby nebo kvalitní parkety.",
                "Habr obecný je tedy dřevina s významem ekologickým, kulturním i praktickým. Jeho odolnost, tvrdé dřevo a estetické vlastnosti z něj činí důležitou součást české přírody i zahradní tvorby. Přestože jeho léčivé účinky nejsou zásadní, doplňují celkový obraz stromu, který je pevně zakořeněn v evropské krajině i tradici."
              ],
            },
          ],
          videoTitle: "Odkaz na video",
          videoLink: "https://www.youtube.com/watch?v=Ax7kksu3Ddk\n",
        },
        {
          image: kridlatkaImage,
          title: "Křídlatka japonská",
          latinTitle: "(Reynoutria japonica)",
          description: "Statný a odolný strom našich lesů, ceněný pro tvrdé dřevo a schopnost vytvářet husté, přirozené porosty.",
          basicInformation:
              "<strong>Taxonomie</strong><br>"+
              "<ul>" +
              "<li><b>Říše:</b> Plantae</li>" +
              "<li><b>Třída:</b> Magnoliopsida</li>" +
              "<li><b>Řád:</b> Caryophyllales</li>" +
              "<li><b>Čeleď:</b> Polygonaceae (rdesnovité)</li>" +
              "<li><b>Rod:</b> Reynoutria / Fallopia</li>" +
              "<li><b>Druh:</b> Reynoutria japonica (syn. Fallopia japonica)</li>" +
              "</ul> <br>",
          fullInformation: [
            {
              title: "",
              points: [
                "Křídlatka japonská je jednou z nejinvazivnějších rostlin současné Evropy. Do české krajiny byla zavlečena v 19. století jako okrasná a půdopevná rostlina, avšak díky své mimořádné vitalitě a schopnosti rychle se šířit se stala vážným ekologickým problémem. Tato práce shrnuje její základní botanické vlastnosti, ekologické dopady, zajímavosti, léčivé účinky i možnosti využití.",
                "Křídlatka patří do čeledi rdesnovitých (Polygonaceae). Dorůstá výšky 2–3 metrů a vytváří husté porosty z dutých, bambusovitých lodyh. Listy jsou široce vejčité, s rovnou bází a špičatým zakončením. Květy jsou drobné, bělavé, uspořádané v latách a objevují se koncem léta. Rostlina se šíří především vegetativně – i malý úlomek oddenku dokáže vytvořit novou rostlinu. Díky hlubokému a rozsáhlému kořenovému systému je extrémně odolná vůči mechanickému poškození i nepříznivým podmínkám.",
                "Z ekologického hlediska má křídlatka výrazně negativní vliv. Vytváří monokulturní porosty, které potlačují původní druhy rostlin a snižují biodiverzitu. Její husté stonky brání přístupu světla k půdě a mění mikroklima stanoviště. Na březích toků může narušovat stabilitu půdy, protože na zimu zcela zasychá a nezpevňuje břehy kořenovým systémem tak účinně jako původní vegetace. Regulace křídlatky je náročná a vyžaduje dlouhodobé a kombinované postupy.",
                "Ačkoli je křídlatka vnímána především jako invazní plevel, má i své zajímavé vlastnosti. V tradiční asijské medicíně se využívají její oddenky, které obsahují resveratrol a další bioaktivní látky. Výtažky se používají při zánětech, kožních problémech či k podpoře imunity. Účinky jsou mírné, ale dobře zdokumentované. Mladé výhonky jsou jedlé a chutí připomínají rebarboru, a proto se někdy využívají v kuchyni.",
                "Dřevo křídlatky jako takové nemá význam, protože jde o bylinu s dutými lodyhami. Přesto má rostlina praktické využití – může sloužit jako zdroj biomasy, medonosná rostlina nebo surovina pro výrobu přírodních extraktů. V zahradní tvorbě se dnes již nepoužívá, ale její rychlý růst byl dříve ceněn při zakládání živých bariér či stabilizaci svahů.",
                "Křídlatka japonská je tedy rostlina s výrazným ekologickým dopadem, ale zároveň s určitými léčivými a praktickými možnostmi využití. Její schopnost rychle se šířit z ní činí nebezpečného invazního nepřítele, který vyžaduje pozornost a aktivní management. Zároveň však představuje zajímavý příklad rostliny, jejíž vlastnosti mohou být v jiném kontextu užitečné."
              ],
            },
          ],
          videoTitle: "Odkaz na video",
          videoLink: "https://www.youtube.com/watch?v=62lCDomGhK4\n",
        },
        {
          image: akatImage,
          title: "Trnovník akát",
          latinTitle: "(Robinia pseudoacacia)",
          description: "Statný a odolný strom našich lesů, ceněný pro tvrdé dřevo a schopnost vytvářet husté, přirozené porosty.",
          basicInformation:
              "<strong>Taxonomie</strong><br>"+
              "<ul>" +
              "<li><b>Říše:</b> Plantae</li>" +
              "<li><b>Třída:</b> Magnoliopsida</li>" +
              "<li><b>Řád:</b> Fabales (bobotvaré)</li>" +
              "<li><b>Čeleď:</b> Fabaceae (bobovité)</li>" +
              "<li><b>Rod:</b> Robinia (akát)</li>" +
              "<li><b>Druh:</b> Robinia pseudoacacia</li>" +
              "</ul> <br>",
          fullInformation: [
            {
              title: "",
              points: [
                "Trnovník akát je jednou z nejrozšířenějších a zároveň nejkontroverznějších dřevin současné Evropy. Do české krajiny byl zavlečen v 18. století jako okrasná, medonosná a půdopevná dřevina, avšak díky své mimořádné vitalitě, odolnosti a schopnosti měnit chemické složení půdy se stal vážným ekologickým problémem. Tato práce shrnuje jeho základní botanické vlastnosti, ekologické dopady, zajímavosti, léčivé účinky i možnosti využití.",
                "Akát patří do čeledi bobovitých (Fabaceae). Dorůstá výšky 15–25 metrů a vytváří nepravidelné, často malebně pokroucené koruny s hluboce rýhovanou borkou. Listy jsou lichozpeřené, složené z oválných lístků, a na bázi řapíků nesou ostré trny (přeměněné palisty). Květy jsou bílé, silně vonné, uspořádané v převislých hroznech a rozkvétají na přelomu května a června. Rostlina se šíří jak semeny (v plochých luscích), tak extrémně agresivně pomocí kořenových výmlatků. Díky symbióze s hlízkovými bakteriemi dokáže vázat vzdušný dusík, což mu umožňuje prosperovat i na nejchudších, suchých a písčitých půdách.",
                "Z ekologického hlediska má trnovník akát výrazně negativní vliv na původní ekosystémy. Do půdy vylučuje toxické látky (tzv. alelopatie), které spolu s nadbytkem dusíku decimují původní rostlinná společenstva a mění mikroklima stanoviště. Vytváří husté monokultury, pod kterými nedokáže růst téměř žádný jiný domácí druh kromě bezu černého a kopřiv, což drasticky snižuje lokální biodiverzitu. Na skalních stepích a chráněných vápencových svazích působí doslova spoušť. Likvidace akátu je nesmírně náročná, protože po pouhém pokácení reaguje masivní tvorbou stovek nových kořenových výmlatků, a vyžaduje proto specifické kombinované či chemické postupy (např. metodu injektáže).",
                "Ačkoli je akát vnímán jako nebezpečný invazní strom, má i své velmi ceněné vlastnosti. V tradičním léčitelství se využívá jeho květ (Flos robiniae), který jako jediná část stromu není toxický (kůra, listy i semena obsahují jedovaté toxalbuminy robin a fasin). Květy obsahují flavonoidy a esenciální oleje, mají močopudné účinky, podporují vylučování žluči a užívají se ke zmírnění žaludečních křečí. Účinky jsou jemné, ale v lidové medicíně dobře známé. Květy jsou navíc jedlé a v některých oblastech se obalují v těstíčku a smaží jako delikatesa.",
                "Dřevo akátu má obrovský hospodářský význam. Je to naše nejtvrdší, nejtěžší a nejodolnější dřevo, které fantasticky odolává hnilobě, vlhkosti i hmyzu, a to i bez chemické impregnace. Používá se na stavbu plotů, dětských hřišť, viničních kůlů, zahradního nábytku či teras. Mimo to je akát excelentním palivem s vysokou výhřevností a jednou z nejvýznamnějších medonosných dřevin – akátový med je vysoce ceněný pro svou světlou barvu, jemnou chuť a skutečnost, že téměř necukernatí.",
                "Trnovník akát je tedy strom s obrovským ekologickým dopadem, ale zároveň s mimořádnými praktickými vlastnostmi a hospodářským využitím. Jeho nezvladatelná touha ovládnout prostor z něj činí hrozbu pro chráněná území, která vyžaduje přísný management. Zároveň však v hospodářských lesích a včelařství představuje neocenitelnou surovinu, jejíž kvality nemají mezi evropskými dřevinami konkurenci."
              ],
            },
          ],
          videoTitle: "Odkaz na video, kde se dozvíte více",
          videoLink: "https://www.youtube.com/watch?v=4GJSjsVKkVc&t\n",
        },
        {
          image: kycelniceImage,
          title: "Kyčelnice cibulkonosná",
          latinTitle: "(Dentaria bulbifera)",
          description: "Statný a odolný strom našich lesů, ceněný pro tvrdé dřevo a schopnost vytvářet husté, přirozené porosty.",
          basicInformation:
              "<strong>Taxonomie</strong><br>"+
              "<ul>" +
              "<li><b>Říše:</b> Plantae</li>" +
              "<li><b>Třída:</b> Magnoliopsida</li>" +
              "<li><b>Řád:</b> Brassicales (brukvotvaré)</li>" +
              "<li><b>Čeleď:</b> Brassicaceae (brukvovité)</li>" +
              "<li><b>Rod:</b> Cardamine (kyčelnice / řeřišnice)</li>" +
              "<li><b>Druh:</b> Dentaria bulbifera (kyčelnice cibulkonosná)</li>" +
              "</ul> <br>",
          fullInformation: [
            {
              title: "",
              points: [
                "Kyčelnice cibulkonosná je jednou z nejzajímavějších a esteticky nejpůsobivějších lesních bylin našich listnatých lesů. V české přírodě je původním druhem, který na rozdíl od invazních rostlin nepředstavuje ekologickou hrozbu, ale naopak je indikátorem zachovalých a druhově bohatých ekosystémů, zejména bučin. Tato práce shrnuje její základní botanické vlastnosti, unikátní způsob rozmnožování, ekologický význam, zajímavosti i její roli v přírodním léčitelství.",
                "Rostlina patří do čeledi brukvovitých (Brassicaceae). Je to vytrvalá bylina dorůstající výšky 30–60 centimetrů, která vyrůstá z plazivého, šupinatého oddenku. Listy jsou střídavé, v dolní části lodyhy zpeřené, v horní části pak jednodušší a kopinaté. Květy jsou poměrně velké, čtyřčetné, mají světle fialovou až narůžovělou barvu a jsou uspořádány v hroznovitém květenství. Kyčelnice rozkvétá od dubna do června. Nejvýraznějším znakem tohoto druhu jsou však tmavě fialové až černé lesklé pacibulky (bulby), které se tvoří v úžlabí horních listů a daly rostlině její druhové jméno.",
                "Z ekologického hlediska je kyčelnice cibulkonosná typickým představitelem tzv. jarního aspektu listnatých lesů. Vyhledává stinná až polostinná stanoviště s vlhkou, humózní půdou bohatou na živiny, nejčastěji v květnatých bučinách, suťových lesích či dubohrabinách. Na rozdíl od agresivních druhů žije v dokonalé rovnováze s okolní vegetací a přispívá ke stabilitě lesního podrostu. Její existence je však přímo závislá na zdraví lesních komplexů – plošné kácení bučin a jejich přeměna na smrkové monokultury vedou k rychlému mizení tohoto druhu z krajiny. Ochranářský management se proto soustředí na zachování přirozené druhové skladby našich lesů.",
                "Ačkoli nepatří mezi obecně známé průmyslové rostliny, skrývá v sobě kyčelnice cibulkonosná fascinující biologické mechanismy a potenciál pro tradiční využití. Její hlavní zajímavostí je právě zmíněná tvorba pacibulek. Ty slouží k vegetativnímu rozmnožování: v létě opadají na zem, zakoření a vyrostou z nich noví jedinci, což rostlině kompenzuje fakt, že její semena dozrávají jen zřídka. V minulosti se tyto pacibulky v dobách nouze sbíraly jako potrava, mají totiž jemně pálivou, ředkvičkovou chuť. V lidovém léčitelství se v omezené míře využíval sušený oddenek, který obsahuje hořčičné glykosidy a má mírné močopudné účinky a schopnost tlumit křeče, dnes se však z důvodu ochrany přírody již nesbírá.",
                "Význam kyčelnice je v současnosti primárně estetický, vědecký a krajinotvorný. Pro lesníky a paleobotaniky slouží jako spolehlivý indikátor starých, kontinuálně existujících lesních porostů, které nebyly v minulosti zdevastovány zemědělstvím. V zahradní architektuře nachází své místo jako atraktivní stínomilná trvalka (tzv. hajnička), ideální podrost pod vzrostlé stromy v přírodně koncipovaných zahradách a parcích. Její schopnost pokrýt jarní lesní půdu kobercem jemných fialových květů z ní činí vizuální klenot naší jarní přírody.",
                "Kyčelnice cibulkonosná je tedy rostlinou s hlubokou vazbou na původní evropské lesy, která vyniká svou křehkou krásou i netradiční biologií. Její přítomnost v krajině je symbolem ekologické rovnováhy a zdravého životního prostředí. Ochrana jejích přirozených stanovišť je klíčem k tomu, aby tato svébytná součást české flóry zůstala zachována i pro příští generace."
              ],
            },
          ],
          videoTitle: "Odkaz na video, kde se dozvíte více",
          videoLink: "https://www.youtube.com/watch?v=KAGuINWFOv0\n",
        },
      ],
    };
  },
  methods: {
    GoBack() {
        this.$router.push('/priroda');
    }
  }
};
</script>

<style scoped>
.button-back {
  background-color: #7b8f3b;
  color: #fff;
}
</style>