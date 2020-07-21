<template>
  <header class="site-header">
    <nuxt-link to="./" class="logo">
      <img src="./../images/logo.png" alt="Facebook social icon" />
    </nuxt-link>
    <nav>
      <ul>
        <li v-for="menuLink in menuLinks" :key="menuLink.id">
          <prismic-link :field="menuLink.link">{{ $prismic.asText(menuLink.label) }}</prismic-link>
        </li>
        <li v-for="altLang in altLangs" :key="altLang.id">
          <nuxt-link :to="$prismic.linkResolver(altLang)">
            <span :class="'flag-icon flag-icon-' + altLang.lang.slice(-2)"></span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>

export default {
  props: ["altLangs", "menuLinks"],
  name: "header-prismic"
};
</script>

<style lang="sass">
.site-header
  height: 30px
  padding: 50px 0 40px;
  color: #484d52
  max-width: 1080px
  font-weight: 700
  a
    color: #484d52
    font-weight: 700
  nav a:hover
    color: #72767B

.homepage .site-header
  color: #ffffff
  a
    color: #ffffff
  nav a:hover
    color: #c8c9cb

.site-header
  .logo
    display: inline-block
    font-size: 22px
    font-weight: 900
    padding-bottom: 40px
    img
      margin-right: 4px
      vertical-align: text-top
      width: 70%;
  nav
    float: right
    ul
      margin: 0
      padding-left: 0
    li
      display: inline-block
      margin-left: 40px

@media (max-width: 1060px)
  .site-header
    padding: 40px 60px;


@media (max-width: 767px)
  .site-header
    height: auto

  .homepage .site-header
    position: absolute
    left: 0
    right: 0

  .site-header
    .logo
      display: block
      text-align: center
      img
        width: 40%;
    nav
      float: none
      text-align: center
      li
        display: inline-block
        margin-left: 10px
        margin-right: 10px
</style>


