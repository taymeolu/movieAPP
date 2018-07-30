<template>
  <div id="body">
    <NavBar></NavBar>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Body from './components/Body.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Body,
    NavBar,
    Footer
  }
}
</script>

<style scoped>
  #body{
    background-color: #344957;
  }
</style>
