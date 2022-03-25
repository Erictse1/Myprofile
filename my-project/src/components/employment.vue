<template>
  <wrap title="Employment history">
    <template v-for="(a, index) in employ">
      <!-- <ul v-for="(a, index) in employ" :key="index">
        <h4>{{ a.company }} | {{ a.postion }}</h4>
      </ul> -->
      <employmentItem :emp="a" :key="index + 1"></employmentItem>
      <hr :key="a.company" v-if="index !== employ.length - 1" />
    </template>
  </wrap>
</template>
<script>
import wrap from './common/wrap.vue'
import employmentItem from './employmentItem.vue'
export default {
  components: { wrap, employmentItem },
  props: {
    employ: {
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
