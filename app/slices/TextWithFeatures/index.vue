<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { RichTextComponents } from '@prismicio/vue';
import defaultComponents from '~/prismic/richTextComponents';

defineProps(getSliceComponentProps<Content.TextWithFeaturesSlice>());


const components: RichTextComponents = {
  ...defaultComponents,
  heading1: { as: 'h2', class: 'font-semibold tracking-tighter text-4xl md:text-6xl mb-4 last:mb-0' },
}

const descriptionComponents: RichTextComponents = {
  ...defaultComponents,
  heading3: { class: 'font-semibold tracking-tighter text-2xl mb-2 last:mb-0' },
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
        <div
          v-if="$prismic.isFilled.richText(slice.primary.text)"
          class="leading-relaxed"
        >
          <PrismicRichText :field="slice.primary.text" :components="components" />
        </div>
      </div>
      <ul class="grid gap-10">
        <li
          v-for="feature in slice.primary.features"
          :key="JSON.stringify(feature.description)"
        >
          <PrismicRichText :field="feature.description" :components="descriptionComponents" />
        </li>
      </ul>
    </div>
  </Bounded>
</template>

