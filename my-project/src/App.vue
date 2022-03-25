<template>
  <div class="section">
    <intro :personal="myjson.personal" :social="myjson.socials"></intro>
    <div class="layout">
      <overview :personal="myjson.personal" :social="myjson.socials"></overview>
      <employment :employ="myjson.employment"></employment>
      <education :edu="myjson.education"></education>
      <profolio :project="myjson.Project"></profolio>
    </div>
  </div>
</template>
<script>
import profile from './data/profile.json'
import intro from './components/intro.vue'
import overview from './components/overview.vue'
import employment from './components/employment.vue'
import education from './components/education.vue'
import profolio from './components/profolio.vue'
export default {
  components: { intro, overview, employment, education, profolio },
  data: () => {
    return { myjson: profile }
  }
}
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.layout {
  max-width: 840px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.section {
  margin-bottom: 30px;
}
</style>
<!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
<!-- <router-view /> -->
