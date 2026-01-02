<script setup lang="ts">
import { asText } from '@prismicio/client'
import { components } from '~/slices'

const { locale } = useI18n()
const { client } = usePrismic()
const route = useRoute()
const { data: page } = await useAsyncData(`${locale.value}/${route.params.uid}` as string, () =>
  client.getByUID('page', route.params.uid as string, { lang: locale.value })
)
const settings = useSettings()

watch(() => page.value?.alternate_languages, () => {
  useAlternateLanguages().value = page.value?.alternate_languages || []
}, { immediate: true })

useHead({
  title: computed(() => `${asText(page.value?.data.title)} | ${asText(settings.value?.data.siteTitle)}`)
})
</script>

<template>
  <main>
    <SliceZone :slices="page?.data.slices ?? []" :components="components" />
  </main>
</template>
