<template>
  <section class="email-signup">
    <div class="description">
      <prismic-rich-text :field="slice.primary.section_title" />
      <prismic-rich-text :field="slice.primary.description" />
    </div>
    <div class="form">
      <prismic-rich-text :field="slice.primary.input_label" />
      <input
        class="email-input"
        type="text"
        :placeholder="slice.primary.input_placeholder[0].text"
      />
      <input
        class="btn"
        type="submit"
        :value="slice.primary.button_text[0].text"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: ["slice"],
  name: "email-signup"
};
</script>

<style lang="sass" scoped>
.email-signup
  display: flex
  flex-direction: column
  align-items: center

.email-signup .description
  display: flex
  flex-direction: column
  align-items: center

.email-signup .description::v-deep p
  max-width: 723px
  line-height: 40px
  font-size: 23px
  font-weight: 500
  text-align: center

.email-signup .form
  display: block
  width: 100%
  max-width: 500px
  padding-left: 0
  font-weight: 900

.email-signup .form::v-deep p
  margin: 1rem 0 0rem
  line-height: 1.5
  font-size: 1rem
  font-weight: 500
  text-align: left

.email-signup .form::v-deep .email-input
  box-sizing: border-box
  margin-top: 10px
  padding: 10px 20px
  font-size: 18px
  color: black
  background-color: transparent
  border: 1px solid #2d2d2d
  border-radius: 6px
  width: 100%
  height: 60px
  margin: 4px 0

.email-signup .form::v-deep .btn
  color: white
  background-color: black
  width: 100%
  height: 60px
  margin: 4px 0
  border-radius: 5px

@media (min-width: 1100px)
  .email-signup
    flex-direction: row
    justify-content: space-between

  .email-signup .description
    align-items: baseline

  .email-signup .description::v-deep p
    text-align: left

  .email-signup .form
    display: flex
    flex-direction: column
    margin-left: 165px

  .email-signup .form::v-deep input
    width: 390px !important

  .email-signup .form::v-deep button
    width: 390px !important
</style>

