<template>
    <main>
        <!-- Slice section template -->
        <div v-for="(slice, index) in slices" :key="'slice-' + index">
            <!-- Headline with button slice component -->
            <template v-if="slice.slice_type === 'headline_with_button'">
                <headline-with-button :slice="slice"/>
            </template>
            <!-- Full width image slice component -->
            <template v-else-if="slice.slice_type === 'full_width_image'">
                <full-width-image :slice="slice"/>
            </template>
            <!-- Info with image slice component -->
            <template v-else-if="slice.slice_type === 'info_with_image'">
                <info-with-image :slice="slice"/>
            </template>
            <!-- Text info slice component -->
            <template v-else-if="slice.slice_type === 'text_info'">
                <text-info :slice="slice"/>
            </template>
            <!-- Email signup slice component -->
            <template v-else-if="slice.slice_type === 'email_signup'">
                <email-signup :slice="slice"/>
            </template>
        </div>
    </main>
</template>

<script>
// Imports for all slices
const HeadlineWithButton = () => import("./slices/HeadlineWithButton.vue");
const FullWidthImage = () => import("./slices/FullWidthImage.vue");
const InfoWithImage = () => import("./slices/InfoWithImage.vue");
const TextInfo = () => import("./slices/TextInfo.vue");
const EmailSignup = () => import("./slices/EmailSignup.vue");

export default {
  props: ['slices'],
  name: 'slices-block',
  components: {
    HeadlineWithButton,
    FullWidthImage,
    InfoWithImage,
    TextInfo,
    EmailSignup
  },
}
</script>