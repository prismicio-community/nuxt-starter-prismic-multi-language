<script setup lang="ts">
import { type Content, type HTMLRichTextMapSerializer } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.HeroSlice>(
  ['slice', 'index', 'slices', 'context']
));

const prismic = usePrismic()

const serializer: HTMLRichTextMapSerializer = {
  ...prismic.options.richTextSerializer,
  heading1: ({ children }) =>
    /* html */ `<h2 class="font-semibold tracking-tighter text-5xl md:text-[5rem] mb-6 last:mb-0">${children}</h2>`,
  paragraph: ({ children }) =>
    /* html */ `<p class="mb-6 last:mb-0">${children}</p>`
}
</script>

<template>
  <Bounded
    as="section"
    :collapsible="false"
    class="bg-white pb-0 md:pb-0"
  >
    <div class="grid grid-cols-1 justify-items-center gap-10">
      <PrismicRichText
        v-if="$prismic.asText(slice.primary.text)"
        :field="slice.primary.text"
        :html-serializer="serializer"
        wrapper="div"
        class="max-w-2xl text-center leading-relaxed"
      />
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
