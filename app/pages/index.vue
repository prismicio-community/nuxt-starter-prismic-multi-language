<script setup lang="ts">
import { asText } from '@prismicio/client'
import { components } from '~/slices'

const { locale } = useI18n()
const { client } = usePrismic()
const { data: page } = await useAsyncData(`${locale.value}/index`, () =>
  client.getByUID('page', 'home', { lang: locale.value })
)

watch(() => page.value?.alternate_languages, () => {
  useAlternateLanguages().value = page.value?.alternate_languages || []
}, { immediate: true })

useHead({
  title: computed(() => asText(page.value?.data.title))
})
</script>

<template>
  <main>
    <SliceZone :slices="page?.data.slices ?? []" :components="components" />
  </main>
</template>
