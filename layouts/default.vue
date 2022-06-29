<template>
  <div class="text-slate-800">
    <!-- TODO: Remove the following element once you have read the documentation. -->
    <div
      v-if="$config.development"
      :style="{
        background: '#5163ba',
        padding: '1rem',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: '#fff'
      }"
    >
      <p>
        <strong>👋 Welcome to your new website!</strong> To customize the code
        and content of this site,&nbsp;<a
          href="https://github.com/prismicio-community/nuxt-starter-prismic-multi-language/tree/master/docs"
          target="_blank"
          rel="noreferrer"
          :style="{
            textDecoration: 'underline'
          }"
          >see the documentation</a
        >. Remove this bar in <code>layouts/default.vue</code>.
      </p>
    </div>
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
