<template>
  <div class="text-slate-800">
    <Header
      v-if="navigation.data && settings.data"
      :alternate-languages="alternateLanguages"
      :navigation="navigation"
      :settings="settings"
    />
    <main><nuxt /></main>
    <Footer v-if="settings.data" :settings="settings" />
  </div>
</template>

<script>
export default {
  computed: {
    alternateLanguages () {
      return this.$store.state.prismic.alternateLanguages
    },
    navigation () {
      return this.$store.state.prismic.navigation
    },
    settings () {
      return this.$store.state.prismic.settings
    }
  }
}
</script>

<style>
body {
  @apply overflow-x-hidden antialiased;
}
</style>
