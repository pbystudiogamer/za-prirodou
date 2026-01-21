<template>
  <v-app-bar class="bottombar" location="bottom" flat height="50">
    <v-container class="container">
      <v-row class="" justify="space-around" no-gutters>
        <div class="d-flex align-center text-caption font-weight-medium ">
          <v-toolbar-title class="clickable toolbar-title">
            Copyright © 2025 by Deflector
          </v-toolbar-title>
        </div>
        <div class="d-flex align-center ga-6 text-caption font-weight-medium">
          <v-toolbar-title class="clickable toolbar-title"  @click="">
            Created by Pavel Békésky
            <v-btn
                icon="mdi-email"
                variant="text"
                density="comfortable"
                size="large"
                href="mailto:pbekesky@icloud.com"
            />
          </v-toolbar-title>
        </div>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "Footer",
  data () {
    return {
      SocialLinks: [
        { icon: 'mdi-instagram', href: 'https://www.instagram.com/deflector_bushcraft', target: '_blank', rel: 'noopener noreferrer' },
      ]
    }
  }
}
</script>

<style scoped>
.bottombar {
  background-color: #7b8f3b !important;
  color: #0f1a0f !important;
}

@media(max-width: 600px) {
  .bottombar {
    height: 80px !important;
  }
}
</style>