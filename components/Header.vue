<template>
  <header class="bg-white px-6 pt-8 md:py-16">
    <div
      class="mx-auto grid max-w-5xl justify-items-center gap-4 md:grid-cols-[1fr_auto] md:justify-items-start"
    >
      <div>
        <NuxtLink :to="localePath('/')">
          <img class="" src="/images/logo.png" alt="Site logo" />
        </NuxtLink>
      </div>
      <div
        class="grid items-center justify-items-center gap-3 md:grid-cols-[1fr_auto] md:justify-items-end md:gap-6 md:justify-self-end"
      >
        <Navigation :menu="menu" />
        <LanguageSwitcher :altLangs="altLangs" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["menu", "altLangs"],
};
</script>
