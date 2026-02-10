<template>
  <v-app-bar class="bottombar" location="bottom" flat height="30">
    <v-container class="container">
      <v-row class="footer-row" justify="space-between" align="center" no-gutters>
        <div class="d-flex align-center text-caption font-weight-medium">
          <v-toolbar-title class="clickable toolbar-title">
            Copyright © 2025 by Deflector
          </v-toolbar-title>
        </div>

        <div class="d-flex align-center ga-2 text-caption font-weight-medium">
          <v-toolbar-title class="clickable toolbar-title">
            Created by Pavel Békésky
          </v-toolbar-title>

          <v-btn
              icon="mdi-email"
              variant="text"
              density="comfortable"
              size="large"
              href="mailto:pbekesky@icloud.com"
          />
        </div>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped>

.container{
  padding-top: 6px;
  padding-bottom: 6px;
}

.bottombar{
  height: auto !important;
  min-height: 30px;
  background-color: #7b8f3b !important;
  color: #0f1a0f !important;
  box-shadow: 0 -10px 20px rgba(0,0,0,.18);
}

.bottombar :deep(.v-toolbar__content){
  height: auto !important;
  min-height: 30px;
  padding-top: 6px;
  padding-bottom: 6px;
  align-items: center;
}

.toolbar-title{
  line-height: 1.2;
  font-size: clamp(14px, 2vw, min(20px, 8vh));
}

@media (max-width: 600px){
  .footer-row{
    flex-direction: column;
    row-gap: 6px;
    justify-content: center !important;
  }
  .container{
    height: 60px;
  }
  .toolbar-title{
    line-height: 0.8;
    font-size: clamp(16px, 2vw, min(24px, 8vh));
  }
}
</style>
