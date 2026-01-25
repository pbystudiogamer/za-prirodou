
<template>
  <v-card class="dialog-card" rounded="xl">
    <div class="dialog-bar dialog-bar--top">
      <div class="dialog-bar__text">
        <div class="dialog-bar__title">
          Nápověda <span class="ms-2"></span>
        </div>
        <div class="dialog-bar__desc">

        </div>
      </div>

      <v-spacer />
      <v-btn
          icon="mdi-close"
          variant="text"
          class="dialog-bar__btn"
          @click="close"
      />
    </div>

    <div class="dialog-body">
      <div
          v-for="(c, i) in chips"
          :key="i"
          class="mb-6"
      >
        <div class="d-flex align-center ga-3 mb-2">
          <div
              class="text-h6 font-weight-bold"
              v-html="c.header"
          />

          <v-chip
              size="large"
              variant="flat"
              color="green-darken-2"
          >
            <v-icon start size="20">{{ c.icon }}</v-icon>
            {{ c.text }}
          </v-chip>
        </div>
        <div
            class="text-body-3"
            v-html="c.description"
        />
      </div>
    </div>

    <div class="dialog-bar dialog-bar--bottom">
      <v-spacer />
      <v-btn variant="text" class="dialog-bar__close" @click="close">Zavřít</v-btn>
    </div>
  </v-card>
</template>

<script>

export default {
  name: "HelpDialog",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      chips: [
        { icon: 'mdi-walk', type: 'vzdalenost', text: '13,2 km', header: '<b>Vzdálenost:</b>',  description:'Celková vzdálenost treku uvedená v kilometrech. ' },
        { icon: 'mdi-arm-flex', type: 'obtiznost', text: 'Lehká',header: '<b>Stupně obtížnosti:</b>', description: '<ol style="margin:0; padding-left:1.25rem;">\n' +
              '  <li style="margin:0 0 1rem 0;">\n' +
              '    <strong>Velmi lehká</strong>\n' +
              '    <ul style="margin:0.5rem 0 0 0; padding-left:1.25rem;">\n' +
              '      <li>Krátká, pohodová trasa</li>\n' +
              '      <li>Minimální převýšení</li>\n' +
              '      <li>Vhodné pro začátečníky a rodiny</li>\n' +
              '      <li>Bez technicky náročných úseků</li>\n' +
              '    </ul>\n' +
              '  </li>\n' +
              '\n' +
              '  <li style="margin:0 0 1rem 0;">\n' +
              '    <strong>Lehká</strong>\n' +
              '    <ul style="margin:0.5rem 0 0 0; padding-left:1.25rem;">\n' +
              '      <li>Delší chůze, ale stále bez větší námahy</li>\n' +
              '      <li>Mírné stoupání</li>\n' +
              '      <li>Jednoduchý terén, občas kořeny či kameny</li>\n' +
              '      <li>Vhodné pro běžné turisty</li>\n' +
              '    </ul>\n' +
              '  </li>\n' +
              '\n' +
              '  <li style="margin:0 0 1rem 0;">\n' +
              '    <strong>Střední</strong>\n' +
              '    <ul style="margin:0.5rem 0 0 0; padding-left:1.25rem;">\n' +
              '      <li>Delší vzdálenost nebo výraznější převýšení</li>\n' +
              '      <li>Místy náročnější terén (skály, prudší úseky)</li>\n' +
              '      <li>Vyžaduje lepší fyzičku</li>\n' +
              '      <li>Ideální pro zkušenější turisty</li>\n' +
              '    </ul>\n' +
              '  </li>\n' +
              '\n' +
              '  <li style="margin:0 0 1rem 0;">\n' +
              '    <strong>Náročná</strong>\n' +
              '    <ul style="margin:0.5rem 0 0 0; padding-left:1.25rem;">\n' +
              '      <li>Výrazné převýšení nebo dlouhé úseky v těžkém terénu</li>\n' +
              '      <li>Technické pasáže, kde je potřeba jistota pohybu</li>\n' +
              '      <li>Vyžaduje dobrou kondici a zkušenosti</li>\n' +
              '      <li>Vhodné pro pokročilé outdooristy</li>\n' +
              '    </ul>\n' +
              '  </li>\n' +
              '\n' +
              '  <li style="margin:0;">\n' +
              '    <strong>Velmi náročná</strong>\n' +
              '    <ul style="margin:0.5rem 0 0 0; padding-left:1.25rem;">\n' +
              '      <li>Dlouhé, fyzicky i technicky těžké trasy</li>\n' +
              '      <li>Strmá stoupání, exponované úseky, náročné podmínky</li>\n' +
              '      <li>Vyžaduje výbornou kondici, zkušenosti a vybavení</li>\n' +
              '      <li>Pro zkušené a dobře připravené účastníky</li>\n' +
              '    </ul>\n' +
              '  </li>\n' +
              '</ol>'  },
        { icon: 'mdi-elevation-rise', type: 'nejvyssi-bod', text: '1 245 m', header: '<b>Nejvyšší bod:</b>', description: 'Nadmořská výška nejvyššího bodu treku uvedená v metrech.' },
        { icon: 'mdi-elevation-decline', type: 'nejnizsi-bod', text: '320 m', header: '<b>Nejnižší bod:</b>', description: 'Nadmořská výška nejnižšího bodu treku uvedená v metrech.'  },
      ],
    }
  },
  methods: {
    close () {
      this.$emit('update:modelValue', false)
    },
  },
}
</script>

<style scoped>
.tile { cursor: pointer; background-color: #7b8f3b; }
.tile-img { border-top-left-radius: 24px; border-top-right-radius: 24px; position: relative; }

.card-title{
  font-size: 1.2rem;
  line-height: 1.25;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.desc{
  font-size: 0.85rem;
  line-height: 1.35;
  margin-top: -6px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.dialog-card{
  background: #F5F5DC !important;
  color: var(--c-dark-green);
  overflow: hidden;
}

.dialog-title{
  padding-left: 24px;
  padding-right: 16px;
}

.title-wrap{
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.dialog-body{
  max-height: min(72vh, 720px);
  overflow-y: auto;
  padding: 16px 24px;
}
.dialog-bar{
  position: sticky;
  z-index: 5;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: #7b8f3b;
  color: #fff;
}
.dialog-bar--top{ top: 0; }
.dialog-bar--bottom{ bottom: 0; }
.dialog-bar__title{
  font-weight: 700;
  font-size: 1.05rem;
  line-height: 1.2;
}
.dialog-bar__btn :deep(.v-icon),
.dialog-bar__close{
  color: #fff !important;
}
</style>