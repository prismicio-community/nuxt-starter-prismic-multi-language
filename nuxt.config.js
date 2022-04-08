import Prismic from "@prismicio/client";

import sm from "./sm.json";

export default async () => {
  const client = await Prismic.getApi(sm.apiEndpoint);

  const locales = client.languages.map((lang) => lang.id);

  return {
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: "Prismic + Nuxt blog example",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Prismic + Nuxt blog example",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxt/postcss8", "@nuxtjs/prismic"],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ["@nuxtjs/i18n"],

    build: {
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      transpile: ["@prismicio/vue"],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
      "@/styles/global.css",
      "@fontsource/inter/400.css",
      "@fontsource/inter/700.css",
      "flag-icons/css/flag-icons.css",
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    i18n: {
      locales,
      defaultLocale: locales[0],
      parsePages: false,
      pages: {
        preview: false,
      },
    },

    prismic: {
      endpoint: sm.apiEndpoint,
      modern: true,
    },
  };
};
