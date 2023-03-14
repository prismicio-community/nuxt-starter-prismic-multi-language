<template>
  <SliceSimulator v-slot="{ slices }">
    <SliceZone :slices="slices" :components="components" />
  </SliceSimulator>
</template>

<script>
import { SliceSimulator } from '@prismicio/slice-simulator-vue'
import { components } from '~/slices'

export default {
  nuxtI18n: false,
  components: {
    SliceSimulator
  },
  data () {
    return { components }
  }
}
</script>
