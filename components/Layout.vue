<template>
  <div>
    <Header :altLangs="altLangs" :menu="menu" />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  props: ["altLangs", "menu"],
};
</script>

