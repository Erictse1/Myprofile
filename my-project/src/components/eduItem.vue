<template>
  <div class="out">
    <!-- <h4 class="pt-0 my-0">
      {{ edu2.subject }}<span v-if="hasDegreeAndMajor">of</span>
      {{ school.major }} | {{ school.name }}
    </h4> -->

    <h4>{{ edu2.subject }}</h4>
    <h5>{{ edu2.schoolname }}</h5>
    <p>{{ edu2.startdate }}-{{ edu2.enddate }}</p>
  </div>

  <!-- <ul v-for="(a, index) in edu" :key="index">
    <li>{{ a.subject }} {{ a.schoolname }}</li>
  </ul> -->
</template>

<script>
export default {
  props: {
    edu2: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.out {
  padding: 5px;
}
h4 {
  font-size: 22px;
  font-weight: 300;
}

h5 {
  font-size: 20px;
  font-weight: 400;
}
</style>
