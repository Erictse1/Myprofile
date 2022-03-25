<template>
  <div>
    <h5>{{ emp.company }} | {{ emp.postion }}</h5>
    <p>{{ emp.startdate }} - {{ emp.enddate }}</p>
    <ul v-for="(a, index) in emp.jobtcontent" :key="index">
      <li>{{ a }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    emp: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
