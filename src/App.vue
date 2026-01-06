<template>
  <v-app class="app-container" style="background-color: #0e0e1b">
    <HeaderSection />
    <v-main class="main-content">
      <router-view style="margin-top: -70px" />
    </v-main>
    <FooterSection />
  </v-app>
</template>

<script setup>
//
import HeaderSection from "@/components/Header.vue";
import FooterSection from "@/components/Footer.vue";
</script>

<style>
@import './assets/styles/global.css';
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Nastavení minimální výšky na celou výšku okna */
}

.main-content {
  flex: 1; /* Hlavní obsah zabírá dostupný prostor */
}
</style>
