import { repositoryName } from './slicemachine.config.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Prismic + Nuxt blog example',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Prismic + Nuxt blog example'
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },

  css: [
    '~/styles/global.css',
    '@fontsource/inter/400.css',
    '@fontsource/inter/600.css',
    '@fontsource/libre-baskerville/400.css',
    '@fontsource/libre-baskerville/400-italic.css',
    '@fontsource/libre-baskerville/700.css',
    'flag-icons/css/flag-icons.css'
  ],

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/prismic',
    '@nuxtjs/tailwindcss'
  ],

  i18n: {
    locales: ['en-us', 'fr-fr'],
    defaultLocale: 'en-us'
  },

  prismic: {
    endpoint: repositoryName,
    preview: '/api/preview'
  },

  compatibilityDate: '2025-01-06',
})