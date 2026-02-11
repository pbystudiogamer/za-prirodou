<template>
  <v-container>
    <v-row >
      <v-col cols="12" class="d-flex justify-end">
        <v-btn variant="text" @click="GoBack" class="button-back">
          ← Zpět
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    GoBack() {
      this.$router.push('/blog');
    }
  }
}
</script>

<style scoped>
.button-back {
  background-color: #7b8f3b;
  color: #fff;
}
</style>