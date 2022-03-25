<template>
  <div class="Tcontainer" @click="ModalEM">
    <img
      src="../assets/images/projects/p1thumb.jpeg"
      v-if="project2.code === 1"
      alt=""
      class="pic1"
    />
    <img
      src="../assets/images/projects/p2thumb.jpeg"
      v-if="project2.code === 2"
      alt=""
      class="pic2"
    />
    <img
      src="../assets/images/projects/p3thumb.png"
      v-if="project2.code === 3"
      alt=""
      class="pic3"
    />

    <div class="hover" @mouseover="showOr" @mouseleave="showOr"></div>
    <!--  -->
    <div class="fontclass1">
      <div class="fontclass2" v-if="show">
        <font-awesome-icon icon="play" size="2xl"></font-awesome-icon>
      </div>
    </div>
    <div class="mt-1 title">
      <strong>{{ project2.name }}</strong>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  props: {
    project2: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    showOr() {
      this.show = !this.show
      //   console.log('succeed')
    },
    ModalEM() {
      this.$emit('ModalEM2', 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.pic1 {
  width: 750px;
  height: 350px;
}
.pic2 {
  width: 750px;
  height: 350px;
}
.pic3 {
  width: 750px;
  height: 350px;
}
.title {
  text-align: center;
  margin: 5px 0;
}
.Tcontainer {
  position: relative;
  img {
    border-radius: 10px;
  }
}
.hover {
  border-radius: 10px;
  position: absolute;
  top: 0;
  width: 750px;
  height: 350px;
  transition: all 0.15s;
}
.hover:hover {
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
}
.fontclass1 {
  position: absolute;
  //   width: 750px;
  //   height: 350px;
  //  height and width affect the translate -50% -50%
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);
}
.fontclass2 {
  color: #fff780;
}
</style>
