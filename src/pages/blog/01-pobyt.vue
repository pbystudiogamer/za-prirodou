<template>
  <v-container class="mb-10">
    <v-row align="center" justify="end">
      <v-btn
          size="large"
          class="button-back floating-back"
          @click="GoBack"
      >
          ← Zpět
        </v-btn>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" class="d-flex justify-center">
        <h4>Pobyt a spaní v přírodě legálně: kde se smí, kde ne a jak se chovat</h4>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>Spaní v přírodě milujeme. Má své zvláštní kouzlo – ticho, hvězdy nad hlavou a absolutní pocit svobody.</p>
        <br>

        <div class="img-wrapper">
          <v-img :src="images[0]" cover class="tile-img" />
        </div>

        <p>Zároveň je to ale lehce kontroverzní téma, kolem kterého koluje hromada nejasností, mýtů a polopravd.</p>

        <p><strong>Může se vlastně v přírodě spát legálně? Můžu si rozdělat oheň? Jak se chovat s ohledem na okolí ve kterém se nacházím?</strong></p>
        <p>Přespání v přírodě není zákonem výslovně povoleno, ale v praxi je mimo chráněná území často tolerováno, pokud splňuje určité podmínky. </p>
        <br>
        <p>🔎 Pojďme se na to tedy spolu podívat a vysvětleme si to <strong>jednoduše a prakticky.</strong></p>

      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row justify="center" class="mb-4 mt-8">
      <v-col cols="12" class="d-flex justify-center">
        <h5>Přespání vs. Táboření = zásadní rozdíl</h5>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>Tohle je úplný základ, na kterém všechno stojí a ze kterého budeme vycházet.</p>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="6" lg="5" order="1" order-md="1">
        <h5 class="mb-5">Přespání (bivak)</h5>

        <ul class="mb-6 list-offset">
          <li class="mb-2">jednorázové přenocování</li>
          <li class="mb-2">bez stanu pod širákem (karimatka nebo hamaka)</li>
          <li class="mb-2">žádné dlouhodobé zabírání místa</li>
          <li class="mb-2">ideálně bez ohně (pouze vařič)</li>
        </ul>
      </v-col>

      <v-col cols="12" md="6" lg="5" order="2" order-md="2">
        <div class="side-wrapper">
          <v-img :src="images[1]" cover class="side-img" />
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>✅ <strong>Přespání je ve většině případů tolerované,</strong> pokud dodržujete pravidla a chováte se ohleduplně.</p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="6" lg="5" order="1" order-md="1">
        <h5 class="mb-5">Táboření</h5>
        <ul class="mb-6 list-offset">
          <li class="mb-2">stavění stanu</li>
          <li class="mb-2">pobyt na jednom místě více nocí</li>
          <li class="mb-2">rozdělávání ohně, úpravy okolí</li>
          <li class="mb-2">větší zásah do prostředí</li>
        </ul>
      </v-col>
      <v-col cols="12" md="6" lg="5" order="2" order-md="2">
        <div class="side-wrapper">
          <v-img :src="images[2]" cover class="side-img" />
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>❌<strong>Táboření je mimo vyhrazená místa zpravidla zakázané.</strong></p>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row justify="center" class="mb-4 mt-8">
      <v-col cols="12" class="d-flex justify-center">
        <h5>Přespání vs. Táboření = zásadní rozdíl</h5>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>Jsou místa, kde je potřeba zbystřit a kde bychom neměli přespávat vůbec, protože tady už jde opravdu o porušení pravidel.</p>
        <p><strong>❌ Národní parky a Národní přírodní rezervace</strong></p>
        <p> 🔎 Mimo oficiální nocoviště <strong>je přespání i bivak zakázaný.</strong> V NP a NPR také platí zákaz vstupu mimo značené cesty.</p>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-8">
      <v-col class="mt-8" cols="12" md="6" lg="5" order="1" order-md="1">
        <p ><strong>❌ Chráněné krajinné oblasti (CHKO)</strong></p>
        <ul class="mb-6 list-offset">
          <li class="mb-2">pravidla se mohou lišit podle konkrétní CHKO</li>
          <li class="mb-2">často zákaz táboření, někde i bivakování</li>
        </ul>
        <p>🔎 V chráněných krajinných oblastech záleží na konkrétní zóně a návštěvním řádu. <strong>Je lepší si pravidla předem ověřit, nebo radši přespat mimo CHKO.</strong></p>
        <p><strong>❌ Soukromé pozemky</strong></p>
        <ul class="mb-6 list-offset">
          <li class="mb-2">louky, pole, lesy v soukromém vlastnictví</li>
          <li class="mb-2">bez souhlasu majitele je to problém</li>
        </ul>
        <p>🡪 Když si nejste jistí, <strong>raději se přesuňte jinam.</strong></p>

      </v-col>
      <v-col cols="12" md="6" lg="5" order="2" order-md="2">
        <div class="img-wrapper">
          <v-img :src="images[3]" cover class="side-img" style="max-height: 400px"/>
        </div>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row justify="center" class="mb-4 mt-8">
      <v-col cols="12" class="d-flex justify-center">
        <h5>Kde se naopak přespání toleruje?</h5>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p><strong>✅ Volná krajina mimo chráněná území</strong></p>
        <ul class="mb-6 list-offset">
          <li class="mb-2">lesy (mimo zákazy)</li>
          <li class="mb-2">hory mimo NP</li>
          <li class="mb-2">odlehlá místa bez turistického ruchu</li>
        </ul>

        <p>🔎 Vždy doporučujeme řídit se nepsaným pravidlem: <strong>přijít potichu, odejít brzy, nezanechat po sobě stopu.</strong></p>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row justify="center" class="mb-4 mt-8">
      <v-col cols="12" class="d-flex justify-center">
        <h5>Oheň v přírodě: velmi citlivé téma</h5>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>Rozdělávání ohně je kapitola sama o sobě a často vyvolává největší emoce. Pojďme se proto na toto téma podívat podrobněji.</p>
        <p><strong>🔎 Co se rozumí pod pojmem „rozdělávání ohně“? </strong></p>
        <ul class="mb-6 list-offset">
          <li class="mb-2">= Zapálení otevřeného, neřízeného ohně, u kterého by mohly plameny, žhavé uhlíky nebo jiskry přijít do kontaktu se zemí a okolní vegetací a způsobit tak její poškození nebo vznik požáru.<strong>Za oheň se považuje i gril nebo přenosné ohniště,</strong>  pokud není dostatečně izolované od podkladu nebo umožňuje šíření plamenů a jisker do okolí</li>
        </ul>
        <p>Naopak <strong>použití přenosných vařičů s regulovatelným plamenem,</strong> které lze okamžitě uhasit (např. plynové vařiče), <strong>se za rozdělávání ohně nepovažuje.</strong></p>
        <div class="img-wrapper mt-8">
          <v-img :src="images[4]" cover class="tile-img" height="500"/>
        </div>
        <p><strong>📖 Co říká zákon?</strong></p>
        <p><strong>Zákon o ochraně přírody a krajiny</strong> obecně zakazuje rozdělávání ohně v chráněných územích (pokud není výslovně povoleno výjimkou nebo návštěvním řádem),
          mimo zvláště chráněná území ZOPK oheň nezakazuje – to však neznamená, že je zde oheň automatický povolen. Tady už totiž vstupují do hry jiné zákony, zejména <strong>Lesní zákon</strong>,
          který neúprosně považuje za přestupek <strong>rozdělávání ohně obecně v lese a do vzdálenosti 50 m od lesa mimo vyhrazená místa pro rozdělávání ohně.</strong></p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col class="mt-8" cols="12" md="6" lg="5" order="1" order-md="1">
        <p ><strong>Co říká praxe? </strong></p>
        <p>V praxi je aplikace více benevolentní a pokud se vyskytujeme mimo chráněná území a pokud se chováme zodpovědně tzn.
          rozděláváme menší velmi dobře ohraničený oheň ve vlhkém či zimním počasí, kdy nehrozí riziko požáru či dalších škod, je menší oheň více méně tolerovaný.</p>
        <p>Také v některých rekreačních částech lesa nebo u turistických tras mohou být oficiální ohniště určené právě pro bezpečné rozdělávání ohně. Na takových místech je rozdělání ohně <strong>pravděpodobně legální.</strong></p>
        <p>Naopak během období s vysokým rizikem požáru (dlouhé sucho, vysoké teploty) může být rozdělávání ohně <strong>dočasně zakázané i na místech, kde by normálně bylo možné.</strong></p>
        <p>Zde tedy přichází na řadu zdravý selský rozum a zodpovědné chování každého z nás.</p>
      </v-col>
      <v-col cols="12" md="6" lg="5" order="2" order-md="2">
        <div class="img-wrapper">
          <v-img :src="images[5]" cover class="side-img" style="max-height: 400px"/>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p><strong>Náš pohled:</strong></p>
        <p>Občas je v našich videích vidět rozdělaný oheň a často se tak setkáváme s kritikou. Je však potřeba upřesnit, že místo pro oheň, pokud se už pro něj rozhodneme, vždy vybíráme velmi pečlivě a s ohledem na bezpečnost.</p>
        <p>Jedná se vždy o místa, která nejsou v chráněných územích, oheň je vždy malý, velmi dobře ohraničený, pod neustálým dohledem a v prostředí, kde nehrozí nebezpečí (vlhko, zima). </p>
        <p>Pokud to jde snažíme se také vybírat místa mimo les. V létě a v suchu oheň mimo oficiální ohniště nerozděláváme vůbec.</p>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
      <v-table class="fire-table">
        <thead>
        <tr>
          <th>Místo / typ území</th>
          <th class="text-center">Je možné rozdělat oheň?</th>
          <th>Co platí a proč</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td><strong>Národní park (NP)</strong></td>
          <td class="text-center"><span class="ico no">✖</span> <strong>NE</strong></td>
          <td>ZOPK rozdělávání ohně zakazuje plošně, povolena jsou pouze oficiální místa.</td>
        </tr>
        <tr>
          <td><strong>CHKO – I. a II. zóna</strong></td>
          <td class="text-center"><span class="ico no">✖</span> <strong>NE</strong></td>
          <td>ZOPK zakazuje rozdělávání ohně v nejcennějších částech CHKO.</td>
        </tr>
        <tr>
          <td><strong>CHKO – III. a IV. zóna</strong></td>
          <td class="text-center"><span class="ico warn">⚠</span> <strong>ZÁLEŽÍ</strong></td>
          <td>ZOPK může umožňovat mírnější režim, ale rozhoduje návštěvní řád konkrétní CHKO.</td>
        </tr>
        <tr>
          <td><strong>Přírodní rezervace, památky (PR, NPR, PP, NPP)</strong></td>
          <td class="text-center"><span class="ico no">✖</span> <strong>NE</strong></td>
          <td>ZOPK zde rozdělávání ohně zakazuje.</td>
        </tr>
        <tr>
          <td><strong>Les (jakýkoliv, i mimo CHKO)</strong></td>
          <td class="text-center"><span class="ico no">✖</span> <strong>NE</strong></td>
          <td>Lesní zákon zakazuje rozdělávání ohně v lese a do 50 m od jeho okraje mimo vyhrazená místa.</td>
        </tr>
        <tr>
          <td><strong>Vyhrazené ohniště</strong></td>
          <td class="text-center"><span class="ico yes">✔</span> <strong>ANO</strong></td>
          <td>Povolené jak podle ZOPK, tak podle lesního zákona (pokud není dočasný zákaz).</td>
        </tr>
        <tr>
          <td><strong>Mimo les a mimo chráněná území</strong></td>
          <td class="text-center"><span class="ico warn">⚠</span> <strong>VÝJIMEČNĚ / OPATRNĚ</strong></td>
          <td>ZOPK oheň neřeší, ale stále platí požární předpisy a místní omezení.</td>
        </tr>
        <tr>
          <td><strong>Přenosný vařič (plyn, líh)</strong></td>
          <td class="text-center"><span class="ico yes">✔</span> <strong>VĚTŠINOU ANO</strong></td>
          <td>Nepovažuje se za rozdělávání ohně, pokud je regulovatelný a bezpečný.</td>
        </tr>
        <tr>
          <td><strong>Období sucha / mimořádná opatření</strong></td>
          <td class="text-center"><span class="ico no">✖</span> <strong>NE</strong></td>
          <td>Oheň může být zakázán úplně, a to i na jinak povolených místech.</td>
        </tr>
        </tbody>
      </v-table>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col class="mt-12" cols="12" md="6" lg="5" order="1" order-md="1">
        <p ><strong>🔎 Co z toho vyplývá? Shrnutí:</strong></p>
        <p><strong>Rozdělávání otevřeného ohně je v přírodě většinou zakázané,</strong> zejména v chráněných územích a v lesích. Výjimku tvoří pouze <strong>vyhrazená ohniště</strong> nebo místa, kde to výslovně umožňuje místní návštěvní řá</p>
        <p>Mimo chráněná území a lesy může být oheň za určitých podmínek možný, vždy ale záleží na konkrétním místě, aktuální situaci a případných dočasných zákazech. <strong>Nejbezpečnější a obecně tolerovanou variantou je používání přenosného vařiče.</strong></p>
      </v-col>
      <v-col cols="12" md="6" lg="5" order="2" order-md="2">
        <div class="img-wrapper">
          <v-img :src="images[6]" cover class="side-img" style="max-height: 400px"/>
        </div>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row justify="center" class="mb-4 mt-8">
      <v-col cols="12" class="d-flex justify-center">
        <h5>Etika spaní v přírodě (Leave No Trace)</h5>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>🌿 Jedna věc je legálnost, ale z našeho pohledu mnohem důležitější aspekt je <strong>respekt k přírodě. </strong></p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col class="" cols="12" md="6" lg="5" order="1" order-md="1">
        <p >Základní pravidla:</p>
        <ul class="mb-6 list-offset">
          <li class="mb-2">nezanechávat po sobě žádné odpadky</li>
          <li class="mb-2">nerozřezávat a nesekat živé stromy</li>
          <li class="mb-2">neničit okolí kvůli „komfortu“</li>
          <li class="mb-2">nerušit zvěř</li>
          <li class="mb-2">místo po sobě zanechat tak, aby nebylo poznat, že tam někdo spal a pobýval</li>
        </ul>
        <p><strong>🔎 Jak to děláme my?</strong></p>
        <ul class="mb-6 list-offset">
          <li class="mb-2">přespáváme jen jednu noc</li>
          <li class="mb-2">vybíráme nenápadná místa mimo cesty</li>
          <li class="mb-2">používáme hamaky</li>
          <li class="mb-2">vaříme většinou na vařiči a pokud už rozděláváme oheň, místo vybíráme pečlivě</li>
          <li class="mb-2">vše po sobě uklidíme a dáme do původního stavu - ráno po nás nezůstane vůbec nic</li>
        </ul>
        <p>Pokud se bude s respektem chovat většina lidí, <strong>máme šanci, že spaní v přírodě zůstane i nadále do budoucna tolerováno.</strong></p>

      </v-col>
      <v-col cols="12" md="6" lg="5" order="2" order-md="2" class="mt-12">
        <div class="img-wrapper">
          <v-img :src="images[7]" cover class="side-img" style="max-height: 400px"/>
        </div>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <v-row justify="center" class="mb-4 mt-8">
      <v-col cols="12" class="d-flex justify-center">
        <h5>Závěrem</h5>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col class="mt-12" cols="12" md="6" lg="5" order="1" order-md="1">
        <p >Spaní v přírodě není o hledání mezer v zákoně. Je o respektu, jednoduchosti a zodpovědnost</p>
        <p >Když se budete chovat ohleduplně:</p>
        <ul class="mb-6 list-offset">
          <li class="mb-2">k přírodě</li>
          <li class="mb-2">k místním lidem</li>
          <li class="mb-2">k pravidlům</li>
        </ul>
        <p>… většinou vás nikdo řešit nebude – a vy si odnesete přesně ten zážitek, kvůli kterému ven chodíme 😊 🌿</p>

      </v-col>
      <v-col cols="12" md="6" lg="5" order="2" order-md="2" >
        <div class="img-wrapper">
          <v-img :src="images[8]" cover class="side-img" style="max-height: 400px"/>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p><strong>Autor článku:</strong> Nikča</p>
        <br>
        <p><strong>Zdroje:</strong></p>
        <p><i>Agentura ochrany přírody a krajiny ČR: <a href="https://aopk.gov.cz/"> Agentura ochrany přírody a krajiny ČR - AOPK ČR</a></i></p>
        <br>
        <p><i>Zákon č. 114/1992 Sb. – Zákon o ochraně přírody a krajiny</i></p>
        <p><i>Zákon č. 250/2025 Sb. - Zákon, kterým se mění zákon č. 289/1995 Sb., o lesích a o změně a doplnění některých zákonů (lesní zákon),
          ve znění pozdějších předpisů, zákon č. 114/1992 Sb., o ochraně přírody a krajiny, ve znění pozdějších předpisů, a zákon č. 40/2009 Sb.,
          trestní zákoník, ve znění pozdějších předpisů</i></p>
      </v-col>
    </v-row>
    
  </v-container>

</template>

<script>
  export default {
    data() {
      return {
        images: []
      }
    },
    created() {
      const modules = import.meta.glob(
          "/src/assets/blog/01-spani/*.{jpg,jpeg,png,webp,avif}",
          { eager: true, import: "default" }
      );

      this.images = Object.entries(modules)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([, v]) => v);
    },
    methods: {
      GoBack() {
        this.$router.push('/blog');
      }
    }
  }
</script>



<style scoped>
.button-back {
  background-color: #7b8f3b;
  color: #fff;
}

.floating-back {
  position: fixed;
  right: 40px;
  bottom: 120px;
  z-index: 1000;
}

.tile-img {
  border-radius: 24px;
  position: relative;
}

.side-img {
  border-radius: 24px;
  position: relative;
}

.img-wrapper {
  display: flex;
  justify-content: center;
  width: 70%;
  margin: 0 auto 25px;
}

.list-offset {
  padding-left: 60px;
}

.fire-table {
  border: 1px solid #000;
  border-collapse: collapse;
  width: 100%;
  background: transparent;
  color: #000;
}

.fire-table th,
.fire-table td {
  border: 1px solid #000;
  padding: 10px 12px;
  vertical-align: top;
}

.fire-table th {
  font-weight: 700;
  text-align: center;
}

.ico {
  display: inline-block;
  width: 1.4em;
  text-align: center;
  font-weight: 800;
  margin-right: 6px;
}

.ico.no { color: #d32f2f; }
.ico.yes { color: #2e7d32; }
.ico.warn { color: #f9a825; }
</style>