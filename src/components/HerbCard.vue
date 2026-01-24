<template>
  <v-card
      class="tile"
      rounded="xl"
      width="300"
      elevation="6"
      @click="dialog = true"
      role="button"
      tabindex="0"
      @keyup.enter="dialog = true"
  >
    <v-img :src="image" height="220" cover class="tile-img" />
    <v-card-title class="card-title">{{ title }}</v-card-title>
    <v-card-text class="desc">{{ latinTitle }}</v-card-text>
  </v-card>

  <v-dialog v-model="dialog" max-width="920">
    <v-card class="dialog-card" rounded="xl">

      <div class="dialog-bar dialog-bar--top">
        <div class="dialog-bar__text">
          <div class="dialog-bar__title">
            {{ title }} <span class="ms-2">{{ latinTitle }}</span>
          </div>
          <div class="dialog-bar__desc">
            {{ description }}
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

      <!-- BODY (scroll) -->
      <div class="dialog-body">
        <div class="media-grid">
          <v-img :src="image" height="350" cover rounded="lg" class="media-img" />
          <div class="basic" v-html="basicInformation"></div>
        </div>

        <div class="full">
          <div v-for="(section, i) in fullInformation" :key="i" class="full-section">
            <h4 v-if="section.sectionTitle" class="section-sectionTitle">{{ section.sectionTitle }}</h4>
            <h5>{{ section.title }}</h5>

            <ul v-if="section.points?.length">
              <li v-for="(p, idx) in section.points" :key="idx" v-html="p"></li>
            </ul>

            <p v-if="section.description" class="section-desc">
              {{ section.description }}
            </p>

            <v-divider class="mt-6" />
          </div>
        </div>

        <div v-if="videoLink" class="section-desc">
          <v-row justify="center">
            <h4>{{videoTitle}}</h4>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" md="4" class="d-flex justify-center">
              <VideoCard :href="videoLink" :title="title" :description="latinTitle" />
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
  name: 'HerbCard',
  components: {VideoCard},
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    latinTitle: { type: String, default: '' },
    description: { type: String, default: '' },
    basicInformation: { type: String, default: '' },
    fullInformation: { type: Object, default: '' },
    videoLink: { type: String, default: '' },
    videoTitle: { type: String, default: '' },
  },
  computed: {
    youtubeId() {
      const url = this.videoLink || ''
      const m =
          url.match(/[?&]v=([^&]+)/)?.[1] ||
          url.match(/youtu\.be\/([^?&/]+)/)?.[1] ||
          url.match(/youtube\.com\/shorts\/([^?&/]+)/)?.[1] ||
          url.match(/youtube\.com\/embed\/([^?&/]+)/)?.[1] ||
          ''
      return m
    },
    thumbSrc() {
      if (this.thumbnail) return this.thumbnail
      if (!this.youtubeId) return ''
      return `https://img.youtube.com/vi/${this.youtubeId}/maxresdefault.jpg`
    },
  },
  data() {
    return { dialog: false }
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

</style>