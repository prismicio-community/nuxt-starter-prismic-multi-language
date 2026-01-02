<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { RichTextComponents } from '@prismicio/vue';
import defaultComponents from '~/prismic/richTextComponents';

defineProps(getSliceComponentProps<Content.TextWithImageSlice>());

const components: RichTextComponents = {
  ...defaultComponents,
  heading1: { as: 'h2', class: 'font-semibold tracking-tighter text-4xl md:text-6xl mb-8 last:mb-0' },
  heading2: { as: 'h3', class: 'font-semibold tracking-tighter text-2xl mb-2 last:mb-0' },
}
</script>

<template>
  <Bounded
    as="section"
    class="bg-white"
  >
    <div class="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16 lg:gap-28">
      <div class="relative max-w-xs md:col-span-5 md:max-w-none">
        <div class="absolute -top-6 -left-6 w-2/3">
          <div class="aspect-w-1 aspect-h-1 bg-slate-100/50" />
        </div>
        <PrismicImage
          v-if="slice.primary.image.url"
          :field="slice.primary.image"
          class="relative"
        />
      </div>
      <div
        v-if="$prismic.isFilled.richText(slice.primary.text)"
        class="max-w-prose self-end leading-relaxed md:col-span-7"
      >
        <PrismicRichText :field="slice.primary.text" :components="components" />
      </div>
    </div>
  </Bounded>
</template>
