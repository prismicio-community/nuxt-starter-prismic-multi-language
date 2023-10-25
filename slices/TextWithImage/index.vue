<script setup lang="ts">
import { type Content, type HTMLRichTextMapSerializer } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.TextWithImageSlice>(
  ['slice', 'index', 'slices', 'context']
));

const prismic = usePrismic()

const serializer: HTMLRichTextMapSerializer = {
  ...prismic.options.richTextSerializer,
  heading1: ({ children }) =>
    /* html */ `<h2 class="font-semibold tracking-tighter text-4xl md:text-6xl mb-8 last:mb-0">${children}</h2>`,
  heading2: ({ children }) =>
    /* html */ `<h3 class="font-semibold tracking-tighter text-2xl mb-2 last:mb-0">${children}</h3>`,
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
      <PrismicRichText
        v-if="$prismic.asText(slice.primary.text)"
        :field="slice.primary.text"
        :html-serializer="serializer"
        wrapper="div"
        class="max-w-prose self-end leading-relaxed md:col-span-7"
      />
    </div>
  </Bounded>
</template>
