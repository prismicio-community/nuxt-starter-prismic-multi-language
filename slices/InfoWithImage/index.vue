<template>
  <section class="collapsible bg-white px-6 py-12">
    <div
      class="mx-auto grid max-w-5xl grid-flow-row-dense items-start gap-7 lg:grid-cols-2 lg:gap-12"
    >
      <div class="grid gap-7 lg:col-start-2">
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
          :field="slice.primary.text"
          :htmlSerializer="htmlSerializer"
          class="max-w-prose leading-relaxed"
        />
      </div>
      <div class="lg:col-start-1">
        <PrismicImage :field="featuredImage" class="hidden lg:block" />
        <PrismicImage
          :field="featuredImage.tablet"
          class="hidden md:block lg:hidden"
        />
        <PrismicImage :field="featuredImage.mobile" class="md:hidden" />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "InfoWithImage",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  computed: {
    featuredImage: function () {
      return this.slice.primary.featuredImage;
    },
  },
  methods: {
    htmlSerializer(type, _element, _content, children) {
      switch (type) {
        case "heading3": {
          return `<h3 class="mb-7 text-xl font-bold leading-relaxed last:mb-0">${children}</h3>`;
        }

        case "paragraph": {
          return `<p class="mb-7 last:mb-0">${children}</p>`;
        }
      }
    },
  },
};
</script>
