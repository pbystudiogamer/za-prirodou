<template>
  <v-card class="tile" rounded="xl" width="380" elevation="6" @click="open" role="link" tabindex="0" @keyup.enter="open">
    <v-img :src="thumbSrc" height="220" cover class="tile-img">
      <div class="play">
        <v-icon size="44">mdi-play-circle</v-icon>
      </div>
    </v-img>
    <v-card-title>{{ title }}</v-card-title>

    <v-card-text class="desc">
      {{ description }}
    </v-card-text>

  </v-card>
</template>

<script>
export default {
  name: 'VideoCard',
  props: {
    href: { type: String, required: true }, // YouTube URL
    title: { type: String, required: true },
    description: { type: String, default: '' },
    target: { type: String, default: '_blank' },
    thumbnail: { type: String, default: '' },
  },
  computed: {
    youtubeId() {
      const url = this.href || ''
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
  methods: {
    open() {
      window.open(this.href, this.target)
    },
  },
}
</script>

<style scoped>
.tile { cursor: pointer; background-color: #7b8f3b; }
.tile-img { border-top-left-radius: 24px; border-top-right-radius: 24px; position: relative; }
.fav { position: absolute; top: 8px; right: 8px; z-index: 2; }
.play {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(0,0,0,.15);
}

.v-card-title {
  font-size: 1.2rem;
  line-height: 1.25;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.v-card-text.desc {
  font-size: 0.85rem;
  line-height: 1.35;
  margin-top: -6px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.v-card {
  padding-bottom: 8px;
}
</style>
