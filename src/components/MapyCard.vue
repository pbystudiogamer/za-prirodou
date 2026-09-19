<template>
  <v-card rounded="xl" max-width="600" elevation="6">
    <v-card-title v-if="title">{{ title }}</v-card-title>

    <iframe
        :src="href"
        :title="title || 'Mapa trasy'"
        class="map-frame"
        loading="lazy"
    ></iframe>

    <v-card-actions>
      <v-btn :href="href" :target="target" rel="noopener noreferrer">
        Otevřít v Mapy.com
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MapyCard',
  props: {
    title: String,
    href: { type: String, required: true },
    target: { type: String, default: '_blank' },
  },
}
</script>

<style scoped>
.map-frame {
  display: block;
  width: 100%;
  height: 280px;
  border: 0;
}
</style>