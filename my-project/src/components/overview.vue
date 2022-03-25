<template>
  <wrap title="Overview">
    <p>
      Hello, My name is Eric. I graduated from Product engineering with
      marketing and I have some financial background in customer service. That
      enable me to have a better UX view for designing.
      <br /><br />
      <!-- <br />Please also have a look to my profiles to know more about me as -->
      <!-- <template v-for="(a, index) in social">
        <a :href="a.link" :style="{ color: a.color }" :key="index">{{
          a.icon
        }}</a
        >{{ !index == 0 ? '.' : ' and ' }}</template
      > -->
    </p>
  </wrap>
</template>
<script>
import wrap from './common/wrap.vue'
export default {
  props: {
    personal: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    },
    social: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    }
  },
  components: { wrap }
}
</script>

<style lang="scss" scoped>
a {
  display: inline-block;

  text-decoration: none;
}
</style>
