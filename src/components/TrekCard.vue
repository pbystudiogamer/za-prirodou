<template>
  <v-card class="tile" rounded="xl" width="420"  elevation="6" @click="dialog = true" role="link" tabindex="0" @keyup.enter="dialog = true">
    <v-img :src="image" height="220" cover class="tile-img">
    </v-img>

    <v-card-title class="pt-2 text-h6 title">{{ title }}</v-card-title>

    <v-card-subtitle class="pb-0" v-if="location">
      <v-icon size="16" class="me-1">mdi-map-marker</v-icon>
      <span :class="country"></span> {{ location }}
    </v-card-subtitle>

    <v-card-text class="desc">
      {{ description }}
    </v-card-text>

    <v-card-actions class="pb-4 px-4 chips-wrap">
      <v-chip
          v-for="(c, i) in chips"
          :key="i"
          size="small"
          class="me-1 mb-1"
          variant="flat"
          color="green-darken-2"
      >
        <v-icon start size="16">{{ c.icon }}</v-icon>
        {{ c.text }}
      </v-chip>
    </v-card-actions>
  </v-card>

  <v-dialog v-model="dialog" max-width="920">
    <v-card class="dialog-card" rounded="xl">

      <div class="dialog-bar dialog-bar--top">
        <div class="dialog-bar__text">
          <div class="dialog-bar__title">
            {{ fullTitle }}
          </div>

        </div>

        <v-spacer />
        <v-btn
            icon="mdi-close"
            variant="text"
            class="dialog-bar__btn"
            @click="dialog = false"
        />
      </div>

      <div class="dialog-body">
        <div class="dialog-bar__desc"  v-html="description" />
        <div class="media-grid">
          <v-img :src="image" height="350" cover rounded="lg" class="media-img" />
          <div class="basic" v-html="basicInformation"></div>
        </div>

        <div class="full">
          <div v-for="(section, i) in fullInformation" :key="i" class="full-section">
            <h4 v-if="section.sectionTitle" class="section-sectionTitle">{{ section.sectionTitle }}</h4>
            <h5>{{ section.title }}</h5>
            <p v-if="section.description" class="section-desc" v-html="section.description">
            </p>
            <ul v-if="section.points?.length">
              <li v-for="(p, idx) in section.points" :key="idx" v-html="p"></li>
            </ul>
            <p v-if="section.footer" class="section-desc">
              {{ section.footer }}
            </p>
            <v-divider class="mt-6" />
          </div>
        </div>

        <div v-if="videoLink" class="section-desc">
          <v-row justify="center">
            <h4>{{videoTitle}}</h4>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="12" class="d-flex justify-center">
              <VideoCard :href="videoLink" :title="fullTitle" :description="videoDescription" />
            </v-col>
          </v-row>
        </div>
      </div>

      <!-- BOTTOM BAR (sticky) -->
      <div class="dialog-bar dialog-bar--bottom">
        <v-spacer />
        <v-btn variant="text" class="dialog-bar__close" @click="dialog = false">Zavřít</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import VideoCard from "@/components/VideoCard.vue";

export default {
  name: 'TrekCard',
  components: {VideoCard},
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    fullTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: 'cz',
    },
    location: {
      type: String,
      default: '',
    },
    chips: {
      type: Array,
      default: () => [],
    },
    basicInformation: { type: String, default: '' },
    fullInformation: { type: Object, default: '' },
    videoLink: { type: String, default: '' },
    videoTitle: { type: String, default: '' },
    videoDescription: { type: String, default: '' },
  },
  data() {
    return {
      dialog: false,
      CHIP_TOOLTIPS: {
        'vzdalenost': 'Celková vzdálenost trasy',
        'obtiznost': 'Obtížnost trasy',
        'nejvyssi-bod': 'Nejvyšší bod trasy',
        'nejnizsi-bod': 'Nejnižší bod trasy',
      }
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.tile { cursor: pointer; }
.tile-img { border-top-left-radius: 24px; border-top-right-radius: 24px; }
.fav { position: absolute; top: 8px; right: 8px; }
.desc {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 10px;
}
.tile {
  background-color: #7b8f3b;
}

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
  font-size: 1.5rem;
  line-height: 1.2;
}
.dialog-bar__btn :deep(.v-icon),
.dialog-bar__close{
  color: #fff !important;
}
.dialog-bar__desc {
  font-size: 1.1rem;
  padding-top: 10px;
  padding-left: 20px;
  padding-bottom: 20px;
}

.media-grid{
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 60px;
  margin-top: 18px;
  align-items: center;
}
@media (max-width: 900px){
  .media-grid{ grid-template-columns: 1fr; }
}

.detail-desc{
  font-size: 1rem;
  line-height: 1.5;
  white-space: pre-line;
  margin-bottom: 8px;
}

.basic :deep(ul),
.full :deep(ul){
  padding-left: 18px;
  margin: 8px 0;
}
.basic :deep(li),
.full :deep(li){
  margin: 6px 0;
}
.full{ margin-top: 12px; }

.full-section {
  margin-bottom: 30px;
}

.full-section h5 {
  margin-bottom: 6px;
}

.section-desc {
  margin-top: 6px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.section-sectionTitle {
  margin-bottom: 20px;
}

.chips-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 4px;
}
</style>