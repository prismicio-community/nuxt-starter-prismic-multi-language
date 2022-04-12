<template>
  <ul class="-ml-4 -mt-4 flex flex-wrap md:-ml-6 md:-mt-6">
    <li
      v-for="menuLink in menu.data.menuLinks"
      :key="$prismic.asText(menuLink.label)"
      class="pl-4 pt-4 md:pl-6 md:pt-6"
    >
      <NuxtLink
        :to="localePath($prismic.linkResolver(menuLink.link))"
        class="text-lg font-bold"
      >
        <PrismicText :field="menuLink.label" wrapper="span" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["menu"],
};
</script>
