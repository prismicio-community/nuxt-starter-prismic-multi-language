<template>
  <section class="bg-white px-6 py-12 lg:pt-36">
    <div class="relative mx-auto max-w-5xl">
      <img
        src="/images/full-width-image-background.png"
        alt=""
        width="{1686}"
        height="{1380}"
        class="absolute -top-24 hidden w-8/12 lg:block"
        :class="{
          '-left-24': slice.primary.backgroundPosition === 'Left',
          '-right-24': slice.primary.backgroundPosition !== 'Left',
        }"
      />
      <PrismicImage
        v-if="hasImage"
        :field="slice.primary.image"
        class="relative"
      />
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "FullWidthImage",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  computed: {
    hasImage: function () {
      return Boolean(this.slice.primary.image.url);
    },
  },
};
</script>
