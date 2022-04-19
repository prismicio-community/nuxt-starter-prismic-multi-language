<template>
  <Bounded as="section" class="bg-white">
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
        :html-serializer="htmlSerializer"
        wrapper="div"
        class="max-w-prose self-end leading-relaxed md:col-span-7"
      />
    </div>
  </Bounded>
</template>

<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

export default {
  // The array passed to `getSliceComponentProps` is purely optional.
  // Consider it as a visual hint for you when templating your slice.
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  methods: {
    htmlSerializer (type, element, content, children) {
      switch (type) {
        case 'heading1':
          return /* html */ `<h2 class="font-semibold tracking-tighter text-4xl md:text-6xl mb-8 last:mb-0">${children.join('')}</h2>`

        case 'heading2':
          return /* html */ `<h3 class="font-semibold tracking-tighter text-2xl mb-2 last:mb-0">${children.join('')}</h3>`

        default:
          return this.$prismic?.htmlSerializer(type, element, content, children) ?? null
      }
    }
  }
}
</script>
