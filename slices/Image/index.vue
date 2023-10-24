<script setup lang="ts">
import { type Content } from '@prismicio/client'

// The array passed to \`getSliceComponentProps\` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(getSliceComponentProps<Content.ImageSlice>(
  ['slice', 'index', 'slices', 'context']
));
</script>

<template>
  <Bounded
    as="section"
    :class="{
      'bg-slate-100': slice.variation === 'lightSlate',
      'bg-white': slice.variation === 'white'
    }"
  >
    <div class="relative">
      <div
        v-if="slice.primary.withAccent"
        class="absolute -top-4 -left-4 w-1/3"
      >
        <div class="aspect-w-1 aspect-h-1 bg-slate-200/50" />
      </div>
    </div>
    <PrismicImage
      v-if="slice.primary.image.url"
      :field="slice.primary.image"
      class="relative"
    />
  </Bounded>
</template>
