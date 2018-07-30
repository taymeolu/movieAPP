<template>
  <div id="body">
    <NavBar></NavBar>
    <Body></Body>
  </div>
</template>

<script>
import Body from './components/Body.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    Body,
    NavBar
  }
}
</script>

<style scoped>
  #body{
    background-color: #344957;
  }
</style>
