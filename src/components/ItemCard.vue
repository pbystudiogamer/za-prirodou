

<template>
    <v-card class="tile" rounded="xl" width="340"  elevation="6" @click="open" role="link" tabindex="0" @keyup.enter="open">
      <v-img :src="image" height="220" cover class="tile-img">
      </v-img>

      <v-card-title class="pt-2 text-h6 title">{{ title }}</v-card-title>

      <v-card-subtitle class="pb-0" v-if="location" >
        <v-icon size="16" class="me-1">mdi-map-marker</v-icon>
        {{ location }}
      </v-card-subtitle>

      <v-card-text class="desc">
        {{ description }}
      </v-card-text>

      <v-card-actions class="pb-4 px-4">
        <v-chip v-for="(c, i) in chips" :key="i" size="small" class="me-2" variant="flat" color="green-darken-2">
          <v-icon start size="16">{{ c.icon }}</v-icon>
          {{ c.text }}
        </v-chip>
        <v-spacer />
        <v-icon>mdi-arrow-top-right</v-icon>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: 'TrailTile',
  props: {
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
    href: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      default: '',
    },
    chips: {
      type: Array,
      default: () => [],
    },
    target: {
      type: String,
      default: '_blank',
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
</style>