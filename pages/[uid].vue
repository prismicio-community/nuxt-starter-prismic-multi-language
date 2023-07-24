<script setup lang="ts">
import { components } from '~/slices'

const { locale } = useI18n()
const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData('[uid]', () =>
  prismic.client.getByUID('page', route.params.uid as string, { lang: locale.value }), { watch: [locale] }
)
const settings = useSettings()

watch(page, () => {
  useAlternateLanguages().value = page.value?.alternate_languages || []
}, { immediate: true })

useHead({
  title: computed(() => `${prismic.asText(page.value?.data.title)} | ${prismic.asText(settings.value?.data.siteTitle)}`)
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
