<template>
  <v-app-bar class="topbar" height="40" flat: elevation="0" scroll-behavior="fully-hide">
    <v-container class="container">
      <v-row class="inner" align="center" justify="space-between" no-gutters>
        <!-- right: icons -->
        <div class="text-caption font-weight-medium">
          <v-btn
              v-for="i in socialLinks"
              :key="i.icon"
              :icon="i.icon"
              variant="text"
              density="comfortable"
              size="small"
              class="topicon"
              :href="i.href"
              target="_blank"
          />
        </div>
        <v-toolbar-title class="clickable" @click="goToHome">
          Za přírodou
        </v-toolbar-title>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      socialLinks: [
        { icon: 'mdi-facebook', href: '#' },
        { icon: 'mdi-instagram', href: '#' },
        { icon: 'mdi-twitter', href: '#' },
        { icon: 'mdi-youtube', href: '#' },
        { icon: 'mdi-tiktok', href: '#' },
      ],
      bannerImage: '/banner.jpg',
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.topbar {
  background: #1548c9;
  color: #0f1a0f;
}
</style>