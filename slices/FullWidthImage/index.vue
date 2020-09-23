<template>
  <section class="full-width-image auto-grid">
    <div class="main-img">
      <prismic-image :field="slice.primary.image" />
    </div>
    <div class="background" :class="slice.primary.background_image_position">
      <img src="./../../images/full-width-image-background.png" />
    </div>
  </section>
</template>

<script>
import backgroundImage from "../../images/full-width-image-background.png";

export default {
  props: ["slice"],
  name: "full-width-image"
};
</script>

<style lang="sass" scoped>
.full-width-image
  position: relative
  margin-top: 0
  padding-top: 0

.full-width-image .main-img
  z-index: 1

.full-width-image .main-img img
  width: 100%

.full-width-image .background
  display: none
  position: absolute
  top: 0

.full-width-image .background img
  width: 790px
  height: 608px

@media (min-width: 1200px)
  .full-width-image
    position: relative
    margin-top: 50px
    padding-top: 110px

  .full-width-image .background
    display: flex
    &.Left
      display: flex
      justify-self: start
      left: -100px
    &.Right
      display: flex
      justify-self: end
      right: -100px
  .background &.right-bg img
    transform: scaleX(-1)


</style>
