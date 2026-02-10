<template>
  <v-container>
      <v-row justify="center" style="margin-bottom: 50px">
        <v-col cols="12">
          <h4 class="text-center">
            Kontakty
          </h4>
        </v-col>
      </v-row>

      <v-row class="index-text" justify="center" no-gutters>
        <div class="text-center">
         Máte dotaz, tip na trasu nebo zájem o spolupráci?
          <br>
          Kontaktujte nás prostřednictvím e-mailu, formuláře nebo na našich sociálních sítích. Jsme tu pro vás!
        </div>
      </v-row>

      <v-row justify="center" no-gutters class="index-text">
        <div class="socials">
          <v-btn
              v-for="i in socialLinks"
              :key="i.icon"
              :icon="i.icon"
              variant="text"
              size="x-large"
              :href="i.href"
              target="_blank"
          />
        </div>
      </v-row>

      <v-row justify="center" class="mt-8">
        <v-col cols="12" class="d-flex justify-center">
          <v-img
              :src="kontaktyImage"
              height="100%"
              max-width="1000"
              cover
              class="kontakty-image"
          />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import kontakty from '@/assets/kontakty.png';
export default {
  data() {
    return {
      kontaktyImage: kontakty,
      socialLinks: [
        { icon: 'mdi-email', href: 'mailto:DeflectorCZ@gmail.com', target: '_blank', rel: 'noopener noreferrer'},
        { icon: 'mdi-facebook', href: 'https://www.facebook.com/groups/deflectoraprochazkari', target: '_blank', rel: 'noopener noreferrer'},
        { icon: 'mdi-instagram', href: 'https://www.instagram.com/deflector_bushcraft', target: '_blank', rel: 'noopener noreferrer' },
        { icon: 'mdi-youtube', href: 'https://www.youtube.com/c/DeflectorBushcraft', target: '_blank', rel: 'noopener noreferrer' }
      ],
    }
  }
}
</script>

<style scoped>
.index-text {
  font-family: "Josefin Sans", sans-serif;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 40px;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.v-btn {
  font-size: 40px;
}

.kontakty-image{
  border-radius: 18px;
  overflow: hidden;
}
</style>