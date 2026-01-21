<template>
  <v-app class="app-container">
    <div class="app-header">
      <HeaderSection />
    </div>

    <v-main class="main-content">
      <div class="scroll-area">
        <v-container class="content-container">
          <router-view v-slot="{ Component, route }">
            <v-slide-x-transition mode="out-in">
              <div :key="route.fullPath">
                <component :is="Component" />
              </div>
            </v-slide-x-transition>
          </router-view>
        </v-container>

      </div>
    </v-main>

    <div class="app-footer">
      <FooterSection />
    </div>
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
  min-height: 100vh;
  background-color: #F5F5DC !important;
  color: #0f1a0f !important;
}

.main-content {
  padding-top: 24px;
  padding-bottom: 48px;
}

/* šířka sloupce + centrování */
.content-container {
  max-width: 60%; /* uprav podle potřeby */
  margin: 0 auto;
}
@media(max-width: 1024px) {
  .content-container {
    max-width: 80%; /* uprav podle potřeby */
    margin: 0 auto;
  }
}


.app-header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
}

.app-footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: auto;              /* důležité */
  z-index: 2000;
}

.main-content{
  margin-top: 450px;      /* výška headeru */
  margin-bottom: 80px;    /* výška footeru */
}

@media (max-width: 1264px) {
  .main-content{
    margin-top: 400px;
  }
}
@media (max-width: 960px) {
  .main-content{
    margin-top: 350px;
  }
}
@media (max-width: 600px) {
  .main-content{
    margin-top: 300px;
  }
}

.scroll-area{
  height: 100%;
  overflow-y: auto;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
