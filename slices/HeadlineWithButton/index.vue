<template>
  <section class="collapsible bg-white px-6 py-12">
    <div
      class="mx-auto grid max-w-5xl items-end justify-items-center gap-6 lg:grid-cols-3"
    >
      <div class="text-center lg:col-span-2 lg:text-left">
        <PrismicText
          :field="slice.primary.headline"
          wrapper="h1"
          class="mb-4 text-4xl font-bold lg:mb-8 lg:text-8xl"
        />
        <PrismicRichText
          :field="slice.primary.description"
          class="max-w-prose text-xl leading-relaxed"
        />
      </div>
      <PrismicImage v-if="hasButtonImage" :field="slice.primary.button" />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "HeadlineWithButton",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  computed: {
    hasButtonImage: function () {
      return Boolean(this.slice.primary.button.url);
    },
  },
};
</script>
