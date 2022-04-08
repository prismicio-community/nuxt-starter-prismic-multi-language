<template>
  <Layout :altLangs="home.alternate_languages" :menu="menu">
    <SliceZone :slices="home.data.slices" :components="components" />
  </Layout>
</template>

<script>
import { components } from "~/slices";

export default {
  data() {
    return { components };
  },
  async asyncData({ $prismic, i18n }) {
    const lang = i18n.locale;

    const home = await $prismic.api.getSingle("homepage", { lang });
    const menu = await $prismic.api.getSingle("menu", { lang });

    return {
      home,
      menu,
    };
  },
};
</script>
