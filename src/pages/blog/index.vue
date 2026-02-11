<template>
  <v-container>
    <v-row justify="center" style="margin-bottom: 50px">
      <v-col cols="12">
        <h4 class="text-center">
          Blog
        </h4>
      </v-col>
    </v-row>
    <v-row class="index-text" justify="center" no-gutters>
      <div class="text-center">
        Tipy, zkušenosti a inspirace ze světa bushcraftu a outdooru.
        <br>
        Články o technikách, vybavení i příbězích z cest, které vás přiblíží k přírodě.
      </div>
    </v-row>

    <v-row>
      <v-col
          v-for="item in items"
          :key="item.title" cols="12" md="6" class="d-flex flex-column align-center">
        <v-card
            class="tile"
            rounded="xl"
            width="420"
            elevation="6"
            @click="go(item.href)"
            role="button"
            tabindex="0"
            style="cursor: pointer"
        >
          <v-img :src="item.image" height="220" cover class="tile-img" position="center 0%" />
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text class="desc">{{ item.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script >
export default {
  name: "blog",
  components: {

  },
  data() {
    return {
      items: [
        {
          title: 'Pobyt a spaní v přírodě legálně',
          description: 'Základní informace ohledně spaní v přírodě.',
          href: '/blog/01-pobyt'
        },
        {
          title: '5 největších chyb, které udělá každý začínající bushcrafter (a jak se jim vyhnout)\n',
          description: 'Jak se vyhnout nejčastějším chybám jako začínající bushcrafter',
          href: '/blog/02-pet-chyb'
        },
      ]
    }
  },
  created() {
    const modules = import.meta.glob("/src/assets/blog/*.{jpg,jpeg,png,webp,avif}", {
      eager: true,
      import: "default",
    });

    const imgs = Object.entries(modules)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([, v]) => v);

    this.items = this.items.map((it, idx) => ({
      ...it,
      image: imgs[idx] ?? "",
    }));
  },
  methods: {
    go(path) {
      this.$router.push(path);
    }
  },
}
</script>

<style scoped>
.tile { cursor: pointer; background-color: #7b8f3b; }
.tile-img { position: relative; }

</style>