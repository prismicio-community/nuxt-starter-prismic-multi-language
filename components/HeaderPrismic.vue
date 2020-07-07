<template>
  <header class="site-header">
    <nuxt-link to="./" class="logo">Example Site</nuxt-link>
    <nav>
      <ul>
        <li v-for="menuLink in menuLinks" :key="menuLink.id">
          <prismic-link :field="menuLink.link">{{ $prismic.richTextAsPlain(menuLink.label) }}</prismic-link>
        </li>
        <li v-for="altLang in altLangs" :key="altLang.id">
          <nuxt-link :to="linkResolver(altLang)"><span :class="'flag-icon flag-icon-' + altLang.lang.slice(-2)"></span></nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import linkResolver from "~/plugins/link-resolver"

export default {
  props: ['menuLinks', 'altLangs'],
  name: 'header-prismic',
  data () {
    return {
      linkResolver
    }
  }
}
</script>

<style lang="sass">

</style>


