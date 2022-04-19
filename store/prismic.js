export const state = () => ({
  alternateLanguages: [],
  settings: {},
  navigation: {}
})

export const mutations = {
  setAlternateLanguages (state, alternateLanguages) {
    state.alternateLanguages = alternateLanguages
  },
  setSettings (state, settings) {
    state.settings = settings
  },
  setNavigation (state, navigation) {
    state.navigation = navigation
  }
}

export const actions = {
  async load (store, { lang, page = { alternate_languages: [] } }) {
    const navigation = await this.$prismic.api.getSingle('navigation', { lang })
    const settings = await this.$prismic.api.getSingle('settings', { lang })
    store.commit('setNavigation', navigation)
    store.commit('setSettings', settings)
    store.commit('setAlternateLanguages', page.alternate_languages)
  }
}
