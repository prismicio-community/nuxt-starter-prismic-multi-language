<template>
  <section class="headline-with-button">
    <div>
      <prismic-rich-text :field="slice.primary.headline" />
      <prismic-rich-text :field="slice.primary.description" />
    </div>
    <div class="button">
      <prismic-image :field="slice.primary.button" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "headline-with-button"
};
</script>

<style lang="sass" scoped>
.headline-with-button
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  text-align: center

.headline-with-button /deep/ h1
  line-height: 4rem
  font-size: 43px

.headline-with-button /deep/ p
  max-width: 691px
  margin-top: 20px
  line-height: 40px
  font-size: 23px
  font-weight: 500

.headline-with-button /deep/ .button
  display: flex
  align-self: center
  padding-top: 20px

@media (min-width: 1100px)
  .headline-with-button
    display: flex
    flex-direction: row
    padding-top: 40px
    text-align: inherit

  .headline-with-button /deep/ h1
    max-width: 645px
    line-height: inherit
    font-size: 100px
    letter-spacing: 0
    font-weight: 600

  .headline-with-button /deep/ p
    max-width: 617px

  .headline-with-button /deep/ .button
    display: flex
    align-self: flex-end
    justify-content: flex-end
</style>
