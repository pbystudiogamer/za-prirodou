

<template>
  <v-form @submit.prevent="send">
    <v-text-field
        v-model="email"
        label="Váš e-mail"
        type="email"
        required
    />

    <v-textarea
        v-model="message"
        label="Zpráva"
        rows="4"
        required
    />

    <v-btn type="submit" color="green">
      Odeslat
    </v-btn>
  </v-form>
</template>
<script>
export default {
  name: "ContactForm",
  data() {
    return {
      email: '',
      message: '',
    }
  }
}
</script>

<style scoped>

</style>