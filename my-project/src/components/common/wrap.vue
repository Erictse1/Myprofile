<template>
  <div class="outside py-0">
    <div class="topside">
      <h2>{{ title }}</h2>
    </div>
    <div class="secondside pt-lg-4">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.outside {
  border-radius: 10px;

  position: relative;
  padding: 30px;
  margin-top: 40px;

  -webkit-box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
  box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
  .secondside {
    padding: 5px 0 5px 0;
  }
}
.topside {
  border-bottom: 1px solid #e0e0e0;
  margin: 0 -30px;
  padding: 0 30px;
  padding: 30px;
  background-color: #f9f9f9;
  h2 {
    font-weight: 500;
  }
}
</style>
