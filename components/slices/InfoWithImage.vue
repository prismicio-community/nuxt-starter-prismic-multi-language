<template>
  <section class="info-with-image">
    <div class="featured-image">
      <picture>
        <source
          :srcSet="slice.primary.featured_image.mobile.url"
          :alt="slice.primary.featured_image.mobile.alt"
          media="max-width: 500px"
        />
        <source
          :srcSet="slice.primary.featured_image.tablet.url"
          :alt="slice.primary.featured_image.tablet.alt"
          media="max-width: 1100px"
        />
        <img
          :src="slice.primary.featured_image.url"
          :alt="slice.primary.featured_image.alt"
        />
      </picture>
    </div>
    <div class="text-content">
      <prismic-rich-text :field="slice.primary.section_title" />
      <prismic-rich-text :field="slice.primary.text" />
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "info-with-image"
};
</script>

<style lang="sass" scoped>
.info-with-image
  display: flex
  align-items: unset
  flex-direction: column
  margin: auto
  padding-bottom: 30px

.info-with-image .featured-image
  order: 2
  margin: 0
  padding-top: 20px

.info-with-image .featured-image img
  width: 100%

.info-with-image .text-content
  margin-bottom: 30px
  text-align: left

.info-with-image .text-content h1, h2
  margin-top: 20px

.info-with-image .text-content h3
  margin-top: 20px
  line-height: 36px
  font-size: 20px

.info-with-image .text-content p
  margin-top: 20px
  line-height: 30px
  font-size: 16px

@media (min-width: 1100px)
  .info-with-image
    display: flex
    flex-direction: row-reverse
    margin-bottom: 110px

  .info-with-image .featured-image
    margin-right: 60px

  .info-with-image .featured-image img
    width: 516px
</style>
