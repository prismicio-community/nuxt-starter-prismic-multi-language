<script setup lang="ts">
import { components } from '~/slices'

const { locale } = useI18n()
const prismic = usePrismic()
const { data: page } = useAsyncData('index', () =>
  prismic.client.getByUID('page', 'home', { lang: locale.value }), { watch: [locale] }
)

watch(page, () => {
  useAlternateLanguages().value = page.value?.alternate_languages || []
}, { immediate: true })

useHead({
  title: computed(() => prismic.asText(page.value?.data.title))
})

useSeoMeta({
  ogTitle: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
  ogImage: page.value?.data.meta_image.url,
})
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
