<template>
  <div>
    <!-- Vue tag to add header component -->
    <header-prismic />
    <!-- <header-prismic :menuLinks="menuLinks" :altLangs="altLangs"/> -->
    <!-- Slices block component -->
    <slices-block :slices="slices" />
    <footer-prismic />
  </div>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
// Imports for all components
import HeaderPrismic from "~/components/HeaderPrismic.vue";
import SlicesBlock from "~/components/SlicesBlock.vue";
import FooterPrismic from "~/components/FooterPrismic.vue";

export default {
  name: "Home",
  components: {
    HeaderPrismic,
    SlicesBlock,
    FooterPrismic
  },
  head() {
    return {
      title: "Prismic Nuxt.js Multi Page Website"
    };
  },
  async asyncData({ params, error, req }) {
    try {
      // // Fetching the API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      // Languages from API response
      let languages = api.data.languages;

      // Setting Master language as default language option
      let lang = { lang: languages[0].id };

      // If there is a langauge code in the URL set this as language option
      if (params.lang !== undefined || null) {
        lang = { lang: params.lang };
      }

      // Query to get the home page content
      let document = {};
      const result = await api.getSingle("homepage", lang);
      document = result.data;

      // // Query to get the menu content
      // let menuContent = {}
      // const menu = (await api.getSingle('menu', lang))
      // menuContent = menu.data

      return {
        // Page content
        document,
        // Set slices as variable
        slices: document.body

        // // Menu
        // altLangs: result.alternate_languages,
        // menuContent,
        // menuLinks: menuContent.menu_links
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="sass" scoped>
*, html
  margin: 0
  padding: 0
  border: 0
  font-size: 100%

  body
    font-family: 'Roboto', sans-serif
    letter-spacing: 0

  button:focus
    outline: 0

  .auto-grid
    display: grid
    grid-template-columns: repeat( auto-fill, minmax(var(--auto-grid-min-size), 1fr))
    grid-gap: 2rem
    max-width: inherit

  main, header, footer
    padding: 30px 60px
    margin: 0 auto

  main section
    padding-bottom: 8%

  @media (min-width: 1100px)
    header, footer
      padding: 38px 80px

  @media (min-width: 1200px)
    main
      max-width: 1080px
      margin: auto

    header, footer
      padding: 38px 7%
</style>
