<template>
  <span :class="className" />
</template>

<script>
export default {
  props: ["lang"],
  computed: {
    className: function () {
      const code = this.lang.substring(3).toLowerCase();

      return `fi fi-${code}`;
    },
  },
};
</script>

