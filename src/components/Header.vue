<template>
  <v-app-bar class="topbar header-top-text" height="40" flat elevation="0" scroll-behavior="elevate">
    <v-container class="container">
      <v-row class="inner" align="center" justify="center" no-gutters>
        <v-col
            cols="12"
            xs="12"
            sm="12"
            md="12"
            lg="12"
            xl="10"
            class="pa-0 d-flex align-center">
          <div class="text-caption font-weight-medium">
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
        <v-spacer/>
        <!-- right -->
          <div class="top-right">
            <div class="top-right__time">
              <v-icon size="16" class="me-1">mdi-weather-sunny</v-icon>
              {{ dateTime }}
            </div>
            <div v-if="sunrise && sunset" class="top-right__sun">
              <v-icon size="16" class="me-1">mdi-weather-sunset-up</v-icon>{{ sunrise }}
              <span class="mx-2">/</span>
              <v-icon size="16" class="me-1">mdi-weather-sunset-down</v-icon>{{ sunset }}
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <div class="banner" :style="{ backgroundImage: `url(${bannerImage})` }">
    <div class="banner-overlay"></div>

    <div class="banner-content">
      <v-row justify="center" class="h-100">
        <v-col
            cols="8"
            sm="8"
            md="8"
            lg="8"
            xl="8"
        >
          <div class="banner-title">
            <h1>Deflector Bushcraft</h1>
            <h2>Výsadky & Outdoor</h2>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>

  <v-toolbar class="topbar header-top-text" height="40" dense elevatioon="4" flat v-if="$vuetify.display.mdAndUp">
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

  <v-toolbar class="topbar" height="40" flat v-if="$vuetify.display.smAndDown">
    <v-spacer />
    <v-app-bar-title class="text-right">Menu</v-app-bar-title>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
  </v-toolbar>

  <Teleport to="body">
    <v-navigation-drawer
        v-model="drawer"
        temporary
        location="right"
        :scrim="true"
        class="mobile-drawer"
    >
      <v-list nav density="comfortable">
        <v-list-item to="/" title="Úvod" @click="drawer = false" />
        <v-list-item to="/about" title="O nás" @click="drawer = false" />
        <v-list-item to="/bushcraft" title="Bushcraft" @click="drawer = false" />
        <v-list-item to="/trasy-tipy" title="Trasy & tipy" @click="drawer = false" />
        <v-list-item to="/vybava" title="Moje výbava" @click="drawer = false" />
        <v-list-item to="/bylinky" title="Bylinky" @click="drawer = false" />
        <v-list-item to="/recenze" title="Recenze výbavy" @click="drawer = false" />
        <v-list-item to="/blog" title="Blog" @click="drawer = false" />
        <v-list-item to="/kontakty" title="Kontakty" @click="drawer = false" />
      </v-list>
    </v-navigation-drawer>
  </Teleport>

</template>

<script>
import banner from '@/assets/banner.jpg';
import { ref } from "vue";


export default {
  name: 'Header',
  data() {
    return {
      drawer: ref(false),
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
  watch: {
    '$vuetify.display.mdAndUp'(isDesktop) {
      if (isDesktop) this.drawer = false;
    },
    $route() {
      this.drawer = false;
    },
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

.container{
  padding-left: 8px;
  padding-right: 8px;
}

.top-right{
  display: flex;
  align-items: center;
  gap: 12px;
}

.top-right__time,
.top-right__sun{
  display: flex;
  align-items: center;
  white-space: nowrap;
}

/* MOBIL */
@media (max-width: 500px){
  .header-top-text{
    font-size: 12px !important;
  }

  .top-right{
    flex-direction: column;
    align-items: flex-end;
    gap: 0;
    line-height: 1;
  }

  .top-right .v-icon{
    font-size: 14px !important;
  }

  .topicon{
    width: 32px;
    height: 32px;
  }
}

.topbar {
  background-color: #7b8f3b !important;
  color: #0f1a0f !important;

}

.top-row {
  display: flex;
  gap: 24px;   /* celková vzdálenost mezi left a right */
}

.header-top-text {
  font-size: 18px !important;
}

.banner{
  position: relative;
  height: 360px;                /* desktop */
  width: 100%;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}

/*lg*/
@media (max-width: 1264px) {
  .banner{
    height: 320px;
    background-size: auto 260%;
    background-position: 30% -5%;
  }
}

/*md*/
@media (max-width: 960px) {
  .banner{
    height: 260px;
    background-size: auto 240%;
    background-position: 30% -5%;
  }
}

/*sm*/
@media (max-width: 600px) {
  .banner{
    height: 200px;
    background-size: auto 220%;
    background-position: 30% -5%;
  }
}

/*sm*/
@media (max-width: 400px) {
  .banner{
    height: 160px;
    background-size: auto 220%;
    background-position: 20% -5%;
  }
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

.h-100 {
  height: 100%;
}

.banner-content{
  position: absolute;
  inset: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  padding-top: 60px;
}

.menu {
  gap: 20px;
}

@media (max-width: 1264px) {
  .menu {
    gap: 8px;
  }
}

@media (max-width: 960px) {
  .menu {
    gap: 0px;
  }
  .menu .v-btn {
    padding-left: 4px;
    padding-right: 4px;
    min-width: auto;
  }
}

@media (max-width: 600px) {
  .menu {
    gap: 0px;
  }
}

.nav-link {
  text-transform: none;
  font-weight: 600;
}
.active-link {
  opacity: 1;
  text-decoration: underline;
}

.mobile-drawer {
  top: 300px !important;
  background-color: #5e6e2e !important;

}

@media (max-width: 600px) {
  .mobile-drawer {
    top: 240px !important;
  }
}

@media (max-width: 400px) {
  .mobile-drawer {
    top: 200px !important;
  }
}

</style>