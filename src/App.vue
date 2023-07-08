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
      baseUri: store.baseUri,
      api_key: store.api_key,
      films: [],
      series: [],
      serieGenres: [],
      filmsGenres: []
    }
  },
  methods: {
    fetchContent(endpoint, string) {
      // ajax call
      axios.get(endpoint).then(
        (res) => {
          console.log(res.data)

          if (string === 'movie') {
            this.films = res.data.results
            this.fetchActors(string, this.films)
          } else {
            this.series = res.data.results
            this.fetchActors(string, this.series)
          }
        }
      )
    },
    fetchFilter(string) {
      console.log(string)
      // monto l'endpoint con il parametro dinamico
      const filteredUriFilms = `${this.baseUri}/search/movie?api_key=${this.api_key}&query=${string}&language=it-IT`
      const filteredUriSeries = `${this.baseUri}/search/tv?api_key=${this.api_key}&query=${string}&language=it-IT`
      // prendo i generi
      this.fetchGenresList()
      // richiamo la funzione che ha la call usando l'endpoint nuovo
      this.fetchContent(filteredUriFilms, 'movie')
      this.fetchContent(filteredUriSeries, 'tv')
    },
    fetchActors(path, targets) {
      // una chiamata per ogni film/serie che esce nella ricerca
      targets.forEach(target => {
        // chiamata ajax per gli attori
        axios.get(`${store.baseUri}/${path}/${target.id}/credits?api_key=${store.api_key}`).then(
          res => {

            let actorsList = ''
            // prendo i primi 5 attori
            for (let i = 0; i < 5; i++) {
              // if in caso non ci siano almeno 5 attori
              if (res.data.cast[i]) actorsList += ` (${res.data.cast[i].name}) `
            }
            // in caso ci siano più di 5 attori
            if (res.data.cast.length > 5) actorsList += ' ...'
            target.actors = actorsList
          }
        )
      })
    },
    fetchGenresList() {
      axios.get(`${store.baseUri}/genre/movie/list?api_key=${store.api_key}`).then(
        res => {
          this.filmsGenres = res.data

          console.table(this.filmsGenres)
        }
      )
    },
    getContentGenre() {

    }
  }
}
</script>

<template>
  <AppHeader @search-change="fetchFilter" />
  <AppMain :films="films" :series="series" />
</template>

<style lang="scss">
@use './assets/sass/style.scss'
</style>
