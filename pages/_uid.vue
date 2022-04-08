<template>
  <Layout :altLangs="page.alternate_languages" :menu="menu">
    <SliceZone :slices="page.data.slices" :components="components" />
  </Layout>
</template>

<script>
import { components } from "~/slices";

export default {
  data() {
    return { components };
  },
  async asyncData({ $prismic, params, i18n }) {
    const lang = i18n.locale;

    const page = await $prismic.api.getByUID("page", params.uid, { lang });
    const menu = await $prismic.api.getSingle("menu", { lang });

    return {
      page,
      menu,
    };
  },
};
</script>
