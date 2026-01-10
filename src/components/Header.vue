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

          </v-toolbar-title>
        </div>

        <!-- middle: datetime -->
        <div class="header-top-text text-caption font-weight-medium d-flex align-center">
          <v-icon size="16" class="me-1">mdi-weather-sunny</v-icon>
          {{ dateTime }}
          <span v-if="sunrise && sunset" class="ms-3 d-flex align-center">
            <v-icon size="16" class="me-1">mdi-weather-sunset-up</v-icon>{{ sunrise }}
            <span class="mx-2">/</span>
            <v-icon size="16" class="me-1">mdi-weather-sunset-down</v-icon>{{ sunset }}
          </span>
        </div>

      </v-row>
    </v-container>
  </v-app-bar>


  <div class="banner">
    <div class="banner-overlay"></div>

    <div class="banner-content">
      <v-row>
        <v-col cols="8" class="d-flex justify-center">
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
          <v-btn class="nav-link" to="/bylinky">Bylinky</v-btn>
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
      currentTime: new Date().toLocaleTimeString('cs-CZ', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }),
      currentDate: new Date().toLocaleDateString('cs-CZ'),
      sunrise: null,
      sunset: null,
      _timer: null,
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
    this._timer = setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString('cs-CZ', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
    }, 1000)

    this.loadSunTimes()
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    async loadSunTimes() {
      const lat = 49.8175
      const lng = 15.4730

      const r = await fetch(
          `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`
      )
      const j = await r.json()
      if (j.status !== 'OK') return

      this.sunrise = new Date(j.results.sunrise).toLocaleTimeString('cs-CZ', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })

      this.sunset = new Date(j.results.sunset).toLocaleTimeString('cs-CZ', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    }
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

  background-image: url('@/assets/banner.jpg');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}

.banner-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
}
.banner-title {
  text-shadow: 0 2px 6px rgba(0,0,0,0.65);
  line-height: 1.1;
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