<template>
    <v-card class="tile" rounded="xl" width="420"  elevation="6" @click="open" role="link" tabindex="0" @keyup.enter="open">
      <v-img :src="image" height="220" cover class="tile-img">
      </v-img>

      <v-card-title class="pt-2 text-h6 title">{{ title }}</v-card-title>

      <v-card-text class="desc">
        {{ description }}
      </v-card-text>

    </v-card>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    id: Number,
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    href: String,
  },
  methods: {
    open() {
      window.open(this.href, this.target)
    },
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