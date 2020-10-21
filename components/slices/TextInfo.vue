<template>
  <section class="text-info">
    <div class="left-column">
      <prismic-rich-text :field="slice.primary.section_title" />
      <prismic-rich-text :field="slice.primary.left_column_text" />
    </div>
    <div class="right-column">
      <prismic-rich-text :field="slice.primary.right_column_text" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "text-info"
};
</script>

<style lang="sass" scoped>
.text-info .left-column /deep/ h1
  max-width: 415px
  margin: 30px 0px 20px 0px

.text-info .left-column /deep/ h2
  max-width: 415px
  margin: 30px 0px 20px 0px

.text-info .left-column /deep/ p
  max-width: 1075px
  line-height: 40px
  font-size: 23px
  font-weight: 500

.text-info .right-column /deep/ h3
  font-size: 20px
  line-height: 36px

.text-info .left-column /deep/ h3
  font-size: 20px
  line-height: 36px


.text-info .right-column /deep/ p
  max-width: 1075px
  margin: 10px 0 20px
  line-height: 30px
  font-size: 16px
  font-weight: 400

.text-info .left-column /deep/ p
  max-width: 1075px
  margin: 10px 0 20px
  line-height: 30px
  font-size: 16px
  font-weight: 400

.text-info .right-column
  margin-left: 0

@media (min-width: 1100px)
  .text-info
    display: flex
    flex-direction: row

  .text-info .right-column /deep/ h3
    font-size: 20px
    line-height: 36px

  .text-info .left-column /deep/ h3
    font-size: 20px
    line-height: 36px

  .text-info .right-column
    margin-left: 135px
</style>
