import Prismic from '@prismicio/client'

import sm from './sm.json'

export default async () => {
  const client = await Prismic.getApi(sm.apiEndpoint)
  const locales = client.languages.map(lang => lang.id)
  const defaultLocale = locales[0]

  return {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: 'Prismic + Nuxt i18n example',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Prismic + Nuxt i18n example'
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxt/postcss8'],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      '@nuxtjs/i18n',
      /* Load Prismic module after i18n module to prevent extend route concurrency */ '@nuxtjs/prismic'
    ],

    build: {
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      },
      transpile: ['@prismicio/vue']
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      '@/styles/global.css',
      '@fontsource/inter/400.css',
      '@fontsource/inter/600.css',
      '@fontsource/libre-baskerville/400.css',
      '@fontsource/libre-baskerville/400-italic.css',
      '@fontsource/libre-baskerville/700.css',
      'flag-icons/css/flag-icons.css'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    publicRuntimeConfig: {
      development: process.env.NODE_ENV === 'development'
    },

    i18n: {
      locales,
      defaultLocale
    },

    prismic: {
      endpoint: sm.apiEndpoint,
      modern: true,
      linkResolver: (doc) => {
        const prefix = doc.lang === 'en-us' ? '' : `/${doc.lang}`

        switch (doc.type) {
          case 'page':
            return doc.uid === 'home' ? prefix || '/' : `${prefix}/${doc.uid}`
          default:
            return prefix || '/'
        }
      },
      htmlSerializer (type, element, content, children) {
        switch (type) {
          case 'paragraph':
            return /* html */ `<p class="mb-7 last:mb-0">${children.join('')}</p>`

          case 'group-o-list-item':
            return /* html */ `<ol class="mb-7 pl-4 last:mb-0 md:pl-6">${children.join('')}</ol>`

          case 'o-list-item':
            return /* html */ `<li class="mb-1 list-decimal pl-1 last:mb-0 md:pl-2">${children.join('')}</li>`

          case 'group-list-item':
            return /* html */ `<ul class="mb-7 pl-4 last:mb-0 md:pl-6">${children.join('')}</ul>`

          case 'list-item':
            return /* html */ `<li class="mb-1 list-disc pl-1 last:mb-0 md:pl-2">${children.join('')}</li>`

          case 'preformatted':
            return /* html */ `<pre class="mb-7 rounded bg-slate-100 p-4 text-sm last:mb-0 md:p-8 md:text-lg">
  <code>${children.join('')}</code>
</pre>`

          case 'strong':
            return /* html */ `<strong class="font-semibold">${children.join('')}</strong>`

          case 'hyperlink':
            return /* html */ `<a href="${element.data.url}" class="underline decoration-1 underline-offset-2">${children.join('')}</a>`

          default:
            return null
        }
      }
    }
  }
}
