<script setup lang="ts">
import { components } from '~/slices'

const { locale } = useI18n()
const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData(`${locale.value}/${route.params.uid}` as string, () =>
  prismic.client.getByUID('page', route.params.uid as string, { lang: locale.value })
)
const settings = useSettings()

watch(() => page.value?.alternate_languages, () => {
  useAlternateLanguages().value = page.value?.alternate_languages || []
}, { immediate: true })

useHead({
  title: computed(() => `${prismic.asText(page.value?.data.title)} | ${prismic.asText(settings.value?.data.siteTitle)}`)
})
</script>

<template>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
