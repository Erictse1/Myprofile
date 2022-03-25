<template>
  <div class="background" @click="$emit('close')">
    <div class="secondbackgoun">
      <div class="toppart">
        <slot name="top"></slot>
        <button @click="$emit('close')" class="close">
          <span>&times;</span>
        </button>
      </div>
      <slot name="main"></slot>
      <slot name="role"></slot>
      <slot name="link"></slot>
    </div>
    <!-- <slot name="main" class="mainpart"></slot> high:slot cannot be add css -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.background {
  color: black;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.secondbackgoun {
  background: white;
  width: 100%;
  max-width: 1000px;
  margin: 80px auto;
  padding: 30px;
  position: relative;
  border-radius: 15px;
}
.toppart {
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.close {
  position: absolute;
  top: 30px;
  right: 50px;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  border: none;
  color: white;
}
</style>
