const pkg = require("./package");

export default {
  mode: "universal",
  target: "static",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: pkg.description,
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.png",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.3.0/css/flag-icon.min.css",
      },
    ],
    script: [
      {
        src:
          "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList",
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js",
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff",
  },

  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/resetr.css",
    "@/assets/css/common.css",
    "vue-essential-slices/src/styles/styles.scss",
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/prismic", ["nuxt-sm"]],
  prismic: {
    endpoint: "https://your-repo-name.cdn.prismic.io/api/v2",
    disableGenerator: false,
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    },

    transpile: ["vue-slicezone", "nuxt-sm"],
  },
  generate: {
    fallback: "404.html", // Netlify reads a 404.html, Nuxt will load as an SPA
  },
};
