<script setup lang="ts">
import type { Content } from '@prismicio/client'
import type { RichTextComponents } from '@prismicio/vue';
import defaultComponents from '~/prismic/richTextComponents';

defineProps(getSliceComponentProps<Content.HeroSlice>());

const components: RichTextComponents = {
  ...defaultComponents,
  heading1: { as: 'h2', class: 'font-semibold tracking-tighter text-5xl md:text-[5rem] mb-6 last:mb-0' },
  paragraph: { class: 'mb-6 last:mb-0' },
}
</script>

<template>
  <Bounded
    as="section"
    :collapsible="false"
    class="bg-white pb-0 md:pb-0"
  >
    <div class="grid grid-cols-1 justify-items-center gap-10">
      <div
        v-if="$prismic.isFilled.richText(slice.primary.text)"
        class="max-w-2xl text-center leading-relaxed"
      >
        <PrismicRichText :field="slice.primary.text" :components="components" />
      </div>
      <PrismicLink
        v-if="slice.variation === 'withButton' && slice.primary.buttonLink"
        :field="slice.primary.buttonLink"
        class="rounded bg-slate-800 px-7 py-3 font-bold text-white"
      >
        {{ slice.primary.buttonText }}
      </PrismicLink>
      <div
        v-if="slice.primary.image.url"
        class="w-full"
      >
        <PrismicImage :field="slice.primary.image" />
      </div>
    </div>
  </Bounded>
</template>
