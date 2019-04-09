<template>
  <section class="page">
    <!-- Vue tag to add header component -->
    <header-prismic :menuLinks="menuLinks" :altLangs="altLangs"/>
    <!-- Button to edit document in dashboard -->
    <prismic-edit-button :documentId="documentId"/>
    <!-- Slices block component -->
    <slices-block :slices="slices"/>
  </section>
</template>

<script>
import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"
// Imports for all components
import HeaderPrismic from '~/components/HeaderPrismic.vue'
import SlicesBlock from '~/components/SlicesBlock.vue'

export default {
  name: 'page',
  components: {
    HeaderPrismic,
    SlicesBlock,
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
  async asyncData({ params, error, req }) {
    try{
      // Fetching the API object
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      // Languages from API response
      let languages = api.data.languages

      // Setting Master language as default language option
      let lang = { lang : languages[0].id }

      // If there is a langauge code in the URL set this as language option
      if (params.lang !== undefined || null) { 
        lang = { lang : params.lang }
      }
      
      // Query to get post content
      let document = {}
      const result = await api.getByUID("page", params.uid, lang)
      document = result.data

      // Query to get the menu content
      let menuContent = {}
      const menu = await api.getSingle('menu', lang)
      menuContent = menu.data

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      return {
        // Post content
        document,
        documentId: result.id,

        // Set slices as variable
        slices: document.page_content,

        // Menu
        altLangs: result.alternate_languages,
        menuContent,
        menuLinks: menuContent.menu_links
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>