<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import { store } from './data/store'
export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      baseUri: 'https://api.themoviedb.org/3',
      films: store.films
    }
  },
  methods: {
    fetchFilms() {
      // parametri della call
      const config = {
        params: {
          api_key: 'fa1af265353665e324748a62f9c6b168',
          language: 'it-IT',
          query: 'anelli'
        }
      }
      // ajax call
      axios.get(`${this.baseUri}/search/movie`, config).then(
        res => {
          console.log(res.data)

          res.data.results.forEach(result => {
            this.films.push(
              {
                title: result.title,
                originalTitle: result.original_title,
                language: result.original_language,
                vote: result.vote_average
              }
            )
          });

          console.table(this.films)
        }
      )
    }
  },
  created() {
    this.fetchFilms()
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './assets/sass/style.scss'
</style>
