<template>
  <v-container>
    <v-row >
      <v-col cols="12" class="d-flex justify-end">
        <v-btn variant="text" @click="GoBack" class="button-back">
          ← Zpět
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-8">
      <v-col cols="12" lg="10" >
        <p>Chyba: Začátečník chce být připraven na všechno.
          Výsledek: 30 kg na zádech (vlastní zkušenost), z toho polovina věcí se během výpravy ani nevytáhne.
          Proč se to děje:
          Když člověk neví, co bude v lese skutečně potřebovat, raději vezme všechno, „co by se mohlo hodit“.
          Dvě pánve, tři nože, polínko na podpal (jo, i to se děje), litry vody…
        </p>
        <br>
        <v-row justify="center" class="mb-8">
          <v-col cols="12" lg="10" >
            <p>✅ <strong>Jak se tomu vyhnout:</strong> 👉 Řiď se pravidlem „velká trojka“</p>
          </v-col>
        </v-row>

        <v-row justify="center" class="mb-8">
          <v-col cols="12" md="6" lg="5" order="1" order-md="1">
            <ul class="mb-6 list-offset">
              <li class="mb-2">•	spánek (tarp / stan / hamaka, spacák, karimatka)</li>
              <li class="mb-2">•	vaření (malý vařič, palivo, jedna nádoba)</li>
              <li class="mb-2">•	oblečení (funkční vrstvy, které reálně využiješ)</li>
            </ul>
            <br>
            <p>Vyzkoušej tuto metodu:</p>
            <ul class="mb-6 list-offset">
              <li class="mb-2">1.	Nacpeš vše do batohu – tedy věci, které myslíš, že budeš potřebovat.</li>
              <li class="mb-2">2.	Vyndáš polovinu – ta polovina jsou obvykle věci, které sis vzal jen „co kdyby“.</li>
              <li class="mb-2">3.	Zůstane ti to, co skutečně využiješ.</li>
            </ul>
            <br>
            <p>Je to tedy jednoduchý trik, jak se naučit balit minimalisticky.
              Uvidíš, že s menší výbavou zažiješ mnohem příjemnější pohyb v terénu.
            </p>
          </v-col>
          <v-col cols="12" md="6" lg="5" order="2" order-md="2">
            <div class="side-wrapper">
              <v-img :src="images[2]" cover class="side-img" />
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" class="mb-8">
          <v-col cols="12" class="d-flex justify-center">
            <h4>2) ŠPATNÉ ODHADNUTÍ POČASÍ</h4>
          </v-col>
        </v-row>

        <v-row justify="center" class="mb-8">
          <v-col cols="12" lg="10" >
            <p>Chyba: „Jasně že to zvládnu… vždyť je sucho.“
              No… a za dvě hodiny prší jako z konve, vítr ti převrací tarp a studené ruce už neumí zapálit ani sirku.
              Proč se to děje:
              Začátečník se spoléhá na to, jak je teď, ne jak bude za chvíli. Příroda je ale vždycky o dvě hodiny před tebou.
            </p>
            <br>
            <v-row justify="center" class="mb-8">
              <v-col cols="12" lg="10" >
                <p>✅ <strong>Jak se tomu vyhnout:</strong> 👉 Nauč se číst základní signály:</p>
              </v-col>
            </v-row>

            <v-row justify="center" class="mb-8">
              <v-col cols="12" md="6" lg="5" order="1" order-md="1">
                <ul class="mb-6 list-offset">
                  <li class="mb-2">•	nízká rychle se pohybující oblačnost = blíží se vítr a déšť</li>
                  <li class="mb-2">•	změna směru větru během krátké doby = přichází fronta</li>
                  <li class="mb-2">•	teplotní propad po západu slunce = risk kondenzace + vlhkosti</li>
                </ul>
                <br>
                <p>👉 Vždy měj sebou:</p>
                <ul class="mb-6 list-offset">
                  <li class="mb-2">•	náhradní suché tričko (mikina sama o sobě nestačí)</li>
                  <li class="mb-2">•	pláštěnku / pončo / nepromokavou větrovku</li>
                  <li class="mb-2">•	něco horkého v ešusu (čaj z jehličí? 😉)</li>
                </ul>
              </v-col>
              <v-col cols="12" md="6" lg="5" order="2" order-md="2">
                <div class="side-wrapper">
                  <v-img :src="images[2]" cover class="side-img" />
                </div>
              </v-col>
            </v-row>
            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="d-flex justify-center">
                <h4>3) NEPŘÍPRAVA NA OHEŇ</h4>
              </v-col>
            </v-row>

            <v-row justify="center" class="mb-8">
              <v-col cols="12" lg="10" >
                <p>Chyba: Náhodně sebrané klacíky, vlhké dřevo, mizerná příprava a pak nadávání: „To křesadlo je k ničemu!“
                  Ne, není.
                  Problém je před ohněm, ne při něm.
                </p>
                <br>
                <v-row justify="center" class="mb-8">
                  <v-col cols="12" lg="10" >
                    <p>✅ <strong>Jak se tomu vyhnout:</strong> 👉 Oheň si „postav dopředu“:</p>
                  </v-col>
                </v-row>

                <v-row justify="center" class="mb-8">
                  <v-col cols="12" md="6" lg="5" order="1" order-md="1">
                    <ul class="mb-6 list-offset">
                      <li class="mb-2">•	tenké třísky (co nejjemnější)</li>
                      <li class="mb-2">•	suchá kůra</li>
                      <li class="mb-2">•	větší třísky</li>
                      <li class="mb-2">•	až pak tlusté polínko</li>
                    </ul>
                    <br>
                    <p>👉 Hledej mrtvé dřevo na stromě, ne na zemi.</p>
                    <ul class="mb-6 list-offset">
                      <li class="mb-2">Co leží – bývá vlhké.</li>
                      <li class="mb-2">Co visí – bývá suché.</li>
                    </ul>
                    <br>
                    <p>👉 Měj dva způsoby zapálení (křesadlo + zapalovač či sirky).</p>
                    <ul class="mb-6 list-offset">
                      <li class="mb-2">Profík není ten, kdo trpí.</li>
                      <li class="mb-2">Profík je ten, kdo přežije v pohodlí.</li>
                    </ul>
                  </v-col>
                  <v-col cols="12" md="6" lg="5" order="2" order-md="2">
                    <div class="side-wrapper">
                      <v-img :src="images[2]" cover class="side-img" />
                    </div>
                  </v-col>
                </v-row>

              </v-col>
            </v-row>
            <!-- KONEC SEKCE 3 -->

            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="d-flex justify-center">
                <h4>4) ŠPATNÉ MÍSTO NA PŘESPÁNÍ</h4>
              </v-col>
            </v-row>

            <v-row justify="center" class="mb-8">
              <v-col cols="12" lg="10">
                <p>
                  Chyba: Začátečník přijde unavený, rychle postaví přístřešek a jde spát.
                  A pak celou noc poslouchá kapající vodu, kouše ho vítr ze špatného směru,
                  sjíždí se spacákem z celty nebo se probudí uprostřed kaluže.
                </p>

                <br>

                <v-row justify="center" class="mb-8">
                  <v-col cols="12" lg="10">
                    <p>✅ <strong>Jak se tomu vyhnout:</strong> 👉 Dodržuj 4 zásady:</p>
                  </v-col>
                </v-row>

                <v-row justify="center" class="mb-8">
                  <v-col cols="12" md="6" lg="5">
                    <ul class="mb-6 list-offset">
                      <li class="mb-2">1. Závětří – hledej místo, kde tě kryje terén.</li>
                      <li class="mb-2">2. Vysoko nad potokem – nikdy ne u vody. Ráno bude všude vlhkost.</li>
                      <li class="mb-2">3. Nekempuj pod sucháči / starými větvemi – vítr je umí shodit.</li>
                      <li class="mb-2">4. Dobrý únikový sklon – ať voda teče pryč, ne k tobě.</li>
                    </ul>

                    <p>
                      V přírodě je správné místo půlka úspěchu.
                    </p>
                  </v-col>

                  <v-col cols="12" md="6" lg="5">
                    <div class="side-wrapper">
                      <v-img :src="images[3]" cover class="side-img" />
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <!-- SEKCE 5 -->

            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="d-flex justify-center">
                <h4>5) ROMANTICKÁ PŘEDSTAVA NAMÍSTO REALITY</h4>
              </v-col>
            </v-row>

            <v-row justify="center" class="mb-8">
              <v-col cols="12" lg="10">
                <p>
                  Chyba: Začátečník vidí videa na YouTube a myslí si, že bushcraft = pohodový čajíček,
                  dokonalý oheň a klid.
                  Ne.
                  Je to zima, déšť, pot, zápas s větrem, ale i radost, ticho a hrdost, že to zvládáš.
                </p>

                <br>

                <v-row justify="center" class="mb-8">
                  <v-col cols="12" lg="10">
                    <p>✅ <strong>Jak se tomu vyhnout:</strong></p>
                  </v-col>
                </v-row>

                <v-row justify="center" class="mb-8">
                  <v-col cols="12" md="6" lg="5">
                    <ul class="mb-6 list-offset">
                      <li class="mb-2">👉 Začni jednoduše. Ne první noc v zimě. Ne první solo. Ne první noc v bouřce.</li>
                      <li class="mb-2">👉 Neporovnávej se s ostatními. Každý má svůj rytmus.</li>
                      <li class="mb-2">👉 Užívej si cestu, ne cíl. Bushcraft není výkon. Je to proces.</li>
                    </ul>
                  </v-col>

                  <v-col cols="12" md="6" lg="5">
                    <div class="side-wrapper">
                      <v-img :src="images[4]" cover class="side-img" />
                    </div>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <!-- ZÁVĚR -->

            <v-row justify="center" class="mb-8">
              <v-col cols="12" lg="10">
                <h4>Závěrem: Každá chyba je zkušenost</h4>

                <p>
                  Neboj se dělat chyby.<br>
                  Neboj se být začátečník.<br>
                  Neboj se učit.<br><br>

                  Jakmile si projdeš těmito pěti lekcemi, budeš v lese najednou dýchat jinak – volněji,
                  jistěji a s respektem k tomu, co se učíš.
                  A to je moment, kdy bushcraft přestane být „hobby“ a stane se součástí tebe.
                </p>

                <br>

                <p><strong>Autor článku: Deflector</strong></p>
              </v-col>
            </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {

    }
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