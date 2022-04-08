<template>
  <ul class="-ml-4 -mt-4 flex flex-wrap">
    <li v-for="altLang in altLangs" :key="altLang.lang" class="pl-4 pt-4">
      <NuxtLink :to="localePath($prismic.linkResolver(altLang), altLang.lang)">
        <span class="sr-only">{{ altLang.lang }}</span>
        <LangIcon :lang="altLang.lang" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["altLangs"],
};
</script>
