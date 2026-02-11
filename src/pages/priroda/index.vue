<template>
  <v-container>
    <v-row justify="center" style="margin-bottom: 50px">
      <v-col cols="12">
        <h3 class="text-center">Příroda</h3>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" class="d-flex flex-column align-center">
        <h4 class="mb-4">Bylinky</h4>
        <v-card
            class="tile"
            rounded="xl"
            width="420"
            elevation="6"
            @click="go('/priroda/bylinky')"
            role="button"
            tabindex="0"
            style="cursor: pointer"
        >
          <v-img :src="herbsTile.image" height="220" cover class="tile-img" position="center 20%" />
          <v-card-title>{{ herbsTile.title }}</v-card-title>
          <v-card-text class="desc">{{ herbsTile.description }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" class="d-flex flex-column align-center">
        <h4 class="mb-4">Vzdělávání</h4>
        <v-card
            class="tile"
            rounded="xl"
            width="420"
            elevation="6"
            @click="go('/priroda/vzdelavani')"
            role="button"
            tabindex="0"
            style="cursor: pointer"
        >
          <v-img :src="eduTile.image" height="220" cover class="tile-img" position="center 15%"  />
          <v-card-title>{{ eduTile.title }}</v-card-title>
          <v-card-text class="desc">{{ eduTile.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HerbCard from "@/components/HerbCard.vue";
import bylinkyImage from "@/assets/sekce-rostliny.jpg";
import vzdelavaniImage from "@/assets/sekce-vzdelavani.png";

export default {
  components: { HerbCard },
  data() {
    return {
      herbsTile: {
        image: bylinkyImage,
        title: "Bylinky",
        description: "Atlas bylin, stromů a léčivých rostlin.",
      },
      eduTile: {
        image: vzdelavaniImage,
        title: "Vzdělávání o přírodě",
        latinTitle: "",
        description: "Články, zajímavosti a videa o přírodě.",
      },
    };
  },
  methods: {
    go(path) {
      this.$router.push(path);
    }
  },
};
</script>

<style lang="scss" scoped>
.tile { cursor: pointer; background-color: #7b8f3b; }
.tile-img { position: relative; }

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