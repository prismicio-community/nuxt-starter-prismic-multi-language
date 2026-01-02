<script setup lang="ts">
import type { Content, HTMLRichTextMapSerializer } from '@prismicio/client'

defineProps(getSliceComponentProps<Content.TextWithFeaturesSlice>());

const prismic = usePrismic()

const serializer: HTMLRichTextMapSerializer = {
  ...prismic.options.richTextSerializer,
  heading1: ({ children }) =>
    /* html */ `<h2 class="font-semibold tracking-tighter text-4xl md:text-6xl mb-4 last:mb-0">${children}</h2>`,
}

const descriptionSerializer: HTMLRichTextMapSerializer = {
  ...prismic.options.richTextSerializer,
  heading3: ({ children }) =>
    /* html */ `<h3 class="font-semibold tracking-tighter text-2xl mb-2 last:mb-0">${children}</h3>`,
}
</script>

<template>
  <Bounded
    :collapsible="false"
    as="section"
    class="bg-slate-100"
  >
    <div class="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-10 lg:gap-28">
      <div class="grid grid-cols-1 gap-8">
        <PrismicImage
          v-if="slice.primary.icon.url"
          :field="slice.primary.icon"
          class="relative"
        />
        <PrismicRichText
          v-if="$prismic.isFilled.richText(slice.primary.text)"
          :field="slice.primary.text"
          :html-serializer="serializer"
          wrapper="div"
          class="leading-relaxed"
        />
      </div>
      <ul class="grid gap-10">
        <PrismicRichText
          v-for="feature in slice.primary.features"
          :key="JSON.stringify(feature.description)"
          :field="feature.description"
          :html-serializer="descriptionSerializer"
          wrapper="li"
          class="leading-relaxed"
        />
      </ul>
    </div>
  </Bounded>
</template>

