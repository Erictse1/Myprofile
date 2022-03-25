<template>
  <ul>
    <li v-for="a in soC" :key="a.icon" class="sociallinks">
      <a :href="a.link" target="blank">
        <font-awesome-icon class="fa-2x" :icon="['fab', a.icon]"
      /></a>
      <!-- <i class="far fa-envelope"></i> -->
    </li>
  </ul>
</template>

<script>
export default {
  //   data() {
  //     return {
  //       soC
  //     }
  //   }
  props: {
    soC: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   gap: 30px;
  text-align: center;
  margin-top: 50px;
  list-style: none;

  li {
    display: inline-block;
    padding: 0 15px;
  }
  a {
    color: #fff;

    svg {
      transform: rotate(-45deg);
      transition: 0.3s;
    }
  }
  a:hover svg {
    transform: rotate(0);
    color: #fff780;
  }
}
</style>
