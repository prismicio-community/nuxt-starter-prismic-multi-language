<template>
  <div>
    <nuxt />
    <footer-prismic />
  </div>
</template>

<script>
import FooterPrismic from "~/components/FooterPrismic.vue";

export default {
  head() {
    return {
      title: "Prismic Nuxt.js Multi Page Website"
    };
  }
};
</script>