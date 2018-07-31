<template>
  <div>
    <b-jumbotron class ="content" header="Rent Movies Here!">

    </b-jumbotron>
    <h1>Latest Movies</h1>

    <div>
      <hr>
      <b-container fluid>
        <b-row>
          <b-col sm="6" md="4" v-for="movie in movies" :key="movie.id">
            <img :src="movie.image" alt="" srcset="">
            <p><a href="#">{{movie.title.toUpperCase()}}</a></p>
            <div class="buttons">
              <b-button>Only ₦{{movie.price}}!</b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

  </div>
</template>

<script>
export default {
  name: "Body",
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
    background-size: 100%;
  }
  h1 {
    text-align: center;
    color: white;
    margin-bottom: 2%;
  }

  img{
    max-height: 100%;
    max-width: 100%;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  .buttons{
    text-align: center
  }

  p{
    text-align: center;
  }

  hr{
    border: 0;
    height: 1px;
    background: #333;
    background-image: linear-gradient(to right, #ccc, #333, #ccc);
  }

  .col-sm-6, .col-md-4{
    margin-bottom: 1%;
  }

  .container-fluid{
    padding-left: 5%;
    padding-right: 5%;
  }
</style>
