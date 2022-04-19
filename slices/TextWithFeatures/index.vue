<template>
  <Bounded :collapsible="false" as="section" class="bg-slate-100">
    <div class="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-10 lg:gap-28">
      <div class="grid grid-cols-1 gap-8">
        <PrismicImage
          v-if="slice.primary.icon.url"
          :field="slice.primary.icon"
          class="relative"
        />
        <PrismicRichText
          v-if="$prismic.asText(slice.primary.text)"
          :field="slice.primary.text"
          :html-serializer="textHTMLSerializer"
          wrapper="div"
          class="leading-relaxed"
        />
      </div>
      <ul class="grid gap-10">
        <PrismicRichText
          v-for="item in slice.items"
          :key="$prismic.asText(item.featureDescription)"
          :field="item.featureDescription"
          :html-serializer="descriptionHTMLSerializer"
          wrapper="li"
          class="leading-relaxed"
        />
      </ul>
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
    textHTMLSerializer (type, element, content, children) {
      switch (type) {
        case 'heading1':
          return /* html */ `<h2 class="font-semibold tracking-tighter text-4xl md:text-6xl mb-4 last:mb-0">${children.join('')}</h2>`

        default:
          return this.$prismic?.htmlSerializer(type, element, content, children) ?? null
      }
    },
    descriptionHTMLSerializer (type, element, content, children) {
      switch (type) {
        case 'heading3':
          return /* html */ `<h3 class="font-semibold tracking-tighter text-2xl mb-2 last:mb-0">${children.join('')}</h3>`

        default:
          return this.$prismic?.htmlSerializer(type, element, content, children) ?? null
      }
    }
  }
}
</script>
