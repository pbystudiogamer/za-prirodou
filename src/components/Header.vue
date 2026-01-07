<template>
  <v-app-bar class="topbar header-top-text" height="40" flat: elevation="0" scroll-behavior="elevate">
    <v-container class="container">
      <v-row class="inner" align="center" justify="space-around" no-gutters>
        <!-- left: icons -->
        <div class=" text-caption font-weight-medium">
          <v-btn
              v-for="i in socialLinks"
              :key="i.icon"
              :icon="i.icon"
              variant="text"
              density="comfortable"
              size="large"
              class="topicon"
              :href="i.href"
              target="_blank"
          />
        </div>
        <!-- middle: title -->
        <div class="d-flex align-center ga-6 text-caption font-weight-medium">
          <v-toolbar-title class="clickable toolbar-title" @click="goToHome">
            Za přírodou
          </v-toolbar-title>
        </div>

        <!-- middle: datetime -->
        <div class="header-top-text text-caption font-weight-medium">
          {{ dateTime }}
        </div>
      </v-row>
    </v-container>
  </v-app-bar>


  <div class="banner">
    <div class="banner-overlay"></div>

    <div class="banner-content">
      <v-row>
        <v-col cols="7" class="d-flex justify-center">
          <div class="banner-title">
            <h1>Deflector Bushcraft</h1>
            <h2>Výsadky & Outdoor</h2>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
  <v-toolbar class="topbar header-top-text" height="40" dense elevatioon="4" flat>
    <v-container class="container">
      <v-row class="inner justify-center" align="center" no-gutters>
        <nav class="menu d-flex justify-center align-center">
          <v-btn class="nav-link" to="/" active-class="active-link">Úvod</v-btn>
          <v-btn class="nav-link" to="/about">O nás</v-btn>
          <v-btn class="nav-link" to="/bushcraft">Bushcraft</v-btn>
          <v-btn class="nav-link" to="/trasy-tipy">Trasy & tipy</v-btn>
          <v-btn class="nav-link" to="/vybava">Moje výbava</v-btn>
          <v-btn class="nav-link" to="/recenze">Recenze výbavy</v-btn>
          <v-btn class="nav-link" to="/blog">Blog</v-btn>
          <v-btn class="nav-link" to="/kontakty">Kontakty</v-btn>
        </nav>
      </v-row>
    </v-container>
  </v-toolbar>
</template>

<script>
import banner from '@/assets/banner.jpg';

export default {
  name: 'Header',
  data() {
    return {
      currentTime: new Date().toLocaleTimeString(),
      currentDate: new Date().toLocaleDateString(),
      socialLinks: [
        {
          icon: 'mdi-facebook', href: 'https://www.facebook.com/groups/deflectoraprochazkari', target: '_blank', rel: 'noopener noreferrer'
        },
        { icon: 'mdi-instagram', href: 'https://www.instagram.com/deflector_bushcraft', target: '_blank', rel: 'noopener noreferrer' },
        { icon: 'mdi-youtube', href: 'https://www.youtube.com/c/DeflectorBushcraft', target: '_blank', rel: 'noopener noreferrer' }
      ],
      bannerImage: banner,
    }
  },
  computed: {
    dateTime() {
      return this.currentDate + " " + this.currentTime;
    }
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
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
  background-color: #7b8f3b !important;
  color: #0f1a0f !important;

}

.header-top-text {
  font-size: 18px !important;
}

.toolbar-title {
  font-size: 22px !important;
  font-weight: 500;
}

.banner {
  position: relative;
  height: 35vh;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  background-image: url('@/assets/banner.jpg'); /* <- změň cestu */
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35); /* volitelné ztmavení */
}

.banner-content {
  position: absolute;
  inset: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
}

</style>