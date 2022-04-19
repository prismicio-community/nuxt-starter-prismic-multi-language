<template>
  <Bounded as="footer" class="bg-gray-800 pb-12 text-slate-300 md:pb-12">
    <div class="grid grid-cols-1 justify-items-center gap-20 md:gap-24">
      <SignUpForm :settings="settings" />
      <div class="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight">
        Proudly published using <a href="https://prismic.io" class="text-white">Prismic</a>
      </div>
    </div>
  </Bounded>
</template>

<script>
export default {
  props: {
    settings: {
      type: Object,
      required: true
    }
  }
}
</script>
