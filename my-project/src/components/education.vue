<template>
  <wrap title="Education">
    <template v-for="(a, index) in edu">
      <eduItem :edu2="a" :key="index"></eduItem>
      <hr class="mt-0" v-if="index !== edu.length - 1" :key="index.startdate" />
    </template>
  </wrap>
</template>

<script>
import wrap from './common/wrap.vue'
import eduItem from './eduItem.vue'

export default {
  components: { wrap, eduItem },
  props: {
    edu: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style></style>
