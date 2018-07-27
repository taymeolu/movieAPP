<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">MovieRentals</b-navbar-brand> 
    </b-navbar>
    <Jumbotron></Jumbotron>
  </div>
</template>

<script>
import Jumbotron from './components/Jumbotron.vue'

export default {
  name: 'app',
  components: {
    Jumbotron,
  }
}
</script>

<style scoped>
  body{
    background: #344957;
  }
</style>
