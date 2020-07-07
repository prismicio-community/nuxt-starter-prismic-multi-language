<template>
  <footer class="footer">
    <p class="copyright">© 2019 Todoapp-Powered by Prismic</p>
    <div class="social">
      <img src="./../images/facebook.png" alt="Facebook social icon" />
      <img src="./../images/instagram.png" alt="Instagram social icon" />
      <img src="./../images/twitter.png" alt="Twitter social icon" />
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-prismic"
};
</script>

<style lang="sass" scoped>
footer
  font-style: italic
  text-align: center
  border-top: 1px solid #dadada
  display: flex
  flex-direction: column

footer .copyright
  display: flex
  justify-content: center

footer .social
  padding-top: 4%
  display: flex
  justify-content: center

footer .social img
  padding: 5px 16px
  width: 19px

@media (min-width: 610px)
  footer
    display: flex
    flex-direction: row
    justify-content: space-between

  footer .social
    padding-top: 0
</style>
