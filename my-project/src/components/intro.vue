<template>
  <div>
    <section class="section1">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center selfprofile">
            <img src="../assets/images/profile.jpeg" />
            <h2 class="h2class">
              Hello, I'm <strong>{{ personal.name }}</strong>
            </h2>
            <p>
              <vue-typer
                class="typer"
                :text="personal.statements"
                :repeat="Infinity"
                :shuffle="false"
                initial-action="typing"
                :pre-type-delay="70"
                :type-delay="70"
                :pre-erase-delay="2000"
                :erase-delay="250"
                erase-style="select-all"
                :erase-on-complete="false"
                caret-animation="blink"
              ></vue-typer>
            </p>
          </div>
          <introsocial :soC="social"></introsocial>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
import introsocial from './introsocial.vue'

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
  components: {
    'vue-typer': VueTyper,
    introsocial
  }
}
</script>

<style lang="scss" scoped>
.section1 {
  background: url(../assets/images/view.jpg) no-repeat 0 0;
  background-size: cover;
  height: 600px;
}
.selfprofile img {
  margin-top: 50px;
  width: 250px;
  height: 260px;
  border-radius: 20%;
}
.h2class {
  padding: 30px;
}
.typer {
  font-size: 30px;
  font-weight: 500;
  color: #d4d4bd;
  // background-color: #e91e63;
  border-radius: 5px;
  padding: 5px;
  animation: rocking 1s ease-in-out 0s infinite;
}
.typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}

@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }
  50% {
    transform: rotateZ(10deg);
  }
}
.typerbefore {
  font-size: 23px;
  font-weight: 500;
}
</style>
