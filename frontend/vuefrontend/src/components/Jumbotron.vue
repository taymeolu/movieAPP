<template>
  <div>
    <b-jumbotron class ="content" header="Rent Movies Here!">

    </b-jumbotron>
    <h1>Latest Movies</h1>
    <div>
      <b-container fluid>
        <b-row>
          <b-col sm="6" md="4" v-for="movie in movies" :key="movie.id">
            <img :src="movie.image" alt="" srcset="">
            <p><a href="#">{{movie.title.toUpperCase()}}</a></p>
            <b-button>Only ₦{{movie.price}}!</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
  data() {
    return {
      movies: [],
      errors: []
    };
  },

  created() {
    var axios = require('axios')
    axios
      .get(`http://localhost:1337/search`)
      .then(response => {
        this.movies = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  margin-top: 1%;
  background-image: url("../assets/popcorn.jpg");
}
h1 {
  text-align: center;
  margin-bottom: 2%;
}
img{
  max-height: 100%;
  max-width: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
}
button{
  align-self: auto;
}
p{
  text-align: center;
}
</style>
