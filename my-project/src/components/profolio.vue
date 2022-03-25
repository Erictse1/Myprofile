<template>
  <wrap title="Profolio">
    <profolioItem
      v-for="(a, index) in project"
      :project2="a"
      :key="index"
      @ModalEM2="ModalEM3(a)"
    />
    <modal v-if="show" @close="show = false">
      <h3 slot="top" class="title">{{ projectObject.name }}</h3>
      <div slot="main" class="mainMargin">{{ projectObject.content }}</div>
      <div slot="role">{{ projectObject.role }}</div>
      <a slot="link" :href="this.projectObject.link" class="mainMargin"
        >Checkout Demo
      </a>
    </modal>
  </wrap>
</template>
<script>
import wrap from './common/wrap.vue'
import profolioItem from './profolioItem.vue'
import modal from './modal.vue'

export default {
  data() {
    return {
      show: false,
      projectObject: {}
    }
  },
  methods: {
    ModalEM3(a) {
      // console.log('ModalEM2', b)
      this.projectObject = a
      this.show = true
    }
  },
  components: { wrap, profolioItem, modal },
  props: {
    project: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    }
  }
}
</script>
<style>
.title {
  padding: 30px;
}
.mainpart {
  color: black;
  background-color: white;
  border-radius: 5px;
  width: 1000px !important;
  padding: 0 20px;
  margin: 0 auto;
  font-size: 18px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.mainMargin {
  margin: 40px 0;
}
a {
  display: block;
}
</style>
<!--high: <modal v-if="show" @click="show = false"></modal> cannot do that-->
