<template>
  <section class="bg-white px-6 py-12 md:pb-24">
    <div
      class="mx-auto grid max-w-5xl items-start justify-items-center gap-6 lg:grid-cols-12"
    >
      <div class="text-center lg:col-span-5 lg:text-left">
        <h2 class="mb-4 text-4xl font-bold lg:text-5xl">
          <PrismicRichText :field="slice.primary.sectionTitle" />
        </h2>
        <div class="max-w-2xl text-xl leading-relaxed">
          <PrismicRichText :field="slice.primary.description" />
        </div>
      </div>
      <div class="grid w-full max-w-sm gap-3 lg:col-span-7">
        <PrismicRichText :field="slice.primary.inputLabel" />
        <input
          class="rounded-md border border-black px-6 py-4 placeholder-neutral-400"
          type="text"
          name="FirstName"
          :placeholder="inputPlaceholder"
        />
        <input
          class="rounded-md bg-black px-6 py-4 text-white"
          type="submit"
          :value="buttonText"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "EmailSignup",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
  computed: {
    inputPlaceholder: function () {
      return this.$prismic.asText(this.slice.primary.inputPlaceholder);
    },
    buttonText: function () {
      return this.$prismic.asText(this.slice.primary.buttonText);
    },
  },
};
</script>
