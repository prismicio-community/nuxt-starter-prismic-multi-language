<template>
  <div>
    <header-prismic :menuLinks="menuLinks" :altLangs="altLangs" />
    <!-- Slice Zone handle API query for body content -->
    <main>
      <div>
        <slice-zone
          :lang="$route.params.lang"
          :uid="$route.params.uid"
          type="page"
        />
      </div>
    </main>
  </div>
</template>

<script>
import HeaderPrismic from "~/components/HeaderPrismic.vue";
import SliceZone from "vue-slicezone";

export default {
  name: "page",
  components: {
    HeaderPrismic,
    SliceZone,
  },
  head() {
    return {
      title: "Prismic Nuxt.js Multi Page Website",
    };
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Languages from API response
      let languages = $prismic.api.data.languages;

      // Setting Master language as default language option
      let lang = { lang: languages[0].id };

      // If there is a langauge code in the URL set this as language option
      if (params.lang !== undefined || null) {
        lang = { lang: params.lang };
      }

      // Query to get alt languages
      const result = await $prismic.api.getSingle("homepage", lang);

      // Query to get menu content
      const menuContent = (await $prismic.api.getSingle("top_menu", lang)).data;

      return {
        // Menu
        menuLinks: menuContent.menu_links,
        altLangs: result.alternate_languages,
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
