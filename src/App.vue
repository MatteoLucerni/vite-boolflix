<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      baseUri: 'https://api.themoviedb.org/3',
      api_key: 'fa1af265353665e324748a62f9c6b168',
      films: []
    }
  },
  methods: {
    fetchFilms(endpoint) {
      // ajax call
      axios.get(endpoint).then(
        res => {
          console.log(res.data)

          this.films = res.data.results

          console.log(this.films)
        }
      )
    },
    fetchFilterFilms(string) {
      console.log(string)
      // monto l'endpoint con il parametro dinamico
      const filteredUri = `${this.baseUri}/search/movie?api_key=${this.api_key}&query=${string}&language=it-IT`

      console.log(filteredUri)
      // richiamo la funzione che ha la call usando l'endpoint nuovo
      this.fetchFilms(filteredUri)
    }
  }
}
</script>

<template>
  <AppHeader @search-change="fetchFilterFilms" />
  <AppMain :films="films" />
</template>

<style lang="scss">
@use './assets/sass/style.scss'
</style>
