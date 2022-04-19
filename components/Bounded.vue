<template>
  <Component
    :is="as"
    :data-collapsible="collapsible || null"
    class="px-6"
    :class="{
      'py-8 md:py-10': yPadding === 'sm',
      'py-20 md:py-32': yPadding === 'base',
    }"
  >
    <div class="mx-auto w-full max-w-6xl">
      <slot />
    </div>
  </Component>
</template>

<script>
export default {
  props: {
    as: {
      type: [String, Object, Function],
      default: 'div'
    },
    yPadding: {
      type: String,
      default: 'base'
    },
    collapsible: {
      type: Boolean,
      default: true
    }
  }
}
</script>
