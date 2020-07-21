<template>
  <div>
    <header-prismic :menuLinks="menuLinks" :altLangs="altLangs"/>
    <!-- Slices block component -->
    <slices-block :slices="slices" />
  </div>
</template>

<script>
import HeaderPrismic from "~/components/HeaderPrismic.vue";
import SlicesBlock from "~/components/SlicesBlock.vue";

export default {
  name: "page",
  components: {
    HeaderPrismic,
    SlicesBlock
  },
  head() {
    return {
      title: "Prismic Nuxt.js Multi Page Website"
    };
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Languages from API response
      let languages = $prismic.api.data.languages

      // Setting Master language as default language option
      let lang = { lang: languages[0].id }

      // If there is a langauge code in the URL set this as language option
      if (params.lang !== undefined || null) {
        lang = { lang: params.lang }
      }

      // Query to get post content
      const result = await $prismic.api.getByUID('page', params.uid, lang)

      const menuContent = (await $prismic.api.getSingle('top_menu', lang )).data

      return {
        // Page content, set slices as variable
        slices: result.data.body,

        // Menu
        menuLinks: menuContent.menu_links,
        altLangs: result.alternate_languages
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
