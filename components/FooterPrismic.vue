<template>
  <footer class="footer">
    <a href="https://prismic.io" target="_blank" rel="noopener">
      <img class="logo" src="../assets/img/prismic-logo.svg" alt="Prismic">
    </a>
  </footer>
</template>

<script>
export default {
  name: 'footer-prismic'
}
</script>

<style lang="sass" scoped>
.footer
  font-style: italic;
  text-align: center;
  border-top: 1px solid #dadada;
  display: flex;
  flex-direction: column;

.logo
  width: 100px
</style>
