<template>
  <v-container style="height: 100%;  margin-bottom: 40px;">
    <v-row >
      <v-col cols="12" class="d-flex justify-end">
        <v-btn variant="text" @click="GoBack" class="button-back">
          ← Zpět
        </v-btn>
      </v-col>
    </v-row>

    <v-row justify="center" style="margin-bottom: 50px">
      <v-col cols="12">
        <h4 class="text-center">Vzdělávání o přírodě</h4>
      </v-col>
    </v-row>

    <v-row>
      <v-col
          v-for="item in items"
          :key="item.title"
          cols="12"
          md="6"
      >
        <v-card class="pa-4 h-100 content-card">
          <h5 class="mb-4 text-center">{{ item.title }}</h5>

          <div class="d-flex justify-center">
            <VideoCard
                :href="item.videoItem.href"
                :title="item.videoItem.title"
                :description="item.videoItem.description"
            />
          </div>

          <div class="mt-4">
            {{ item.description }}
          </div>
        </v-card>
      </v-col>
    </v-row>

    </v-container>
</template>

<script>
import VideoCard from "@/components/VideoCard";

export default {
  components: {
    VideoCard,
  },
  data() {
    return {
      items: [
        {
          title: "Disturbance (narušení)",
          description: "Disturbance (narušení) je z biologického hlediska dočasná změna obvyklých podmínek způsobující podstatnou změnu v ekosystému. Může se jednat o změnu náhlou nebo postupnou, vždy však vede ke stejnému výsledku, k odstranění velkého množství biomasy i živočichů. Narušuje ekosystém, jeho složení, strukturu a funkci. Více ve videu.",
          videoItem: {
            title: "Disturbance (narušení)",
            description: "Co je to disturbance",
            href: "https://www.youtube.com/watch?v=Nat97yYJ1YQ&pp=2AYD",
          }
        },
        {
          title: "Doupné stromy",
          description: "Doupnými stromy rozumíme stromy s dobře vyvinutými přírodními dutinami. Takové dutiny vznikají jednak vydlabáním, jak to činí zejména datlovití ptáci, nebo v důsledku narušení jádrového dřeva kmene hnilobami. Přítomnost dutin nám prozrazují také otevřené suky po vypadlých větvích.",
          videoItem: {
            title: "Doupné stromy",
            description: "Co to jsou doupné stromy",
            href: "https://www.youtube.com/watch?v=Gprqw4n9eKQ&pp=2AYI",
          }
        },
        {
          title: "Poznávačka - listnaté stromy",
          description: "Co si takhle vyzkoušet, zda poznáte některé z našich běžně rozšířených druhů listnatých stromů? :-) Pro zdatnější determinátory mám na konec i několik méně známých druhů :-) Každý si to může vyzkoušet a kdo nebude chtít, tak se alespoň může podívat na to, co u nás všechno roste :-).",
          videoItem: {
            title: "Poznávačka - listnaté stromy",
            description: "",
            href: "https://www.youtube.com/watch?v=HsSMggVVL7g",
          }
        },
        {
          title: "Poznávačka Jehličnanů",
          description: "Doupnými stromy rozumíme stromy s dobře vyvinutými přírodními dutinami. Takové dutiny vznikají jednak vydlabáním, jak to činí zejména datlovití ptáci, nebo v důsledku narušení jádrového dřeva kmene hnilobami. Přítomnost dutin nám prozrazují také otevřené suky po vypadlých větvích.",
          videoItem: {
            title: "Poznávačka Jehličnanů",
            description: "",
            href: " https://www.youtube.com/watch?v=6o1TNVGPnX0&pp=2AYD",
          }
        },
        {
          title: "Letokruhy",
          description: "Letokruh je přírůstek dřeva vytvořený kambiem v průběhu jednoho vegetačního období. Jeden letokruh odpovídá jednomu vegetačnímu období. V našich oblastech je to jeden přírůstek (letokruh) během jednoho roku. Proto počet letokruhů na radiálním řezu (poloměrový řez) odpovídá stáří stromu. Podle počtu letokruhů se dá určit přibližné stáří stromu. Na pařezu lze pomocí nich také určit jih nebo sever. Letokruhy se zabývá vědní obor dendrochronologie, který využívá nepravidelností letokruhů, způsobených zejména odlišným chodem počasí v různých letech k určování doby, z níž dřevo pochází.",
          videoItem: {
            title: "Letokruhy",
            description: "",
            href: "https://www.youtube.com/watch?v=yDUJnRsS2ao&pp=2AYD",
          }
        },
        {
          title: "Ekologická Sukcese",
          description: "Krátký přehled ekologické sukcese v praxi. Zaměřil jsem se na to, jak se krajina postupně mění, jaké druhy rostlin a živočichů se objevují v jednotlivých fázích a proč je tento proces klíčový pro obnovu přírody. Ukazuju rozdíly mezi primární a sekundární sukcesí, roli půdních organismů, pionýrských druhů i stabilních ekosystémů. Níže najdeš video s reálnými ukázkami z terénu, vizuálními příklady jednotlivých stádií a mými postřehy z pozorování.",
          videoItem: {
            title: "Ekologická Sukcese",
            description: "",
            href: "https://www.youtube.com/watch?v=g6E_0hB_5Pc&pp=2AYB",
          }
        }
      ]
    }
  },
  methods: {
    GoBack() {
      this.$router.push('/priroda');
    }
  }
}
</script>

<style scoped>
.button-back {
  background-color: #7b8f3b;
  color: #fff;
}

.content-card {
  background: transparent;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(6px);
  color: #0f1a0f;
}

.h-100 {
  height: 100%;
}
</style>