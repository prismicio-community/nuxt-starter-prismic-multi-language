<template>
  <section class="collapsible bg-white px-6 py-12">
    <div class="mx-auto grid max-w-5xl items-start gap-7 lg:grid-cols-2">
      <div class="grid gap-7">
        <img
          src="/images/top-icon.png"
          alt="Checkbox icon"
          class="h-14 w-14 md:h-16 md:w-16"
        />
        <PrismicText
          :field="slice.primary.sectionTitle"
          wrapper="h2"
          class="text-3xl font-bold leading-snug lg:text-5xl lg:leading-tight"
        />
        <PrismicRichText
          :field="slice.primary.leftColumnText"
          class="max-w-prose leading-relaxed"
        />
      </div>
      <div class="max-w-prose leading-relaxed">
        <PrismicRichText
          :field="slice.primary.rightColumnText"
          :htmlSerializer="htmlSerializer"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "TextInfo",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  methods: {
    htmlSerializer(type, _element, _content, children) {
      switch (type) {
        case "heading3": {
          return `<h3 class="mb-2 text-xl font-bold leading-relaxed last:mb-0">${children}</h3>`;
        }

        case "paragraph": {
          return `<p class="mb-7 last:mb-0">${children}</p>`;
        }
      }
    },
  },
};
</script>
